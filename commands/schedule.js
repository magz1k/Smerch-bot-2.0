const Discord = require("discord.js");
const schedule = require("./../schedule.json");
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
  if (args[0] === 'show') {
    embed = new Discord.RichEmbed()
      .setColor("#b34d4d")
      .addField("Monday", schedule['monday'].join(' '))
      .addField("Tuesday", schedule['tuesday'].join(' '))
      .addField("Wednesday", schedule['wednesday'].join(' '))
      .addField("Thursday", schedule['thursday'].join(' '))
      .addField("Friday", schedule['friday'].join(' '))
      .addField("Saturday", schedule['saturday'].join(' '))
      .addField("Sunday", schedule['sunday'].join(' '))
    message.channel.send({ embed });
  } else if (args[0] === 'add') {
    [arg, day, ...args] = [...args];
    schedule[day] = args
    message.channel.send('Schedule updated.');
    fs.writeFile("./schedule.json", JSON.stringify(schedule), (err) => console.error);
  }

}

module.exports.help = {
  name: "schedule"
}

//this command will show raid days
