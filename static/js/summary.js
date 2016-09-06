$(document).ready(function () {
	// body...
	

	$('#abc').highcharts({
				chart:{
					type:'line',
          // backgroundColor:'#e5e5e5'

				},
        title: {
            text: 'A/B/C Data' ,
            x: -20 ,//center,

        },
        xAxis:{
        	categories:['day 1', 'day 2',
        	'day 3']
        },
        yAxis: {

            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }],
            // gridLineColor:'white',
        },

        series: [{
            name: 'A',
            data: [0.1, 0.9, 0.3],
            color:'#005daa',
            type:'spline'
        }, {
            name: 'B',
            data: [0.8,0.5,0.6],
            color:'#f04a8a',
            type:'spline'
        }, {
            name: 'C',
            data: [0.3,0.5,0.8],
            color:'orange',
            type:'spline'
        }],
        credits:{
	      	enabled:false
	      },
	      exporting:{
	      	buttons:{
	      		exportButton:{
	      			enabled:false
	      		},
	      		contextButton:{
	      			enabled:false
	      		},
	      		printButton:{
	      			enabled:false
	      		}
	      	}
	      }
    });


	// calories
	$('#calories').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Calories  VS Weight'
        },
        xAxis: {
            categories: [
                'Day 1',
                'Day 2',
                'Day 3'
            ]
        },
        yAxis: [{
            min: 0,
            title: {
                text: 'Weight (lb)'
            }
        }, {
            title: {
                text: 'Calorie (Cal)'
            },
            opposite: true
        }],
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Weight',
            color: 'rgba(126,86,134,.9)',
            data: [150,180,160],
            pointPadding: 0.4,
            pointPlacement: -0.2
        }, {
            name: 'Calorie (IN)',
            color: 'rgba(248,161,63,1)',
            data: [1000,1500,1250],
            tooltip: {
                valuePrefix: '$',
                valueSuffix: ' M'
            },
            pointPadding: 0.3,
            pointPlacement: 0.2,
            yAxis: 1
        }, {
            name: 'Calorie (OUT)',
            color: 'rgba(186,60,61,.9)',
            data: [800,900,1000],
            tooltip: {
                valuePrefix: '$',
                valueSuffix: ' M'
            },
            pointPadding: 0.4,
            pointPlacement: 0.2,
            yAxis: 1
        }],
        credits:{
	      	enabled:false
	      },
	      exporting:{
	      	buttons:{
	      		exportButton:{
	      			enabled:false
	      		},
	      		contextButton:{
	      			enabled:false
	      		},
	      		printButton:{
	      			enabled:false
	      		}
	      	}
	      }
    });
})