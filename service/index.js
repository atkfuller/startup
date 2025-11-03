const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';
const users = [];
const eventsByUser = {};

const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.use(express.json());
app.use(cookieParser());
//app.use(express.static('public'));

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
// app.use((_req, res) => {
//   res.sendFile('index.html', { root: 'public' });
// });

// get events for authenticated user
apiRouter.get('/events', verifyAuth, async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    console.log("retrieving users", user.email);
    const testEvent={
        id:1,
        eventTitle:"Test Event",
        startTime:"2025-11-04T10:00",
        endTime:"2025-11-04T11:00",
        description:"This is a test event"
    }
    eventsByUser[user.email] = testEvent;
    res.send(eventsByUser[user.email] || []);
});
// add new events for authenticated user
apiRouter.post('/events', verifyAuth, async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    console.log("saving event for user", user.email, req.body);
    if (!eventsByUser[user.email]) {
        eventsByUser[user.email] = [];
    }

    eventsByUser[user.email].push(req.body);
    res.status(201).end();
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
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

