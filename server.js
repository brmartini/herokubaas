var express = require('express');
var app = express();

var port = process.env.PORT || 8000;

app.get ('/', function(req,res){

    res.send('Hello Wolrd!');
})

app.listen(port, function(){
    console.log('Our app is running on;' + port );
})