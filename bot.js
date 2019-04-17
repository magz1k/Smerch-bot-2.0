const Discord = require("discord.js");
const botSettings = require("./botSettings.json");
const prefix = botSettings.prefix;
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if (jsfiles.length <= 0) {
    console.log("No commands to load.");
    return;
  }
  console.log(`Loading ${jsfiles.length} commands!`);

  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${i + 1}: ${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on('ready', async () => {
  console.log(`${bot.user.username} is online!`);
  console.log(`Bot started at ${Date()}`)
  bot.user.setActivity("In Development!")
  //add uptime at some point
});

//Add join and leave messages at some point
bot.on("guildMemberAdd", member => {
    let join = [`Lok'tar <@${member.user.id}>!`, `Welcome to the horde, <@${member.user.id}>`]
    member.guild.channels.find("name", "general").send(join[Math.floor(Math.random()*join.length)]);

});

bot.on("guildMemberRemove", member => {
  let leave = [`${member.user.username} was probably an alliance spy, hmph.`, `We have no room for weaklings like you, ${member.user.username}!`]
  member.guild.channels.find("name", "general").send(leave[Math.floor(Math.random()*leave.length)]);
});


bot.on('message', async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let messageArray = message.content.split(/\s+/g);
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if (!command.startsWith(prefix)) return;
  let cmd = bot.commands.get(command.slice(prefix.length));
  if (cmd) cmd.run(bot, message, args);


});

bot.login(botSettings.token);
