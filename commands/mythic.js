const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send("heyo")
}

module.exports.help = {
    name: "mythic"
}

//this command will return a player's highest completed mythic key (will mythic+ be a thing in BfA?)