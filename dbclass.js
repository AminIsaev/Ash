var fs = require('fs');
var dbFile = './.data/sqlite.db';
var exists = fs.existsSync(dbFile);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);
class dbclass{
  

 setPoints(idik, points){
    if(db.run('UPDATE users SET points = '+points+' WHERE uid = '+idik))return idik+" points = "+points;
 }
 count(table){
   let sql = `SELECT COUNT(*) as sqlCount FROM `+table;
   db.all(sql, [], (err, rows) => {
   rows[0].sqlCount;
   });
}
}
module.exports = dbclass;