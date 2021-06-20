const Discord = require("discord.js")
const time = new Date();

exports.run = async (bot, message, args) => {
    var toLocaleTimeString = time.toLocaleTimeString()
    var toLocaleDateString = time.toLocaleDateString();

    let embed = new Discord.MessageEmbed()
    .setTitle('Local date')
    .setDescription("`" + `Date: ${toLocaleDateString}` + "`" + " " + "`" + `Time: ${toLocaleTimeString}` + "`")
    .setColor('#'+Math.floor(Math.random()*16777215).toString(16))

    message.channel.send(embed);
}

exports.help = {
    name: 'date'
}