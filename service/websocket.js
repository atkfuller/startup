const userSockets = {};  

function setupWebsocket(httpServer) {
    const wss = new WebSocketServer({ server });

    wss.on('connection', (socket) => {
        console.log('WebSocket client connected');

        socket.on('message', async (msg) => {
        const data = JSON.parse(msg);

        if (data.type === "AUTH") {
            const user = await DB.getUserByToken(data.token);

            if (user) {
            socket.email = user.email;
            userSockets[user.email] = socket;
            console.log(`WebSocket authenticated: ${user.email}`);
            } else {
            console.log("Invalid WebSocket auth token");
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
function sendReminder(email, event){
    const socket=userSockets[email];
    if(socket){
        socket.send(JSON.stringify({type:"EVENT_REMINDER", event}));
    }
}
module.exports = {setupWebsocket, sendReminder};