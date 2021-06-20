const Discord = require("discord.js")

exports.run = async (bot, message, args) => {

    let embed = new Discord.MessageEmbed()
    .setColor('#F6F0B5')
	.setTitle('About me ;3')
	.setDescription('Hello my name is Hikari, im a bot on development of SebDev#7777, my default prefix is h! but you can change it with h!newprefix, have fun!')
	.setThumbnail('https://i.imgur.com/uOqH8NG.png') //https://i.imgur.com/knDswc2.jpg, https://i.imgur.com/uOqH8NG.png
	.addFields(
		{ name: 'List of commands:', value: '**Info:**\nabout, date\n\n**Fun:**\n8ball, bye, hello, howgay, meme, penis, ping, simp/simprate\n\n**Moderation/Useful:**\nban, kick, purge\n\n**NSFW (Must be in a nsfw channel):**\ncum, ero, fuck, hnekogirl, randomhentai masturbate, nekogirl, yuri' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'More info:', value: ' i like anime', inline: true },
	)
	.addField('Day created', '18/6/2021', true)
	.setImage('https://i.imgur.com/knDswc2.jpg')
	.setTimestamp()
	.setFooter('DM SebDev#7777 in case of BUG', 'https://i.imgur.com/lxmyTJf.png');

    message.channel.send(embed);
}

exports.help = {
    name: 'about'
}