const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const holidayCollection = db.collection('holidays');
const eventsCollection = db.collection('events');

(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();
function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addHolidays(holidays){
    await holidayCollection.insertMany(holidays);
}
async function getHolidays(){
    return holidayCollection.find({}).toArray();
}
async function addEventbyUser(email, event){
    await eventsCollection.insertOne({...event, userEmail: email});
}
async function getEventsByUser(email){
    return eventsCollection.find({userEmail: email}).toArray();
}
async function getEventById(email, id) {
  return eventsCollection.findOne({ userEmail: email, id: id });
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addHolidays,
  getHolidays,
  getEventsByUser,
  addEventbyUser,
  getEventById,
};

