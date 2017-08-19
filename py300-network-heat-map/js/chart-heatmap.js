var fromServer;
var toServer;
var servers;
var theColor;
var theColorStroke;



Highcharts.chart('container', {

    chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 0
    },


    title: {
        text: 'NETWORK LATENCY',
        style: {
            color: 'rgba(0,0,0,0.6)',
            fontSize: '24px'
        }
    },

    xAxis: {
        categories: ['Brazil', 'Netherlands', 'Singapore'],
        labels: {
            style: {
                color: 'rgba(0,0,0,0.6)',
                fontSize: '18px'
            }
        }
    },

    yAxis: {
        categories: ['Singapore', 'Netherlands', 'Brazil'],
        title: null,
        labels: {
            style: {
                color: 'rgba(0,0,0,0.6)',
                fontSize: '18px'
            }
        }
    },

    colors: [
        'rgba(96,125,139,0.3)',  // gray
        // '#CFD8DC',  // gray
        'rgba(0,150,136,0.4)',  // green
        // '#99D5CF',  // green
        'rgba(255,152,0,0.4)',  // yellow
        // '#FFD699',  // yellow
        'rgba(244,67,54,0.4)'  // red
        // '#FBB4AF'  // red
    ],

    colorAxis: {
        dataClassColor: 'category',
        dataClasses: [{
            name: 'self'
        }, {
            to: 80
        }, {
            from: 81,
            to: 99
        }, {
            from: 100
        }]
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolRadius: 0,
        symbolHeight: 14
    },

    tooltip: {
        useHTML: true,
        formatter: function () {
            return '<span class="py300-tooltip" style="background-color: ' + this.point.color + ';">' + this.series.yAxis.categories[this.point.y] + String.fromCharCode(8594) + this.series.xAxis.categories[this.point.x] + '<br>' +
                this.point.value + ' ms</span>';
        },
        style: {
            fontSize: '16px',
            fontWeight: '600',
            align: 'center'
        },
        borderWidth: 0,
        backgroundColor: null,
        borderRadius: 0,
        padding: 0
    },

    series: [{
        name: 'NETWORK LATENCY',
        borderWidth: 1,
        borderColor: '#fff',
        data: [
            [0, 0, 95],
            [0, 1, 70],
            [0, 2, 'self'],
            [1, 0, 105],
            [1, 1, 'self'],
            [1, 2, 50],
            [2, 0, 'self'],
            [2, 1, 85],
            [2, 2, 110],
            ],
        dataLabels: {
            enabled: true,
            color: 'rgba(0,0,0,0.3)',
            style: {
                fontSize: '30px'
            }
        }
    }],

    rangeSelector: {
        enabled: true,
        buttons: [{
            count: 10,
            type: 'minute',
            text: '10M'
        }, {
            count: 1,
            type: 'hour',
            text: '1H'
        }, {
            count: 1,
            type: 'day',
            text: '1D'
        }, {
            type: 'all',
            text: 'All'
        }],
        inputEnabled: false,
        selected: 0
    },

    plotOptions: {
        series: {
            cursor: 'pointer',
            events: {
                click: function (event) {
                    // server that sends ping
                    var fromServer = event.point.series.yAxis.categories[event.point.y];
                    // server that receives ping
                    var toServer = event.point.series.xAxis.categories[event.point.x];
                    // server relationship, for line chart title
                    var servers = fromServer + ' ' + toServer
                    // populate alert, based on server relationship clicked on (testing purposes only)
                    var str = servers + ' line chart to show below (alert for testing only)';
                    // alert(str);
                    // populate line chart, based on server relationship clicked on
                    var theLineChart = fromServer + toServer;
                    // get color of heat map tile
                    var theColor = event.point.color;
                    // get new color, for line chart stroke outline (temporary)
                    var theColorStrokeTemp = theColor.slice(4).split(',');
                    // get new color, for line chart stroke outline
                    var theColorStroke = 'rgba' + theColorStrokeTemp[0] + ',' + theColorStrokeTemp[1] + ',' + theColorStrokeTemp[2] + ',' + '0.8)';
                    // hide all line charts
                    $('.py300-container').hide();
                    // show line chart, based on server relationship clicked on
                    $('#' + theLineChart).show();
                    // update line chart fill color
                    $('#' + theLineChart).find('path.highcharts-area').attr('fill', theColor);
                    // update line chart stroke outline color
                    $('#' + theLineChart).find('path.highcharts-graph').attr('stroke', theColorStroke);
                }
            }
        }
    }

});