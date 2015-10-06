var express = require('express')
	,http = require('http');
	
var app = express();

app.set('port',process.env.port || 5300);
app.set('views',__dirname + 'public/templates');
app.engine('html',require('ejs').renderFile);
app.set('view engine','html');

app.get('/',function(request,response){
	response.send('halo dunia aja');
});

http.createServer(app).listen(app.get('port'),function(){
	console.log("server berjalan di port : ",app.get('port'));
});





