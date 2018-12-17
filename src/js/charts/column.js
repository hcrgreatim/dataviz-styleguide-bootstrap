Highcharts.chart('column1', {
    chart: {
        type: 'column'
    },
    title: {
        text: '<b>Trend of global displacement</b> | 1997 - 2016',
    },
    subtitle: {
        text: '<b>Source:</b> UNHCR',
    },
    xAxis: {
        labels: {
            formatter: function(){
                var v = this.value;
                v = v.toString();
                return "'"+v.slice(-2);
            }
        }
    },
    yAxis: {
        title: {
            text: 'Displaced population (millions)',
        },
    },
    legend: {
        enabled: false
    },
    series: [{
        pointStart: 1996,
        data: [37,34,35,38,38,42,41,39,40,38,39,43,42,43,44,42,45,51,60,65,66]
    }]
});


Highcharts.chart('column2', {
    chart: {
        type: 'column',
        marginLeft: 0,
    },
    title: {
        text: '<b>Refugees in a protracted situation</b> | 2009 - 2016, <i>(millions)</i>',
    },
    subtitle: {
        text: '<b>Source:</b> UNHCR',
    },
    xAxis: {
        labels: {
            formatter: function(){
                var v = this.value;
                v = v.toString();
                return "'"+v.slice(-2);
            }
        }
    },
    yAxis: {
        labels: {
            enabled: false
        }, 
        visible: false,
        title: ''
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
            }
        }
    },
    series: [{
        pointStart: 2009,
        colorIndex: 1,
        data: [
            {y: 5.4},
            {y:7.01},
            {y:6.9},
            {y:6.2},
            {y:6.1},
            {y:6.2},
            {y:6.4},
            {y:11.9, colorIndex: 0}
            ]
    }]
});