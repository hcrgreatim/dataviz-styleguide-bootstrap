Highcharts.chart('bar1', {
    chart: {
        type: 'column',
        styledMode: true,
        marginTop: 55,
        marginBottom: 40,
        marginLeft: 20
    },
    title: {
        text: '<b>Trend of global displacement</b> | 1997 - 2016',
        align: 'left',
        useHTML: 'true',
        x: -9
    },
    subtitle: {
        text: '<b>Source:</b> UNHCR',
        verticalAlign: 'bottom',
        useHTML: 'true',
        align: 'left',
        x: -7
    },
    xAxis: {
        tickLength: 0,
        labels: {
            y: 15,
            formatter: function(){
                var v = this.value;
                v = v.toString();
                return "'"+v.slice(-2);
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Displaced population (millions)',
            rotation: 0,
            reserveSpace: false,
            align: 'high',
            textAlign: 'high',
            y: -15,
            x: -1
        },
        labels: {
            y: 3,
            x: -4,
        }
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        },
        series: {
            pointStart: 1996,
            pointPadding: 0,
            groupPadding: 0.1,
        }
    },
    series: [{
        data: [37,34,35,38,38,42,41,39,40,38,39,43,42,43,44,42,45,51,60,65,66]
    }]
});