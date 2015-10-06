var express = require('express')
	,http = require('http');
	
var app = express();

app.set('port',process.env.port || 5300);
app.set('views',__dirname + '/public/templates');
app.engine('html',require('ejs').renderFile);
app.set('view engine','html');

app.use('/css', express.static(__dirname + '/public/styles'));
app.use('/scripts', express.static(__dirname + '/public/scripts'));

app.get('/',function(request,response){
	// response.send('halo dunia aja');
	response.render('index');
	
});

/**/

app.get('/api/piechart',function(req,res){
	var $data = [{
		id : 1,
		name : "C++",
		total : 30,
		percentage : 20.1
	},{
		id : 2,
		name : "Node JS",
		total : 60,
		percentage : 40.1
	}];

	var $datas = JSON.stringify($data);
	res.writeHead(200,{"Content-type" : "application/json"});
	res.end($datas);
});

app.get('/api/linechart',function(req,res){
	$catLinechart = ["2014-05-06","2014-05-07","2014-05-08","2014-05-09","2014-05-10"];
	$dataLineChart = [{
		name : "C++",
		data : [10.20,5.20,40.2,80,10]
	},
	{
		name : "Node JS",
		data : [15,3,40.2,80,90]
	},{
		name : "PHP",
		data : [15,3,40.2,90,120]
	}];

	var mydatas = JSON.stringify([{date:$catLinechart,data : $dataLineChart}]);
	res.writeHead(200,{"Content-type" : "application/json"});
	res.end(mydatas);
});

app.get('/api/barchart',function(req,res){
	var $catBar = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
	var $dataBar = [{
		name: 'Year 1800',
		data: [107, 31, 635, 203, 2]
	}, {
		name: 'Year 1900',
		data: [133, 156, 947, 408, 6]
	}, {
		name: 'Year 2012',
		data: [1052, 954, 4250, 740, 38]
	}];

	var mydatas = JSON.stringify([{date:$catBar,data : $dataBar}]);
	res.writeHead(200,{"Content-type" : "application/json"});
	res.end(mydatas);
});



http.createServer(app).listen(app.get('port'),function(){
	console.log("server berjalan di port : ",app.get('port'));
});





