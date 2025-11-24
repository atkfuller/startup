const DB = require('../database');
const { sendReminder } = require('./websocketService');

function startReminderService() {
  setInterval(async () => {
    const now = Date.now();
    const users = await DB.getAllUsers();

    for (const user of users) {
      const events = await DB.getEventsByUser(user.email);

      for (const event of events) {
        const eventTime = new Date(event.date).getTime();

        const isSoon = eventTime - now < 5 * 60 * 1000;     // < 5 minutes
        const isFuture = eventTime > now;

        if (!event.notified && isSoon && isFuture) {
          console.log("sending reminder for event", event.id, "to user", user.email);

          sendReminder(user.email, event);

          // update event as notified
          await DB.updateEventNotified(user.email, event.id);
        }
      }
    }
  }, 30 * 1000);
}

module.exports = { startReminderService };

