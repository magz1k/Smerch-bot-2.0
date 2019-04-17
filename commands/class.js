const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const wowClass = args[0]
    switch (wowClass) {
        case 'mage':
            message.channel.send('https://discordapp.com/invite/0gLMHikX2aaLQJ9W');
            break;
        case 'dk':
            message.channel.send('https://discord.gg/acherus');
            break;
        case 'dh':
            message.channel.send('https://discord.gg/zGGkNGC');
            break;
        case 'hunter':
            message.channel.send('https://discord.gg/yqer4BX');
            break;
        case 'monk':
            message.channel.send('http://discord.gg/peakofserenity');
            break;
        case 'paladin':
            message.channel.send('https://discord.gg/0dvRDgpa5xZHFfnD');
            break;
        case 'priest':
            message.channel.send('https://discord.gg/HowToPriest');
            break;
        case 'rogue':
            message.channel.send('https://discord.gg/0h08tydxoNhfDVZf');
            break;
        case 'shaman':
            message.channel.send('https://discord.gg/earthshrine');
            break;
        case 'warlock':
            message.channel.send('https://discord.gg/0onXDymd9Wpc2CEu');
            break;
        case 'warrior':
            message.channel.send('https://discord.gg/0pYY7932lTH4FHW6');
            break;
        case 'druid':
            message.channel.send('https://discord.gg/0dWu0WkuetF87H9H');
            break;
    }


}

module.exports.help = {
    name: "class"
}


//will return the class discord/website