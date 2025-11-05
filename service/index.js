const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';
const users = [];
const eventsByUser = {};
const API_KEY ="4IAp9ocJBJ8fTCqkheTGm8UnkwJAFox7";

const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.use(express.json());
app.use(cookieParser());

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('email', req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ email: user.email });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('email', req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};



// Default error handler
app.use(function (err, req, res, next) {
    console.error("Internal error:", err);
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

//get events for authenticated user
apiRouter.get('/events', verifyAuth, async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    console.log("retrieving users", user.email);
    if (!Array.isArray(eventsByUser[user.email])) {
    eventsByUser[user.email] = [];
  }

  if (eventsByUser[user.email].length === 0) {
    const testEvent = {
      id: 1,
      eventTitle: "Test Event",
      startTime: "2025-11-04T10:00",
      endTime: "2025-11-04T11:00",
      description: "This is a test event"
    };
    eventsByUser[user.email].push(testEvent);
  }
  res.json(eventsByUser[user.email]);
});

// add new events for authenticated user
apiRouter.post('/events', verifyAuth, async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  console.log("Saving event for user", user.email, req.body);

  const newEvent = {
    ...req.body,
    id: eventsByUser[user.email].length + 1, 
  };
  console.log("New event created:", newEvent);
  eventsByUser[user.email].push(newEvent);
  res.send(newEvent);
});
// get event by id 
apiRouter.get('/events/:id', verifyAuth, async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  const userEvents = eventsByUser[user.email] || [];

  const eventId = parseInt(req.params.id, 10);
  const event = userEvents.find((ev) => ev.id === eventId);

  if (!event) {
    res.status(404).send({ msg: 'Event not found' });
  } else {
     console.log(`Returning event ${eventId} for user ${user.email}`);
    res.json(event);
  }
});
// get holidays for holiday api
apiRouter.get('/holidays/:year/:country', async (req, res) => {
  const { year, country } = req.params;
  const url= `https://calendarific.com/api/v2/holidays?api_key=${API_KEY}&country=${country}&year=${year}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch holidays');

    const data = await response.json();
    const allHolidays = data.response.holidays.map((h, index) => ({
      id: `holiday-${index}`,
      name: h.name,
      description: h.description || "Holiday",
      date: { iso: h.date.iso }
    }));
    const uniqueHolidays = [];
    const seen = new Set();
    for (const h of allHolidays) {
      const key = `${h.name}-${h.date}`;
      if (!seen.has(key)) {
        seen.add(key);
        uniqueHolidays.push(h);
      }
    }

    res.json(uniqueHolidays);
  } catch (err) {
    console.error('Holiday fetch failed:', err);
    res.status(500).send({ msg: 'Error fetching holidays' });
  }
});

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  users.push(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  return users.find((u) => u[field] === value);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: false,
    httpOnly: true,
    sameSite: 'lax',
  });
}
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

