const Discord = require("discord.js");
const botSettings = require("./../botSettings.json");
const races = require("./../race.json");
const classes = require("./../class.json");
const blizzard = require('blizzard.js').initialize({ apikey: botSettings.blizzKey });

module.exports.run = async (bot, message, args) => {
  let [server, char] = [...args]
  blizzard.wow.character(['items'], { origin: 'us', realm: server, name: char })
    .then(response => {
      const embed = new Discord.RichEmbed()
        .setColor("#b34d4d")
        .setAuthor(`${response.data['name']}\'s profile`)
        .addField("Character name", response.data['name'], true)
        .addField("Server", response.data['realm'], true)
        .addField("Level/Race/Class", response.data['level'] + " " + races[response.data['race']] + " " + classes[response.data['class']], true)
        .addField("Item Level", response.data['items']['averageItemLevelEquipped'], true)
      message.channel.send({ embed });
      //console.log(response.data);
    }).catch(function (err) {
      if (err) {
        const embed = new Discord.RichEmbed()
          .setColor("#b34d4d")
          .setAuthor("404")
          .addField("Character not found", "Maybe a typo?")
        message.channel.send({ embed });
      }
    });
}

module.exports.help = {
  name: "char"
}

//this command will return basic info about a player's character / could include raid progression stats
