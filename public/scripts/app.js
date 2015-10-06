
var apiUrl_2 = 'http://localhost:5300/';

var $urlTrend = apiUrl_2 + 'api/linechart';
var trend = $.ajax({type: "GET", url: $urlTrend, async: false}).responseText;

var $trendchart = JSON.parse(trend);
var $result = [],$cat = [],$datas = [];
var priceTrend = $trendchart[0].data;
var arrTrend = [];
var dates = $trendchart[0].date;
if(priceTrend.length > 0){
	for(var i =0; i < priceTrend.length; i++){
		// 
		// var spliter = dates.split("-");
		// var month = spliter[1];
		// var day = spliter[2];
		// arrTrend.push([month+"-"+day]);
		// $datas.push(parseFloat(priceTrend[i].price));

	}
	// console.log("dates : ",dates);
}


$result = [{data: $datas}];
jQuery('#linechart').highcharts({
	chart: {
		defaultSeriesType: 'line',
		backgroundColor:'rgba(255, 255, 255, 0.1)'
	},
	tooltip: {
		formatter: function() {
			return '<b>' + this.x + '</b><br/>' +
			' Total ' + Highcharts.numberFormat(this.y, 0);
		}
	},
	title: {
		text: 'Trend Harga',
		style: {
			fontFamily: 'sans-serif',
			color: "#000"
		}
	},
	exporting: {enabled: false},
	credits: {enabled: false},
	legend: {enabled: false},
	xAxis: {
		categories: dates
	},
	yAxis: {
		min: 1,
		title: {
			text: '',
		},
		labels: {
			overflow: 'justify',
			style: {
				color: '#000',
				font: '11px Trebuchet MS, Verdana, sans-serif'
			}
		}
	},
	series: $result
});

/**/