//all this does is print out the current commands
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.RichEmbed()
        .setColor("#b34d4d")
        .addField("Current commands", "prefix [new prefix here]\nroster (displays current raid roster)\nchar [server] [character]\nmythic (displays mythic prefixes)\npatch (current patch)\nsched [day] [short message]\n")
    message.channel.send({ embed });
}

module.exports.help = {
    name: "commands"
}
