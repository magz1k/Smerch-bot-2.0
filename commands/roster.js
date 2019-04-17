const Discord = require("discord.js");
const roster = require('./../roster.json');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    if (args[0] === 'add') {
        [arg, role, ...args] = [...args];
        roster[role] = args
        fs.writeFile("./roster.json", JSON.stringify(roster), (err) => console.error);
    } else if (args[0] === 'show') {
        embed = new Discord.RichEmbed()
            .setColor("#b34d4d")
            .addField("Tanks", roster['tank'].join(' / '))
            .addField("Healers", roster['healer'].join(' / '))
            .addField("DPS", roster['dps'].join(' / '))
        message.channel.send({ embed });
    }
}

module.exports.help = {
    name: "roster"
}

//this command will handle the guild raid team roster