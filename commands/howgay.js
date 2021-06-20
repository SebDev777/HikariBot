const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
    let howGay = Math.floor(Math.random() * 100);

    let memberRequested = message.member
    let memberMentioned = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let gayMessage1 = ', wooo looks like you are so gay!'
    let gayMessage2 = ', you are not gay!'
    let gayMessage3 = ''
    let selectedMessage = ''

    if(howGay > 50) {
        selectedMessage = gayMessage1;
    } else if(howGay < 50 & howGay > 20) {
        selectedMessage = gayMessage3;
    } else {
        selectedMessage = gayMessage2;
    }

    if(!memberMentioned){
        let embed = new Discord.MessageEmbed()
        .setTitle('How gay')
        .setDescription(`You are **${howGay}%** gay${selectedMessage} :rainbow_flag:`)
        .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
        .setThumbnail(memberRequested.user.avatarURL());
    
        message.channel.send(embed)
    } else {
        let embed = new Discord.MessageEmbed()
        .setTitle('How gay')
        .setDescription(`${memberMentioned} is **${howGay}%** gay${selectedMessage} :rainbow_flag:`)
        .setColor('#EAB3E5')
        .setThumbnail(memberMentioned.user.avatarURL());
    
        message.channel.send(embed)
    }
}

exports.help = {
    name: 'howgay'
}