const Discord = require("discord.js");
const hmtai = require("hmtai");

exports.run = async (bot,message,args) => {
    if(!message.channel.nsfw) {return message.channel.send('Oops!, looks like this channel have nsfw not enabled!')}

    const image = hmtai.nsfw.gif();
    const embed = new Discord.MessageEmbed()
    .setTitle(`Here is your hentai nyaa~~`)
    .setColor("#EAB3E5")
    .setImage(image);
    message.channel.send(embed);
}

exports.help = {
    name: 'hentai'
}