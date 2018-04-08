const http = require('http');
const express = require('express');
const app = express();

app.listen(8080);
setInterval(() => {
http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 300000);
