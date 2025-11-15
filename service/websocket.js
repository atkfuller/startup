const userSockets = {};  
const wss = new WebSocketServer({ server });

function setupWebsocket(httpServer) {

wss.on('connection', (socket) => {
  console.log("WebSocket client connected");

  socket.on('message', async (msg) => {
    const data = JSON.parse(msg);

    // The client sends their auth token immediately
    if (data.type === "AUTH") {
      const user = await DB.getUserByToken(data.token);
      if (user) {
        socket.email = user.email;
        userSockets[user.email] = socket;
        console.log(`WebSocket authenticated: ${user.email}`);
      } else {
        console.log("Invalid WebSocket Auth token");
      }
    }
  });

  socket.on('close', () => {
    if (socket.email) {
      delete userSockets[socket.email];
      console.log(`WebSocket disconnected: ${socket.email}`);
    }
  });
});
}