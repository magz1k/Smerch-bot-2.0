const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const wowClass = args[0]
    switch (wowClass) {
        case 'mage':
            message.channel.send('some url');
            break;
        case 'dk':
            message.channel.send('some url');
            break;
        case 'dh':
            message.channel.send('some url');
            break;
        case 'hunter':
            message.channel.send('some url');
            break;
        case 'monk':
            message.channel.send('some url');
            break;
        case 'paladin':
            message.channel.send('some url');
            break;
        case 'priest':
            message.channel.send('some url');
            break;
        case 'rogue':
            message.channel.send('some url');
            break;
        case 'shaman':
            message.channel.send('some url');
            break;
        case 'warlock':
            message.channel.send('some url');
            break;
        case 'warrior':
            message.channel.send('some url6');
            break;
        case 'druid':
            message.channel.send('some url');
            break;
    }


}

module.exports.help = {
    name: "class"
}


//will return the class discord/website
