Highcharts.setOptions({
    chart: {
        styledMode: true,
        marginTop: 55,
        marginBottom: 40,
        marginLeft: 20
    },
    title: {
        align: 'left',
        useHTML: 'true',
        x: -9
    },
    subtitle: {
        verticalAlign: 'bottom',
        useHTML: 'true',
        align: 'left',
        x: -7
    },
    xAxis: {
        tickLength: 0,
        labels: {
            y: 15
        }
    },
    yAxis: {
        title: {
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
        pointFormat: '<tr>' +
            '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.1,
            borderWidth: 0,
        },
        bar: {
            pointPadding: 0.1,
            borderWidth: 0,
        },
        series: {
            pointPadding: 0,
            groupPadding: 0.12,
            dataLabels: {
                inside: false,
                overflow: 'allow',
                crop: false,
                y: -2,
            }
        }
    }
});