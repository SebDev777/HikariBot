const Discord = require("discord.js")

exports.run = async (bot, message, args) => {
    let amount = parseInt(args[0]);

    if(!amount) {return message.channel.send('Please send any amount')}
    if(isNaN(amount)) {
        return message.reply('You have enterd a invalid amount. Try ``purge 5``')
    } else if (amount < 2 || amount > 100) {
        return message.reply('you need to input a number between 2 and 100!');
    }

    message.channel.bulkDelete(amount);
    message.channel.send(amount + ' ' +'messages deleted');
}

exports.help = {
    name: 'purge'
}