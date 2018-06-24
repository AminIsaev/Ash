const Discord = require("discord.js");
const config = require("./config.json");
const Music = require('discord.js-musicbot-addon');
const http = require('http');
const express = require('express');
const app = express();
const smitetrash = require('./smite-api');
const smite = new smitetrash("2561", "51DD07223CC04D6683A2AC6F03A56A6A");
var fs = require('fs');
var dbFile = './sqlite.db';
var exists = fs.readFileSync(dbFile);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);
// db.run("ALTER TABLE `users` ADD `duel_time` INT(30) NOT NULL DEFAULT '0'");
// db.run("CREATE TABLE `codes` (`id` INTEGER(30) PRIMARY KEY,`code`	TEXT,`date` INTEGER(30) DEFAULT 0,`type` INTEGER DEFAULT 0)");
// db.run('UPDATE users SET duel_win = 0, duel_lose = 0');
// db.run('UPDATE users SET about = '+`"I don't even wanna go home, In a big house all alone, I don't even wanna go home, But I'ma try to call you on the phone"`+' WHERE uid = 296083629979729932');
// const dbClass = require("./dbclass.js");
// const dbclass = new dbClass();
// if(db.all("SELECT COUNT(*) FROM users", function(err, rows){return rows;}) == 1){
// 

// console.log(dbclass.setPoints("161854983602438145",666));
// console.log(dbclass.count('users'));
app.listen(8080);
setInterval(() => {
db.run('UPDATE users SET duel_time = 0 WHERE uid = 161854983602438145');
http.get(`http://ashbot.glitch.me/`);
}, 30000);
setInterval(() => {
http.get(`http://ash-twitch.glitch.me/`);
}, 30000);

setInterval(() => {
http.get(`http://yukina-twitch.glitch.me/`);
}, 30000);
setInterval(() => {
http.get(`http://rare-alpaca.glitch.me/`);
}, 30000);
setInterval(() => {
http.get(`http://calm-softball.glitch.me/`);
}, 30000);
setInterval(() => {
http.get(`http://amin-selfbot.glitch.me/`);
}, 30000);
var bot = new Discord.Client();
function sformat(s) {
      var fm = [
            Math.floor(s / 60 / 60 / 24), // DAYS
            Math.floor(s / 60 / 60) % 24, // HOURS
            Math.floor(s / 60) % 60, // MINUTES
            s % 60 // SECONDS
      ];
      return $.map(fm, function(v, i) { return ((v < 10) ? '0' : '') + v; }).join(':');
}
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }
  function declOfNum(number, titles) {  
    let cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}
bot.on("ready", async() => {
  console.log(`${bot.user.username} готов к работе`);
  console.log(bot.guilds.size);
  bot.user.setActivity("◔_◔", { type: 'STREAMING', url: 'https://twitch.tv/aminsugar' });
  
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
      if(nameh === "Aggro" || nameh === "PeccYz" || nameh === "Scottybot" || nameh === "HiRezTaco" || nameh === "HiRezAuvey" || nameh === "LeTigress" || nameh === "HiRezHinduman" || nameh === "HiRezFinch" || nameh === "HiRezVinny" || nameh === "Fdt" || nameh === "AminSugar"){
      var textbArray = textb.toLowerCase();
      textbArray = textbArray.split(" ");
      var bArr = textb.split(" ");

function find(arg){
  return textbArray.find(function(textbArray) {return textbArray == arg;});
}
function findIndex(arg){
  return textbArray.findIndex(function(textbArray) {return textbArray == arg;});
}
var ok = 0;
if((findIndex("is")-findIndex("code")) == 1  || findIndex("is") > -1 && findIndex("code") > -1 && textbArray[findIndex("is")-1] == "code"){
  var fcode = textbArray[findIndex("is")+1];
  var ocode = bArr[findIndex("is")+1];
  ok = 1;
}
if(findIndex("code:") > -1){
  var fcode = textbArray[findIndex("code:")+1];
  var ocode = bArr[findIndex("code:")+1];
  ok = 1;
}
  if((findIndex(":")-findIndex("code")) == 1 || findIndex(":") > -1 && findIndex("code") > -1 && textbArray[findIndex(":")-1] == "code"){
  var fcode = textbArray[findIndex(":")+1];
  var ocode = bArr[findIndex(":")+1];
  ok = 1;
}
if(findIndex("drop:") > -1){
  var fcode = textbArray[findIndex("drop:")+1];
  var ocode = bArr[findIndex("drop:")+1];
  ok = 1;
}
  if((findIndex(":")-findIndex("drop")) == 1 || findIndex(":") > -1 && findIndex("drop") > -1 && textbArray[findIndex(":")-1] == "drop"){
  var fcode = textbArray[findIndex(":")+1];
  var ocode = bArr[findIndex(":")+1];
  ok = 1;
}
var re = /^[a-zа-яё]+$/i;
var fileContent = fs.readFileSync(".codes", "utf8");
var nfc = fileContent.split(" ");
function find(arg){
  return nfc.find(function(nfc) {return nfc == arg;});
}
if(re.test(fcode) && ok == 1 && find(fcode) === undefined){
          console.log(fcode);
             bot.channels.get("446643781001805825").send("@everyone Новый код от "+nameh+"```"+ocode+"```Оригинальное сообщение ```"+textb+"```");
             bot.channels.get("435256147021398027").send("@everyone New code by "+nameh+"```"+ocode+"```Original message ```"+textb+"```");
             bot.channels.get("327391123188219907").send("@everyone Новый код от "+nameh+"```"+ocode+"```Оригинальное сообщение ```"+textb+"```");
             bot.channels.get("218919280098541568").send("@everyone Новый код от "+nameh+"```"+ocode+"```Оригинальное сообщение ```"+textb+"```");
             bot.channels.get("442297439215681537").send("@everyone Новый код от "+nameh+"```"+ocode+"```Оригинальное сообщение ```"+textb+"```");

             
           fs.writeFileSync(".codes", fileContent + " " + fcode);
          }
       }
      }
      
            i++;
    }
    
  });
});
}
setInterval(mixf, 7000);
bot.on('ready', () => {
	console.log('Ready!');
});

const events = {
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

bot.on('raw', async event => {
	if (!events.hasOwnProperty(event.t)) return;

	const { d: data } = event;
	const user = bot.users.get(data.user_id);
	const channel = bot.channels.get(data.channel_id) || await user.createDM();

	if (channel.messages.has(data.message_id)) return;

	const message = await channel.fetchMessage(data.message_id);
	const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
	let reaction = message.reactions.get(emojiKey);

	if (!reaction) {
		const emoji = new Discord.Emoji(bot.guilds.get(data.guild_id), data.emoji);
		reaction = new Discord.MessageReaction(message, emoji, 1, data.user_id === bot.user.id);
	}

	bot.emit(events[event.t], reaction, user);
});

bot.on('messageReactionAdd', (reaction, user) => {
  var split = reaction.message.content.split(" ");
  var uid = split[0].replace(/[^-0-9]/gi,'');
	console.log(`${user.username} reacted with "${reaction.message.id}".`);
});

bot.on('messageReactionRemove', (reaction, user) => {
	console.log(`${user.username} removed their "${reaction.emoji.name}" reaction.`);
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
  db.run('UPDATE users SET xp = xp + 1 WHERE uid = '+message.author.id);
  let sql = `SELECT *
           FROM users
           WHERE uid  = `+message.author.id;
 
db.get(sql, (err, row) => {
    if(row.xp % 100 == 0){
      message.channel.send({embed: {
    color: 3447003,
    author: {
      name: message.author.username,
      icon_url: message.author.avatarURL
    },
    title: "Новый уровень!",
    description: message.author.username+" получает уровень "+row.xp/100,
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© Amin"
    }
  }
});
    }
});
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
  
  if(command === "передай"){
    if(message.author.id == 285518553849921537){message.reply('<:GoldfinchsFace:437583259191345152> орбитр бля заебал поинты передавать пздц');}
    else {
    var arr = args.join(" ").split(" ");
    var uid = arr[0].replace(/[^-0-9]/gi,'');
    var howmany = arr[1];
    if(howmany > 0){
     let sql = `SELECT *
           FROM users
           WHERE uid  = `+message.author.id;
 
db.get(sql, (err, row) => {
    if(parseInt(row.points) < howmany){
       message.reply("не хватает поинтов. У тебя "+howmany); 
    }
    else
    {
         let sql1 = `SELECT *
           FROM users
           WHERE uid  = `+uid;
 
db.get(sql1, (err, row1) => {
    if(row1.uid != uid){
      message.reply("такой пользователь не найден.");  
    }
  else if(row1.uid == message.author.id) {
      message.reply("ты не можешь передать поинты себе, чсвшник <:fairyface:343085098792648704>");
  }
  else
  {     var points = parseInt(row1.points)+parseInt(howmany);
        db.run('UPDATE users SET points = '+(points)+' WHERE uid = '+uid);
        db.run('UPDATE users SET points = '+(parseInt(row.points)-howmany)+' WHERE uid = '+message.author.id);
        message.channel.send("<@"+message.author.id+"> передал "+"<@"+uid+"> "+howmany+" "+declOfNum(howmany, ['поинт.', 'поинта.', 'поинтов.']));
  }
});
    }
});
    }
    else message.reply("числов передаваемых поинтов должно быть больше 0.");}
  }

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
  function getRank (id) {
  var ranks = {
    '1': 'Bronze V',
    '2': 'Bronze VI',
    '3': 'Bronze III',
    '4': 'Bronze II',
    '5': 'Bronze I',
    '6': 'Silver V',
    '7': 'Silver VI',
    '8': 'Silver III',
    '9': 'Silver II',
    '10': 'Gold I',
    '11': 'Gold V',
    '12': 'Gold VI',
    '13': 'Gold III',
    '14': 'Gold II',
    '15': 'Gold I',
    '16': 'Platinum V',
    '17': 'Platinum  VI',
    '18': 'Platinum  III',
    '19': 'Platinum  II',
    '20': 'Platinum  I',
    '21': 'Diamond V',
    '22': 'Diamond VI',
    '23': 'Diamond III',
    '24': 'Diamond II',
    '25': 'Diamond I',
    '26': 'Masters',
    '27': 'Grandmasters',
    '0': 'Qualifier'
  };
  return ranks[id];
}
  if(command === "player"){
    console.log(args.join(" "));
    smite.connect('PC', (err, res) =>
    {
    // Connection worked.
    if(!err)
        {
        var sessionId = res;
        smite.getPlayer(sessionId, 'PC', encodeURIComponent(args.join(" ")), (err, res) => {
          // var avatar = JSON.stringify(res[0].Avatar_URL);
          // var trueava = avatar.replace(/"/g).split("/web/");
          var data = res[0];
          if(data){
            if(!data.Personal_Status_Message)var status = 'empty'; else var status = '~'+data.Personal_Status_Message;
            let sEmbed = new Discord.RichEmbed()
            .setTitle(data.Name)
            .setColor("#8AFFB4")
            .setThumbnail("https://pbs.twimg.com/media/CEZuVOcUgAA1jux.png")
            .addField(`Personal status:`, status,true)
            .addField(`W/L:`, data.Wins+'/'+data.Losses,true)
            .addField(`Ranked Conquest Tier:`, getRank(data.RankedConquest.Tier)+' - '+data.RankedConquest.Points+' TP',true)
            .addField(`W/L:`, data.RankedConquest.Wins+'/'+data.RankedConquest.Losses,true)
            .addField(`Ranked Joust Tier:`, getRank(data.RankedJoust.Tier)+' - '+data.RankedJoust.Points+' TP',true)
            .addField(`W/L:`, data.RankedJoust.Wins+'/'+data.RankedJoust.Losses,true)
            .addField(`Ranked Duel Tier:`, getRank(data.RankedDuel.Tier)+' - '+data.RankedDuel.Points+' TP',true)
            .addField(`W/L:`, data.RankedDuel.Wins+'/'+data.RankedDuel.Losses,true)
            .setFooter('Level: '+data.Level+' MasteryLevel: '+data.MasteryLevel);
            
          message.channel.send(sEmbed);
        }
                        else { message.reply('Ошибка! Возможно профиль игрока '+args.join(" ")+' скрыт.'); }
        });
          
        }
      
    });

  } 
  function toHHMMSS() {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}
  if(command === "assaults"){
    console.log(args.join(" "));
    smite.connect('PC', (err, res) =>
    {
    // Connection worked.
    if(!err)
        {
        var sessionId = res;
         smite.getQueueStats(sessionId, 'PC', encodeURIComponent(args.join(" ")), '445', (err, res) => {

          var assaults = 0;
          var wins = 0;
          var losses = 0;
          var minutes = 0;
          for (var i in res){
             assaults += parseInt(res[i].Matches);
             losses += parseInt(res[i].Losses);
             wins += parseInt(res[i].Wins);
             minutes += parseInt(res[i].Minutes);
          }

          var data = res[0];
          if(data){
            let sEmbed = new Discord.RichEmbed()
            .setTitle(args.join(" "))
            .setColor("#8AFFB4")
            .setThumbnail("https://goo.gl/1yCYNT")
            .addField('Assaults played:',assaults,true)
            .addField(`Time played:`, minutes+' minutes',true)
            .addField(`W/L:`, wins+'/'+losses,true)
            .addField(`Win rate:`, ((wins/(wins+losses))*100).toFixed(1)+'%',true);
          message.channel.send(sEmbed);
        }
                        else { message.reply('Ошибка! Возможно профиль игрока '+args.join(" ")+' скрыт.'); }
        });
          
        }
      
    });

  } 
if(command === "arena"){
    console.log(args.join(" "));
    smite.connect('PC', (err, res) =>
    {
    // Connection worked.
    if(!err)
        {
        var sessionId = res;
         smite.getQueueStats(sessionId, 'PC', encodeURIComponent(args.join(" ")), '435', (err, res) => {

          var assaults = 0;
          var wins = 0;
          var losses = 0;
          var minutes = 0;
          for (var i in res){
             assaults += parseInt(res[i].Matches);
             losses += parseInt(res[i].Losses);
             wins += parseInt(res[i].Wins);
             minutes += parseInt(res[i].Minutes);
          }

          var data = res[0];
          if(data){
            let sEmbed = new Discord.RichEmbed()
            .setTitle(args.join(" "))
            .setColor("#8AFFB4")
            .setThumbnail("https://goo.gl/yUEDnS")
            .addField('Arena games:',assaults,true)
            .addField(`W/L:`, wins+'/'+losses,true)
            .addField(`Time played:`, minutes+' minutes');
          message.channel.send(sEmbed);
        }
                        else { message.reply('Ошибка! Возможно профиль игрока '+args.join(" ")+' скрыт.'); }
        });
          
        }
      
    });

  } 
//////////// Команды для кастомок
  if(command === "скажи") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
    
  }
  
 if(command === "инфо") {
    db.run("UPDATE users SET about = '"+args.join(" ")+"' WHERE uid = "+message.author.id);
    message.reply("информация о тебе успешно отредактирована.");
  }
  if(command === "тест") {
    message.channel.send("<@"+message.author.id+"> кинул тебе вызов! Принять?").then(function (message) {
      setInterval(() => {message.react("👍");}, 5000);
              
message.react("👎");

              
            }).catch(function() {
              //Something
             });
  }
  if(command === "профиль") {
     let sql = `SELECT *
           FROM users
           WHERE uid  = `+message.author.id;
 
db.get(sql, (err, row) => {
  if(row.duel_win > 0 || row.duel_lose > 0){var perc = (row.duel_win/(row.duel_win+row.duel_lose)).toFixed(1);}
  else { var perc = 0; }
  if(row.xp%100 < 10)var le = ''+row.xp%100;else var le = row.xp%100;
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: message.author.username    },
    title: "LVL "+Math.floor(row.xp/100),
    description: row.xp+"/"+(Math.floor(row.xp/100)+1)+'00 XP',
    thumbnail: {
         url: message.author.avatarURL
      },
    fields: [{
        name: "Поинты",
        value: row.points
    }
             ,
       {
         name: "W/L в дуэли",
         value: row.duel_win+'/'+row.duel_lose+' - '+perc*100+'%'
       }
      ,
       {
         name: "Обо мне",
         value: row.about
       }
             
             ]
  }
});
});

  }
  if(command === "хентай"){
    if(message.channel.nsfw == true){
    var hurl = "https://nekos.life/api/v2/img/Random_hentai_gif";
    https.get(hurl, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    message.channel.send({ files: [body.url] });
  });
    });}
    else message.channel.send("Могу постить хентай только на nsfw-каналах.");
  }
  if(command === "лут"){
 var r = randomInteger(1,100);
 if(r == 50){
    message.channel.send();   
 }
 let sql = `SELECT *
           FROM users
           WHERE uid  = `+message.author.id;
 
// first row only
db.get(sql, (err, row) => {
  if (err) {
    return console.error(err.message);
  }
  var drop = parseInt(row.last_drop);
  var points = parseInt(row.points);
  if(drop < Date.now()){
    let loot = randomInteger(1,20);
    var sk = declOfNum(loot, ['поинт', 'поинта', 'поинтов']);
    db.run('UPDATE users SET points = '+(loot+points)+', last_drop = '+(Date.now()+3600000)+' WHERE uid = '+message.author.id);
    let sql = `SELECT *
           FROM users
           WHERE uid  = `+message.author.id;
 
db.get(sql, (err, row) => {
    message.channel.send({embed: {
    color: 353535,
    title: ':small_orange_diamond: '+message.author.username,
    description: ':small_blue_diamond: Вы получаете '+loot+' '+sk+'.',
    thumbnail: {
         url: "https://cdn.glitch.com/780dc73b-ac71-4b90-b065-99793d92503e%2Fcoins-64.png?1525885472418"
      },
      footer: {
      text: 'Баланс: '+row.points
    }}});
});                         
  }
  else {
    let minutes = Math.floor((drop-Date.now())/1000/60);
    let seconds = Math.floor((drop-Date.now())/1000 - minutes * 60);
    message.channel.send('Эта команда доступна один раз в час, попробуйте через '+minutes+' '+declOfNum(minutes, ['минуту', 'минуты', 'минут'])+' и '+seconds+' '+declOfNum(minutes, ['секунду.', 'секунд.', 'секунд.']));
  }
});
    
  }
  if(command === "поинты") {

  let sql = `SELECT *
           FROM users
           WHERE uid  = `+message.author.id;

 
// first row only
db.get(sql, (err, row) => {
  if (err) {
    return console.error(err.message);
  }
        var sk = declOfNum(row.points, ['поинт', 'поинта', 'поинтов']);

    message.channel.send(row.points+' '+sk+'.');
  
});
  }
  if(command === "инвайт") {
    try {
    let link = await bot.generateInvite(["ADMINISTRATOR"]);
    message.channel.send("<"+link+">");
  } catch(e) {
    console.log(e.stack);
  }
  }
  if(command === "пикча") {
    let rp = Math.floor(Math.random() * (1001 - 1)) + 1;
    if(rp <= 600) { var lp = "https://chop-grif.000webhostapp.com/p/pic%20("+rp+").jpg"; } else { var lp = "https://aminisaev.000webhostapp.com/p/pic%20("+rp+").jpg";  }
    message.channel.send({ files: [lp] });
  }
    if(command === "спать") {
  if (message.author.id != 161854983602438145) return message.reply('Нет, ты не можешь меня выключать.');
    await message.channel.send('Пока :sleeping:');
    process.exit(0);

  }
//   if(command === "привет") {
// var hir = Math.floor(Math.random()*(6-1+1)+1);
// var hi;
//     if(hir === 1)hi = "<:ashHi1:436075474444222466>";
//     if(hir === 2)hi = "<:ashHi2:436077745852907530>";
//     if(hir === 3)hi = "<:ashHi3:436077746788237314>";
//     if(hir === 4)hi = "<:ashHi4:436077748004454410>";
//     if(hir === 5)hi = "<:ashHi5:436078466606039040>";
//     if(hir === 6)hi = "<:ashHi6:436078891459936256>";
    
//  message.channel.send(hi);

//   }
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
    if(r === 18) { message.channel.send("Спроси Амина"); }
    if(r === 19) { message.channel.send("Спроси Дамеоза"); }
    if(r === 20) { message.channel.send("Спроси Наиру"); }

  }


});
bot.on("message", async message => {
  if(message.author.bot) return;
  msg = message.content.toLowerCase();
  if(msg.indexOf(config.prefixd)!== 0) return;

  const args = message.content.slice(config.prefixd.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    db.run('UPDATE users SET xp = xp + 1 WHERE uid = '+message.author.id);
    let sql = `SELECT *
           FROM users
           WHERE uid  = `+message.author.id;
 
db.get(sql, (err, row) => {
    if(row.xp % 100 == 0){
      message.channel.send({embed: {
    color: 3447003,
    author: {
      name: message.author.username,
      icon_url: message.author.avatarURL
    },
    title: "Новый уровень!",
    description: message.author.username+" получает уровень "+row.xp/100,
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© Amin"
    }
  }
});
    }
});

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
    db.run('UPDATE users SET xp = xp + 1 WHERE uid = '+message.author.id);
      let sql = `SELECT *
           FROM users
           WHERE uid  = `+message.author.id;
 
db.get(sql, (err, row) => {
    if(row.xp % 100 == 0){
      message.channel.send({embed: {
    color: 3447003,
    author: {
      name: message.author.username,
      icon_url: message.author.avatarURL
    },
    title: "Новый уровень!",
    description: message.author.username+" получает уровень "+row.xp/100,
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© Amin"
    }
  }
});
    }
});
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
  
  var msg = message.content.toLowerCase();
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
  if(command === "<:no_u:446714479049179154>" && message.author.id == "187265418358947841") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
     message.channel.send("<:no_u:446714479049179154>");
  }
  if(command === "дамеоз") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
     message.channel.send({ files: ['https://pp.userapi.com/c638321/v638321338/5b078/dzSjavYaNLs.jpg'] });
  }
  if(command === "нокак"){
    message.delete().catch(O_o=>{});
    // message.channel.send({ files: ['https://media.discordapp.net/attachments/327391123188219907/443413572727603200/zzzzz.PNG'] });
    message.channel.send("НО КАК <:nokak:443505624358191154>");
  }
  if(command === "POGGERS"){
    message.delete().catch(O_o=>{});
    // message.channel.send({ files: ['https://media.discordapp.net/attachments/327391123188219907/443413572727603200/zzzzz.PNG'] });
    message.channel.send("<:nokak:443505624358191154>");
  }
  if(command === "cuute"){
    message.delete().catch(O_o=>{});
   message.channel.send({ files: ["https://vk.com/images/stickers/56/128.png"] }); 
  }
  if(command === "добавить1" && message.author.id == 161854983602438145){
       message.guild.members.map(member => {db.run('INSERT INTO users (uid, points, last_drop) SELECT '+member.user.id+' ,0,0 WHERE NOT EXISTS(SELECT 1 FROM users WHERE uid = '+member.user.id+')')});  
  }
 
  
  if(command === "бабы") {
 
     message.channel.send("бабы DansGame");
  }
  if(command === "рандом" || command === "random"){
    var r = randomInteger(1,5);
    if(message.author.id === "161854983602438145" && r == 5){
 message.channel.send(message.guild.members.get("296083629979729932").toString()+' '+args.join(" "));
 
}
    else if(message.author.id === "2960836299797299324" && r == 5){
 message.channel.send(message.guild.members.get("161854983602438145").toString()+' '+args.join(" "));
 
}
else {
    message.channel.send(message.guild.members.random().toString()+' '+args.join(" "));
}
}
if(command === "рыжик"){
  var arr = args.join(" ").split(" ");
  var uid = arr[0].replace(/[^-0-9]/gi,'');
  var ava = bot.users.get(uid).displayAvatarURL;
  message.channel.send(ava);
}
if(command === "привет" || command === "приветик" || command === "хай" || command === "hi" ||  command === "hello" || command === "ку" || command === "q"){
  var fileContent = fs.readFileSync("cute.txt", "utf8");
  var nfc = fileContent.split(" "); 
  message.channel.send("Приветик, "+nfc[Math.floor(Math.random() * nfc.length)]+' <:bubacute:369545781918695424>');
}
  if(command === "count") {
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
  if(msg.indexOf("{cute}") + 1) {
  
  var fileContent = fs.readFileSync("cute.txt", "utf8");
  var nfc = fileContent.split(" "); 
  var content = message.content.replace("{cute}",nfc[Math.floor(Math.random() * nfc.length)]);
  message.delete().catch(O_o=>{});
  message.channel.send(content);
    
}
if(command === "дуэль"){

    var arr = args.join(" ").split(" ");
    var uid = arr[0].replace(/[^-0-9]/gi,'');
  if(uid == message.author.id) {
      message.reply("ты не можешь кинуть дуэль самому себе -_-"); return;
  }
    // var howmany = arr[1];
     let sql = `SELECT *
           FROM users
           WHERE uid  = `+message.author.id;
db.get(sql, (err, row) => {
    let minutes = Math.floor((row.duel_time-Date.now())/1000/60);
    let seconds = Math.floor((row.duel_time-Date.now())/1000 - minutes * 60);
    if(row.duel_time > Date.now()){message.reply('На дуэль можно вызывать раз в 10 минут. Попробуйте через '+minutes+' '+declOfNum(minutes, ['минуту', 'минуты', 'минут'])+' и '+seconds+' '+declOfNum(minutes, ['секунду.', 'секунд.', 'секунд.'])); return;}
    if(parseInt(row.points) < 100){
       message.reply("недостаточно поинтов! Ставка в дуэли 100, а у тебя "+row.points); 
    }
    else if(row.duel_id != 0){
       message.reply("ты пока не можешь вызывать на дуэль! Дступна одна дуэль за раз."); 
    }
    else
    {
         let sql1 = `SELECT *
           FROM users
           WHERE uid  = `+uid;
 
db.get(sql1, (err, row1) => {
   let minutes = Math.floor((row1.duel_time-Date.now())/1000/60);
    let seconds = Math.floor((row1.duel_time-Date.now())/1000 - minutes * 60);
    
    if(row1.uid != uid){
      message.reply("такой пользователь не найден.");  
    }
  else if(row1.duel_time > Date.now()){message.reply("Пользователь <@"+uid+'> сейчас не может принять дуэль. Попробуйте через '+minutes+' '+declOfNum(minutes, ['минуту', 'минуты', 'минут'])+' и '+seconds+' '+declOfNum(minutes, ['секунду.', 'секунд.', 'секунд.'])); return;}
    
    if(parseInt(row1.points) < 100){
       message.reply("у <@"+uid+"> недостаточно поинтов! Ставка в дуэли 100."); 
    }
  else if(row1.duel_id != 0){
       message.reply("<@"+uid+"> пока не может принять дуэль! Дступна одна дуэль за раз."); 
    }
   
  
  else
  {     var duel_time = (600000+Date.now());
        db.run('UPDATE users SET duel_id = '+(message.author.id)+' WHERE uid = '+uid);
        db.run('UPDATE users SET duel_time = '+(duel_time)+' WHERE uid = '+uid);
        db.run('UPDATE users SET duel_id = '+(uid)+' WHERE uid = '+message.author.id);
        db.run('UPDATE users SET duel_time = '+(duel_time)+' WHERE uid = '+message.author.id);
        message.channel.send("<@"+message.author.id+"> вызвал "+"<@"+uid+"> на дуэль! Принять?").then(function (message) {
              message.react("👎")
              message.react("👍")
            }).catch(function() {
              //Something
             });
  }
});
    }
});
  }

});
bot.on('messageReactionAdd', (reaction, user) => {
  var split = reaction.message.content.split(" ");
  var uid = split[0].replace(/[^-0-9]/gi,'');
  var uid2 = split[2].replace(/[^-0-9]/gi,'');
let sql = `SELECT *
           FROM users
           WHERE uid  = `+user.id;
 
db.get(sql, (err, row) => {
let sql1 = `SELECT *
           FROM users
           WHERE uid  = `+uid;
 
db.get(sql1, (err, row1) => {
  if(reaction.emoji.name == "👍" && row.duel_id != 0){
	if(row.duel_id == row1.uid && row1.duel_id == row.uid){
		if(randomInteger(1,2) == 1) {
			var pointsrow = parseInt(row.points)+100;
			var pointsrow1 = parseInt(row1.points)-100;
      db.run('UPDATE users SET duel_id = 0, points = '+pointsrow+', duel_win = duel_win + 1 WHERE uid = '+user.id);
			db.run('UPDATE users SET duel_id = 0, points = '+pointsrow1+' , duel_lose = duel_lose + 1 WHERE uid = '+uid);
      reaction.message.channel.send("Пользователь <@"+user.id+"> выиграл "+"<@"+uid+"> в дуэли! Поздравляем! Баланс <@"+user.id+"> : "+pointsrow);			
		}
		else {
			var pointsrow = parseInt(row.points)-100;
			var pointsrow1 = parseInt(row1.points)+100;
			db.run('UPDATE users SET duel_id = 0, points = '+pointsrow+' , duel_lose = duel_lose + 1 WHERE uid = '+user.id);
			db.run('UPDATE users SET duel_id = 0, points = '+pointsrow1+', duel_win = duel_win + 1 WHERE uid = '+uid);
      reaction.message.channel.send("Пользователь <@"+uid+"> выиграл "+"<@"+user.id+"> в дуэли! Поздравляем! Баланс <@"+uid+"> : "+pointsrow1);	
			
		}
	}
  }
  else if(reaction.emoji.name == "👎" && row.duel_id != 0){
      
  if(row.duel_id == row1.uid && row1.duel_id == row.uid){
    reaction.message.channel.send("Пользователь <@"+user.id+"> отказался от дуэли с <@"+uid+">.");	
    db.run('UPDATE users SET duel_id = 0, duel_time = 0 WHERE uid = '+user.id);
    db.run('UPDATE users SET duel_id = 0, duel_time = 0  WHERE uid = '+uid);
  }
  else if(user.id == uid && row.duel_id != 0){
    reaction.message.channel.send("Пользователь <@"+uid+"> решил отменить дуэль с <@"+uid2+">.");	
    db.run('UPDATE users SET duel_id = 0, duel_time = 0  WHERE uid = '+user.id);
    db.run('UPDATE users SET duel_id = 0, duel_time = 0  WHERE uid = '+uid2);
  }
	
  }
});

});
	console.log(`${user.username} reacted with "${reaction.emoji.name}".`);
});


bot.login(config.token).catch(console.log);
