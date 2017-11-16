var express = require('express');
var open = require('open');
var compression = require('compression');

/*eslint-disable no-console */

console.log("start server");

var port = 12000;
var app = express();

app.use(compression());
app.use(express.static('./public'));

app.get('*', function(req, res) {
  res.sendFile('./public/index.html', { root: __dirname });
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
