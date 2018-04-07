const Discord = require("discord.js");
const config = require("./config.json");
const Music = require('discord.js-musicbot-addon');


var bot = new Discord.Client();
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }
bot.on("ready", async() => {
  console.log(`${bot.user.username} готов к работе`);
  try {
    let link = await bot.generateInvite(["ADMINISTRATOR"]);
    console.log(link);
  } catch(e) {
    console.log(e.stack);
  }
});
const music = new Music(bot, {
  youtubeKey: 'AIzaSyDmIvnkWSrqJ0XAxu7hxSNilk8di1jNz48'
});
bot.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.

  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  msg = message.content.toLowerCase();

  if(msg.indexOf(config.prefixt)!== 0) return;

  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefixt.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(command === "смотри") {
    bot.user.setActivity(args.join(" "), { type: 'WATCHING' });
  }

  if(command === "тест"){
     // for (member in bot.guilds.get(message.guild.id).members) {
     //    console.log(member.id);
     // }
     for (member in message.member.user) {
         console.log(member.id);
     }

  }
  // Let's go with a few common example commands! Feel free to delete or change those.
  if(command === "скажи") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
    message.channel.send(sayMessage);
  }
    if(command === "спать") {
  if (message.author.id != 161854983602438145) return message.reply('Нет, ты не можешь меня выключать.');
    await message.channel.send('Пока :sleeping:');
    process.exit(0);

  }
  if(command === `помощь`){
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Привет, я - Эш, бесполезный бот созданный бездельником :ok_hand:",
    url: "http://vk.com/ghousemd",
    description: "Вот список того что я умею(регистр не важен):",
    fields: [{
        name: "Эш скажи <текст>",
        value: "Скажу за тебя все, что угодно. Не волнуйся, я тебя не выдам."
      },
      {
        name: "Эш смотри <текст>",
        value: "Посоветуй мне что смотреть(только не аниме, пожалуйста)."
      },
      {
        name: "Эш <вопрос>",
        value: "Напиши мне вопрос и я обязательно отвечу."
      },
      {
        name: "рандом <сообщение>",
        value: "Отправлю сообщение рандомному человеку."
      },
      {
        name: "ash play <название трека или ссылка на видео или плейлист YouTube>",
        value: "Проигрываю заказанную музыку. Необходимо быть в войсе"
      },
      {
        name: "Coming soon..",
        value: "xD"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© Amin"
    }
  }
});
  }
  if(command === "смотри") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    bot.user.setActivity(args.join(" "), { type: 'WATCHING' });
  }

  if(msg.indexOf("?") + 1){
    var r = randomInteger(1, 20);
    if(r === 1) { message.channel.send("Бесспорно"); }
    if(r === 2) { message.channel.send("Предрешено"); }
    if(r === 3) { message.channel.send("Мне кажется — «да»"); }
    if(r === 4) { message.channel.send("Вероятнее всего"); }
    if(r === 5) { message.channel.send("Пока не ясно, попробуй снова"); }
    if(r === 6) { message.channel.send("Спроси позже"); }
    if(r === 7) { message.channel.send("Даже не думай"); }
    if(r === 8) { message.channel.send("Мой ответ — «нет»"); }
    if(r === 9) { message.channel.send("Никаких сомнений"); }
    if(r === 10) { message.channel.send("Хорошие перспективы"); }
    if(r === 11) { message.channel.send("Определённо да"); }
    if(r === 12) { message.channel.send("Знаки говорят — «да»"); }
    if(r === 13) { message.channel.send("Можешь быть уверен в этом"); }
    if(r === 14) { message.channel.send("Да"); }
    if(r === 15) { message.channel.send("Весьма сомнительно"); }
    if(r === 16) { message.channel.send("Сейчас нельзя предсказать"); }
    if(r === 17) { message.channel.send("По моим данным — «нет»"); }
    if(r === 18) { message.channel.send("Спроси дамеоза"); }
    if(r === 19) { message.channel.send("Спроси дамеоза"); }
    if(r === 20) { message.channel.send("Спроси дамеоза"); }

  }


});
bot.on("message", async message => {
  if(message.author.bot) return;
  msg = message.content.toLowerCase();
  if(msg.indexOf(config.prefixd)!== 0) return;

  const args = message.content.slice(config.prefixd.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(command === "утро") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
     message.channel.send("Утречка <:love:391647492045013002>");
  }

});
bot.on("message", async message => {
  if(message.author.bot) return;
  msg = message.content.toLowerCase();

  if(msg.indexOf(config.prefixs) !== 0) return;
  const args = message.content.slice(config.prefixs.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(command === "ночи") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
     message.channel.send("Сладких снов <:love:391647492045013002>");
  }

});

bot.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.

  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  msg = message.content.toLowerCase();
  if(msg.indexOf("баб") === 0) { message.channel.send("<:bubabrain:351764290895872002>"); }
  if(msg.indexOf("тупой бот") === 0) { message.reply("ну че ты хочешь меня нахер послать? милости просим, я тогда тебя тоже нахер пошлю, ну и чо? обнимемся вместе пойдем, да?"); }
  if(msg.indexOf("глупый бот") === 0) { message.reply("ну че ты хочешь меня нахер послать? милости просим, я тогда тебя тоже нахер пошлю, ну и чо? обнимемся вместе пойдем, да?"); }
  if(msg.indexOf("тупой эш") === 0) { message.reply("ну че ты хочешь меня нахер послать? милости просим, я тогда тебя тоже нахер пошлю, ну и чо? обнимемся вместе пойдем, да?"); }
  if(msg.indexOf("глупый эш") === 0) { message.reply("ну че ты хочешь меня нахер послать? милости просим, я тогда тебя тоже нахер пошлю, ну и чо? обнимемся вместе пойдем, да?"); }

  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Let's go with a few common example commands! Feel free to delete or change those.


  if(command === "<:dmzsad:372531904735346689>") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
     message.channel.send("<:DmzSad:372531904735346689>");
  }
  if(command === "дамеоз") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
     message.channel.send("https://pp.userapi.com/c638321/v638321338/5b078/dzSjavYaNLs.jpg");
  }
  if(command === "бабы") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
     message.channel.send("<:bubabrain:351764290895872002>");
  }
  if(command === "рандом"){
//     let roleName = args.join(" ");

//     //Filtering the guild members only keeping those with the role
//     //Then mapping the filtered array to their usernames
//     let membersWithRole = message.guild.members.map(member => {return member.user.username;})



    return message.channel.send(message.guild.members.random().toString()+' '+args.join(" "));
}
  if(command === "count") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
var memberCount = bot.guilds.get(message.guild.id).memberCount;
message.channel.send(memberCount+" участников");
  }
  // guild.fetchMembers()
  // .then(console.log)
  // .catch(console.error);
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong.. Твой пинг ${m.createdTimestamp - message.createdTimestamp}ms. API пинг ${Math.round(bot.ping)}ms`);
  }


  if(command === "первый") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Первый?");
    m.edit(`Сорок седьмой!`);
  }


});



bot.login(config.token).catch(console.log);
