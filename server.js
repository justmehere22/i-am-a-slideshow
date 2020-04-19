var express = require('express');
var app = express();
var path = require('path');

/* view at http://localhost:2020 */
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

//app.use('/public', express.static(path.join(__dirname, 'public'))) // another way of doing this?

app.listen(2020);