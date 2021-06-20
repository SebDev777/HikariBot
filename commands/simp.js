const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
    let simprateValue = Math.floor(Math.random() * 100);

    let memberRequested = message.member
    let memberMentioned = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if(!memberMentioned){
        let embed = new Discord.MessageEmbed()
        .setTitle('Simprate')
        .setDescription(`You are **${simprateValue}%** simprate`)
        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
        .setThumbnail(memberRequested.user.avatarURL());
    
        message.channel.send(embed)
    } else {
        let embed = new Discord.MessageEmbed()
        .setTitle('Simprate')
        .setDescription(`${memberMentioned} is **${simprateValue}%** simprate`)
        .setColor('#FF8733')
        .setThumbnail(memberMentioned.user.avatarURL());
    
        message.channel.send(embed)
    }
}

exports.help = {
    name: 'simp'
}