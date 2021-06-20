const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
    let penisValue = Math.floor(Math.random() * 20);

    let memberRequested = message.member;
    let memberMentioned = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    let penis = '';

    for (let i = 0; i < penisValue; i++) {
        penis = penis + '=';
    }

    if(!memberMentioned){
        let embed = new Discord.MessageEmbed()
        .setTitle(`8${penis}D`)
        .setDescription(`${memberRequested}'s penis`)
        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
        .setThumbnail(memberRequested.user.avatarURL());
    
        message.channel.send(embed)
    } else {
        let embed = new Discord.MessageEmbed()
        .setTitle(`8${penis}D`)
        .setDescription(`${memberMentioned}'s penis`)
        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
        .setThumbnail(memberMentioned.user.avatarURL());
    
        message.channel.send(embed)
    }
}

exports.help = {
    name: 'penis'
}