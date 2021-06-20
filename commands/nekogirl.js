const Discord = require("discord.js");
const hmtai = require("hmtai");

exports.run = async (bot,message,args) => {
    if(!message.channel.nsfw) {return message.channel.send('Oops!, looks like this channel have nsfw not enabled!')}

    const image = hmtai.neko();
    const embed = new Discord.MessageEmbed()
    .setTitle(`Neko girl aww`)
    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))
    .setImage(image);
    message.channel.send(embed);
}

exports.help = {
    name: 'nekogirl'
}