# Garrosh
world of warcraft discord bot

## Current commands  
* char [server] [chararcter name] - basic stats about a character  
* roster [show] / [add] - shows the current raid roster / add someone to the raid roster    
* class [class] - links you to the class discord  
* commands - shows the current commands  
* prefix [new prefix here] - change the bot prefix
* schedule [show] / [add] - show the current schedule / add things to weekly schedule

## Make your own version
```git clone git@github.com:Danex2/Garrosh.git```  
then inside of the main folder   
```npm install```    
[Grab a blizzard dev key from here](https://dev.battle.net/)  

[Sign into discord and create an app and get the discord token](https://discordapp.com/developers/docs/intro)    
Inside the main folder create a botSettings.json file and place this inside of it
place the discord token in the "place token here" and the blizzard key in the "blizzard key here"  
```
{
    "token": "PLACE TOKEN HERE",
    "prefix": "make whatever prefix you want here Ex. (!, >, #, ^)",
    "blizzKey": "BLIZZARD KEY HERE"
}
```
then just run the bot by running `nodemon bot.js`  
that should be it, if you have any problems dm me on discord. dane#9013
