exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You dont have permissions to use this command!')
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!member) return message.channel.send('Especify a member!');
    let reason = args.slice(1).join(' ');
    if(member.roles.highest.position > message.member.roles.highest.position) return message.channel.send('You cant kick this user')
    if(!reason) {reason = 'No reason provided'}
    member.kick(reason)
    message.channel.send(`kicking **${member.user.tag}** please wait...`)
    message.channel.send(`**${member.user.tag}** has been kicked from this server! reason: ${reason}`)
}

exports.help = {
    name: 'kick'
}