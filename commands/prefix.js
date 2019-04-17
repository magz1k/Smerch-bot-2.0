const Discord = require("discord.js");
const fs = require('fs');
const botSettings = require("./../botSettings.json");

module.exports.run = async (bot, message, args) => {
    let prefixNew = args[0];
    botSettings.prefix = prefixNew;
    fs.writeFile("./botSettings.json", JSON.stringify(botSettings), (err) => console.error);

}

module.exports.help = {
    name: "prefix"
}

//change prefix
