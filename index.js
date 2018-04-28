const Discord = require("discord.js");
const config = require("./config.json");
const Music = require('discord.js-musicbot-addon');
const http = require('http');
const express = require('express');
const app = express();
var fs1 = require('fs');
const lctime = fs1.readFileSync(".time", "utf8");
var dd = Math.round(30-(Date.now()-lctime)/60000);
function zc(){
  fs1.writeFileSync(".time", Date.now()); }




app.listen(8080);
setInterval(() => {
http.get(`http://ashbot.glitch.me/`);
}, 30000);
setInterval(() => {
http.get(`http://ash-twitch.glitch.me/`);
}, 30000);
var bot = new Discord.Client();
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }
bot.on("ready", async() => {
  console.log(`${bot.user.username} готов к работе`);
  console.log(bot.guilds.size);
  
});
const music = new Music(bot, {
  youtubeKey: 'AIzaSyDmIvnkWSrqJ0XAxu7hxSNilk8di1jNz48'
});

const https = require("https");
var fs = require('fs');
const url =
  "https://mixer.com/api/v1/chats/19088261/history";
function mixf() {
https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    var i = 0;
    var msg;
    for(msg in body){
      var textb = body[i].message.message[0].text;
      var nameh = body[i].user_name;
      
      if(nameh === "Aggro" || nameh === "PeccYz" || nameh === "Scottybot" || nameh === "HiRezTaco" || nameh === "HiRezAuvey" || nameh === "LeTigress" || nameh === "HiRezHinduman" || nameh === "HiRezFinch" || nameh === "HiRezVinny" || nameh === "Fdt" || nameh === "AminSugar"){
       if(nameh === "Scottybot" || nameh === "AminSugar"){
      var textbArray = textb.toLowerCase();
      if(textbArray.indexOf("code") + 1 && textbArray.indexOf(":") + 1) {
         var fileContent = fs.readFileSync(".codes", "utf8");
var s1 = textbArray.split(":")[1].split(" ")[0];
        if(s1) { var fcode = s1; } else { var fcode = textbArray.split(":")[1].split(" ")[1]; }

        if(fileContent.indexOf(fcode) < 0){
             zc();
             bot.channels.get("350521817078693889").send("@everyone Новый код от "+nameh+" (действует 30 минут)```"+fcode+"```Чтобы узнать сколько еще работает код - введите ``эш код``");
             bot.channels.get("327391123188219907").send("@everyone Новый код от "+nameh+" (действует 30 минут)```"+fcode+"```");
             bot.channels.get("218919280098541568").send("@everyone Новый код от "+nameh+" (действует 30 минут)```"+fcode+"```");
             
           fs.writeFileSync(".codes", fileContent + " " + fcode);
          }
         }
       }
        if(textb.length >= 17 && textb.indexOf("AP") + 1) { 
              var fileContent = fs.readFileSync(".codes", "utf8");
              var wheresCode = textb.lastIndexOf("AP");              
              var stringTwo = textb.slice(wheresCode, wheresCode+17);
              if(fileContent.indexOf(stringTwo) < 0){
                zc();
bot.channels.get("350521817078693889").send("@everyone Новый код от "+nameh+"```"+stringTwo+"```");
bot.channels.get("327391123188219907").send("@everyone Новый код от "+nameh+"```"+stringTwo+"```");
 bot.channels.get("218919280098541568").send("@everyone Новый код от "+nameh+"```"+stringTwo+"```");

  fs.writeFileSync(".codes", fileContent + " " + stringTwo);
              }        
                                                              
                                                              
                                                              
            }
      }
      
            i++;
    }
    
  });
});
}
setInterval(mixf, 3000);
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

  if(command === "код"){
     var fileC= fs.readFileSync(".codes", "utf8");
     var wheresCode = fileC.split(" ");
     var stringTwo = wheresCode[wheresCode.length - 1];
    
    //if(dd < 0){ var srok = "(недействителен, истек срок)"; } else { var srok = "(действителен, осталось примерно "+dd+" min.)"; }
     message.channel.send("Последний код ```"+stringTwo+"```");
  }
  function shuffle(array) {
    
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
  
/////////////// Команды для кастомок

  if(command === "команда"){
     var cArray = args.join(" ").split(" ");
    if(cArray.length === 10){
     cArray = shuffle(cArray);
     message.channel.send("Команда для 5х5 #1: ```"+cArray[0]+","+cArray[1]+","+cArray[2]+","+cArray[3]+","+cArray[4]+"```Команда для 5х5 #2: ```"+cArray[5]+","+cArray[6]+","+cArray[7]+","+cArray[8]+","+cArray[9]+"```");
    }
    else if(cArray.length === 8) {
      cArray = shuffle(cArray);
     message.channel.send("Команда для 4х4 #1: ```"+cArray[0]+","+cArray[1]+","+cArray[2]+","+cArray[3]+"```Команда для 4х4 #2: ```"+cArray[4]+","+cArray[5]+","+cArray[6]+","+cArray[7]+"```");
    }
    else if(cArray.length === 6) {
      cArray = shuffle(cArray);
     message.channel.send("Команда для 3х3 #1: ```"+cArray[0]+","+cArray[1]+","+cArray[2]+"```Команда для 3х3 #2: ```"+cArray[3]+","+cArray[4]+","+cArray[5]+"```");
    }
    else
    {
      message.reply("неправильное число участников. Разрешенные значения: 10, 8, 6.");
    }
  }
  
//////////// Команды для кастомок
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
 
  if(command === "инвайт") {
    try {
    let link = await bot.generateInvite(["SEND_MESSAGES", "MENTION_EVERYONE"]);
    message.channel.send("<"+link+">");
  } catch(e) {
    console.log(e.stack);
  }
  }
  if(command === "пикча") {
    let rp = Math.floor(Math.random() * (1001 - 1)) + 1;
    if(rp <= 600) { var lp = "https://chop-grif.000webhostapp.com/p/pic%20("+rp+").jpg"; } else { var lp = "https://aminisaev.000webhostapp.com/p/pic%20("+rp+").jpg";  }
    message.channel.send(lp);
  }
    if(command === "спать") {
  if (message.author.id != 161854983602438145) return message.reply('Нет, ты не можешь меня выключать.');
    await message.channel.send('Пока :sleeping:');
    process.exit(0);

  }
  if(command === "привет") {
var hir = Math.floor(Math.random()*(6-1+1)+1);
var hi;
    if(hir === 1)hi = "<:ashHi1:436075474444222466>";
    if(hir === 2)hi = "<:ashHi2:436077745852907530>";
    if(hir === 3)hi = "<:ashHi3:436077746788237314>";
    if(hir === 4)hi = "<:ashHi4:436077748004454410>";
    if(hir === 5)hi = "<:ashHi5:436078466606039040>";
    if(hir === 6)hi = "<:ashHi6:436078891459936256>";
    
 message.channel.send(hi);

  }
  if(command === "число") {
var list = bot.guilds.array().sort();
    console.log(list);

  }
  
  
  if(command === `помощь`){
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Привет, я - Эш, не бесполезный((с)Fairy) бот созданный бездельником :ok_hand:",
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
  if(command === "смотри" || command === "слушай" || command === "играй") {
    if(command === "смотри") var d = "WATCHING";
    if(command === "слушай") var d = "LISTENING";
    if(command === "играй") var d = "PLAYING";
    bot.user.setActivity(args.join(" "), { type: d });
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
  if(msg.indexOf("баб") + 1) { message.channel.send("<:bubabrain:351764290895872002>"); }
  if((msg.indexOf("тупой") + 1 || msg.indexOf("глупый") + 1) && (msg.indexOf("бот") + 1 || msg.indexOf("эш") + 1)){ message.reply("ну че ты хочешь меня нахер послать? милости просим, я тогда тебя тоже нахер пошлю, ну и чо? обнимемся вместе пойдем, да?"); }

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
  if(msg.indexOf(":joy:") + 1){
    message.channel.send(":joy:");
  }
  if(command === "дамеоз") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
     message.channel.send("https://pp.userapi.com/c638321/v638321338/5b078/dzSjavYaNLs.jpg");
  }
  if(command === "тестик") {
    var tl = message.guild.members.map(member => {return member.user.username+member.user.id;});
console.log(tl);
  }
  
  if(command === "бабы") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
     message.channel.send("<:bubabrain:351764290895872002>");
  }
  if(command === "рандом" || command === "random"){

    message.channel.send(message.guild.members.random().toString()+' '+args.join(" "));
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


  if(msg.indexOf("первый") + 1) {
 
    const m = await message.channel.send("Первый?");
    m.edit(`Сорок седьмой!`);
  }


});



bot.login(config.token).catch(console.log);
