const WebSocket = require('ws');
const DB = require('./database');

const userSockets = {};

function setupWebsocket(httpServer) {
  const wss = new WebSocket.Server({ server: httpServer });

  wss.on('connection', (socket) => {
    console.log('WebSocket connected');

    socket.on('message', async (msg) => {
      const data = JSON.parse(msg);

      if (data.type === "AUTH") {
        const user = await DB.getUserByToken(data.token);

        if (user) {
          socket.email = user.email;
          userSockets[user.email] = socket;
          console.log("WebSocket authenticated:", user.email);
        }
      }
    });

    socket.on('close', () => {
      if (socket.email) {
        delete userSockets[socket.email];
      }
    });
  });
}

function sendReminder(email, event) {
  const socket = userSockets[email];
  if (socket) {
    socket.send(JSON.stringify({
      type: "EVENT_REMINDER",
      event
    }));
  }
}

module.exports = {
  setupWebsocket,
  sendReminder
};
