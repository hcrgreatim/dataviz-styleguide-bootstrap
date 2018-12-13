Highcharts.chart('bar1', {
    chart: {
        type: 'column',
        styledMode: true,
        marginTop: 70
    },
    title: {
        text: 'Trend of global displacement'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {

    },
    yAxis: {
        min: 0,
        title: {
            text: 'Displaced population (millions)',
            rotation: 0,
            reserveSpace: false,
            align: 'high',
            textAlign: 'high',
            y: -13,
            x: -3
        },
        labels: {
            y: 4
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
            pointStart: 1966
        }
    },
    series: [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

    }]
});