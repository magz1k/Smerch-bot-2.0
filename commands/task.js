const Discord = require("discord.js");
const schedule = require("./../schedule.json");
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    [day, ...args] = [...args];
    schedule[day] = args
    fs.writeFile("./schedule.json", JSON.stringify(schedule), (err) => console.error);

}

module.exports.help = {
    name: "task"
}

//this command will list the current raid schedule and should have the ability to edit the schedule from the command
