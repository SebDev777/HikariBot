const Discord = require('discord.js');
const bot = new Discord.Client({ws: {intents: Discord.Intents.ALL}});
const fs = require('fs');
const { request } = require('http');
bot.commands = new Discord.Collection();

bot.on('ready', () => {
    console.log('Hikari is online!');

    fs.readdir('./commands', (err, files) => {
        if(err) return console.log(err);
        let jsfile = files.filter(f => f.split(".").pop() == 'js');

        if(jsfile.lenght == 0) { return console.log("Could not find any commands")}
        
        jsfile.forEach(f => {
            let props = require(`./commands/${f}`);
            bot.commands.set(props.help.name, props)
        })
    })
});

let prefix = 'h!';

bot.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.type !== 'text') return;
    // hello there ['hello', 'there']
    // !ban user <reason> ['!ban', 'user', 'reason']
    let messageArray = message.content.split(' ');
    let cmd = messageArray[0].slice(prefix.length)
    let args = messageArray.slice(1)

    if(!message.content.startsWith(prefix)) return;

    if(cmd === 'newPrefix' || cmd == 'newprefix' || cmd == 'np') {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You dont have permissions to use this command!').then(msg => {setTimeout(() => msg.delete(), 5000)}).catch()
        let requestedPrefix = args[0]

        if(!requestedPrefix) {return message.reply("Especify a prefix like this: `!newPrefix <prefix>`")} else {
            if(requestedPrefix.length > 1) {return message.reply('New prefix is too long, max characters: 1!').then(msg => {setTimeout(() => msg.delete(), 5000)}).catch()}

            if(typeof(requestedPrefix) == 'number') {
                return message.reply('Invalid prefix!, you set it as number').then(msg => {setTimeout(() => msg.delete(), 5000)}).catch()

            } else {
                const code = "```"
                message.reply(` ${code} You set the prefix to: <${requestedPrefix}>\n----------------------------\nnew: h${requestedPrefix}, old: <${prefix}> ${code}`).then(msg => {setTimeout(() => msg.delete(), 5000)}).catch()
                prefix = 'h'+requestedPrefix
                console.log(prefix)
            }
        }

    } else if(cmd == 'resetPrefix' || cmd == 'resetprefix' || cmd == 'rp') {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You dont have permissions to use this command!').then(msg => {setTimeout(() => msg.delete(), 5000)}).catch()
        prefix = 'h!'

    } else if(cmd == 'prefix' || cmd == 'pr') {
        const code = "```"
        message.reply(` ${code} Current prefix: <${prefix}>\n----------------------------\nuse ${prefix}newprefix <prefix_here> to change the prefix! ${code}`).then(msg => {setTimeout(() => msg.delete(), 5000)}).catch()
    }

    let commandFile = bot.commands.get(cmd);
    if(commandFile) {commandFile.run(bot, message, args)} else {
        if(cmd == 'resetPrefix' || cmd == 'resetprefix' || cmd == 'rp' || cmd == 'prefix' || cmd == 'pr' || cmd === 'newPrefix' || cmd == 'newprefix' || cmd == 'np') return;
        const code = "```"
        message.reply(`${code}Invalid / Not found command, type ${prefix}about to see commands and info.${code}`).then(msg => {setTimeout(() => msg.delete(), 5000)}).catch()
    }
});

bot.on('guildMemberAdd', (member) => {
    let embed = new Discord.MessageEmbed()
    .setTitle('Welcome to the server!')
    .setDescription(`Thank you for joining to the server!, make sure read the rules!\n**Current member count:** ${member.guild.memberCount}\n**Owner:** ${member.guild.owner.user.tag}`)
    .setColor('#cc3300')
    .setAuthor(member.guild.owner.user.tag, member.guild.owner.user.avatarURL())
    .setFooter(member.guild.name, member.guild.iconURL())
    .setThumbnail(member.user.avatarURL());

    member.send(embed)
})

bot.login(proccess.env.token());
