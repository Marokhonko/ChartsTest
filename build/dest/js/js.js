Highcharts.chart('container', {
	chart: {
		type: 'column'
	},
	legend: false,
	title: false,

	style: {

	},

	tooltip: {
		enabled: false
	},

	xAxis: {
		categories: ['2013', '2014', '2015', '2016', '2017F', '2018F'],
		gridLineDashStyle: 'shortdash',
		minorTickWidth: 10,
		labels: {
			style: {
				fontSize: 16,
				fontWeight: '700',
				color: '#44b3c2',
				fontFamily: 'Open Sans'
			}
		},
		title: {
			text: 'Driver Change (CAGR)',
			x: 0,
			align: 'left',
			style: {

				fontSize: 12,
				color: '#9b9fa3',
			},
		},
		tickLength: 40,
		tickPixelInterval: 50,
	},

	navigation: {
		buttonOptions: {
			enabled: false
		},
	},

	yAxis: {
		type: 'datetime',
		minorTickInterval: 'auto',
		labels: false,
		gridLineDashStyle: 'longdash',
		title: {
			align: 'high',
			offset: 0,
			text: 'Driver <br> Contribution <br> to sales Growth',
			rotation: 0,
			x: 30,
			y: 10,
			style: {
				fontSize: 16,
				fontWeight: 700,
			}
		}
		// maxZoom: 2,
	},


	plotOptions: {
		series: {
			borderRadius: 5,
			dataLabels: {
				enabled: true,
				color: "#9ca2a9",
				y: 1,
				style: {
					fontSize: 16,
				}
			}
		}
	},
	series: [{
		color: '#44b3c2',
		data: [0.6, 0.7, 0.8, 0.9, 1.12, 1.25],
		y: true,
	}]



});






//////////////////////////

Highcharts.chart('container2', {
	chart: {
		type: 'column',
		marginLeft: 135,

	},
	legend: false,
	title: false,

	style: {

	},

	tooltip: {
		enabled: false
	},

	xAxis: {
		categories: ['2013', '2014', '2015', '2016', '2017F', '2018F'],
		gridLineDashStyle: 'shortdash',
		minorTickWidth: 10,
		labels: {
			style: {
				fontSize: 16,
				fontWeight: '700',
				color: '#44b3c2',
				fontFamily: 'Open Sans'
			}
		},
		title: {
			text: 'Change',
			align: 'left',
			style: {
				fontSize: 12,
				color: '#9b9fa3',
			},
		},
		tickLength: 40,
		tickPixelInterval: 50,
	},

	navigation: {
		buttonOptions: {
			enabled: false
		},
	},

	yAxis: {
		type: 'datetime',
		minorTickInterval: 'auto',
		labels: false,
		gridLineDashStyle: 'longdash',
		title: {
			align: 'high',
			offset: 0,
			text: '     Absolute',
			rotation: 0,
			// x:0,
			y: 10,
			style: {
				fontSize: 16,
				fontWeight: 700,
			}
		}
		// maxZoom: 2,
	},


	plotOptions: {
		series: {
			borderRadius: 5,
			dataLabels: {
				enabled: true,
				color: "#9ca2a9",
				y: 1,
				style: {
					fontSize: 16,
				}
			}
		}
	},
	series: [{
		color: '#44b3c2',
		data: [0.6, 0.7, 0.8, 0.9, 1.12, 1.25],
		y: true,
	}]
});