exports.run = async (bot, message, args) => {
    let random = Math.floor(Math.random() * 100)

    if(random < 20){
        message.channel.send(`**:confounded: Ups i lost!**`)
    } else {
        message.channel.send(`Pong!`)
    }
}

exports.help = {
    name: 'ping'
}