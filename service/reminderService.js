const DB= require('../database');
const {setReminder}=require('./websocketService');

function startReminderService(){
    setInterval(async ()=>{
        const now= Date.now();
        const users= await DB.getAllUsers();
        for(const user of users){
            const events= await DB.getEventsByUser(user.email);
            for(const event of events){
                const eventTime = new Date(event.date).getTime();
                if(!event.notified && eventTime- noow <5 *60 *1000 && eventTime >now){
                    console.log("sending reminder for event", event.id, "to user", user.email);
                    setReminder(user.email, event);
                }
            }
        }
    }, 30*1000);

}
module.exports={ startReminderService };

