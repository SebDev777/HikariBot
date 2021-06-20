const Discord = require("discord.js");
const hmtai = require("hmtai");

exports.run = async (bot,message,args) => {
    if(!message.channel.nsfw) {return message.channel.send('Oops!, looks like this channel have nsfw not enabled!')}

    const memberRequested = message.member;
    const memberMentioned = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    
    const cum = hmtai.nsfw.hentai();

    if(!memberMentioned){
        let embed = new Discord.MessageEmbed()
        .setTitle(`${memberRequested.user.tag} se cojio a alguien!`)
        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
        .setImage(cum)
    
        message.channel.send(embed);
    } else {
        let embed = new Discord.MessageEmbed()
        .setTitle(`${memberRequested.user.tag} se cojio a ${memberMentioned.user.tag}!`)
        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
        .setImage(cum)
    
        message.channel.send(embed);
    }
}

exports.help = {
    name: 'fuck'
}