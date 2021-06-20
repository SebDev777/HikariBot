const Discord = require("discord.js");
const hmtai = require("hmtai");

exports.run = async (bot,message,args) => {
    if(!message.channel.nsfw) {return message.channel.send('Oops!, looks like this channel have nsfw not enabled!')}

    const image = hmtai.nsfw.yuri();
    const embed = new Discord.MessageEmbed()
    .setTitle(`Yuri image here uwu~:`)
    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
    .setImage(image);

    message.channel.send(embed);
}

exports.help = {
    name: 'yuri'
}