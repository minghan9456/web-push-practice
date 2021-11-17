global.__base = __dirname;

const express = require('express');
const app = express();

app.get('/',function(req,res) {
  res.sendFile(`${global.__base}/static/html/test.html`);
});
app.get('/sw.js',function(req,res) {
  res.sendFile(`${global.__base}/static/js/sw.js`);
});

app.listen(3000, function() {
  console.log('listening on *:' + 3000);
});

module.exports = app;
