const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/Front-Test'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/Front-Test/index.html'));
});

app.listen(process.env.PORT || 8080);