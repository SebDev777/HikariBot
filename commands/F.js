const fetch = require("node-fetch")
const Discord = require("discord.js")
const link = 'https://www.reddit.com/r/Animemes.json?sort=top&t=week'

exports.run = async (bot, message, args) => {
    let memberRequested = message.member;
    
    let fetchMemes = await fetch(link).then(m => m.json())
    const getMemes = fetchMemes.data.children;
    let randomMeme = getMemes[Math.floor(Math.random() * getMemes.length)]

    let embed = new Discord.MessageEmbed()
    .setTitle(randomMeme.data.title)
    .setDescription(`F por ${memberRequested} `)
    .setColor('#FF8733')
    .setImage(randomMeme.data.url);

    message.channel.send(embed)
}

exports.help = {
    name: 'animememe'
}