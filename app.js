const express = require('express'),
      app     = express(),
      port    = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => res.render('index'));

app.listen(port, process.env.IP);
console.log('Server started');