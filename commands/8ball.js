exports.run = async (bot, message, args) => {
    if(!args[0]) return message.channel.send('What?');
    let answers = rand = ["It's true", "It is decidedly so", "Probably", "Good prognosis", "Everything points to yes", "Without a doubt", "Yes", "Yes - definitely", "You must trust it", "Vague answer, try again", "Ask another time", "Its better not tell you now", "I can't predict it now", "Focus and ask again", "Don't count on it", "My answer is no", "My sources tell me no", "Prospects are not good", "Very doubtful"];
    let answer = answers[Math.floor(Math.random()*answers.length)];

    message.channel.send(':8ball: ' + answer)
}

exports.help = {
    name: '8ball'
}