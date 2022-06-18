const { format } = require('date-fns');
const {v4:uuid} = require('uuid');
const fsPromises = require('fs').promises;
const fs = require('fs');
const path = require('path');

 const time = new Date();
 console.log("This is our time,date and day!", format(time, 'dd.mm.yyyy>HH:mm:ss, eeee' )) //"HH:mm,eeee"));

const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'dd.mm.yyyy  HH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}`;
    console.log(logItem);
    try {
        if(!fs.existsSync(path.join(__dirname, 'logs'))){
            await fsPromises.mkdir('logs');
            await fsPromises.appendFile(path.join('logs','eventLog.odt'),logItem)
        }
    } catch(err){
        console.log(err);
    }
}
console.log("Successful!");
module.exports = logEvents;