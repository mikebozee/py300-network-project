var $BrazilBrazil = $('<div class="py300-container" id="BrazilBrazil"></div>').appendTo('#py300-line-charts');
var $BrazilNetherlands = $('<div class="py300-container" id="BrazilNetherlands"></div>').appendTo('#py300-line-charts');
var $BrazilSingapore = $('<div class="py300-container" id="BrazilSingapore"></div>').appendTo('#py300-line-charts');

Highcharts.setOptions({
    global: {
        useUTC: false
    }
});





// Create the chart
window.chart = new Highcharts.stockChart({
    chart: {
        renderTo: $BrazilBrazil[0],
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.round(Math.random() * 100);
                    series.addPoint([x, y], true, true);
                }, 1000);
            }
        },
        type: 'area'
    },

    rangeSelector: {
        buttons: [{
            count: 1,
            type: 'minute',
            text: '1M'
        }, {
            count: 5,
            type: 'minute',
            text: '5M'
        }, {
            count: 1,
            type: 'hour',
            text: '1H'
        }, {
            type: 'all',
            text: 'All'
        }],
        inputEnabled: false,
        selected: 0
    },

    title: {
        text: 'Brazil' + String.fromCharCode(8594) + 'Brazil'
    },

    exporting: {
        enabled: false
    },

    series: [{
        type: 'areaspline',
        name: 'Random data',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -999; i <= 0; i += 1) {
                data.push([
                    time + i * 1000,
                    Math.round(Math.random() * 150)
                ]);
            }
            return data;
        }())
    }],

    plotOptions: {
        series: {
            color: window.theColorStroke,
            fillColor: window.theColor
        }
    }

});





// Create the chart
window.chart = new Highcharts.stockChart({
    chart: {
        renderTo: $BrazilNetherlands[0],
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.round(Math.random() * 100);
                    series.addPoint([x, y], true, true);
                }, 1000);
            }
        },
        type: 'area'
    },

    rangeSelector: {
        buttons: [{
            count: 1,
            type: 'minute',
            text: '1M'
        }, {
            count: 5,
            type: 'minute',
            text: '5M'
        }, {
            count: 1,
            type: 'hour',
            text: '1H'
        }, {
            type: 'all',
            text: 'All'
        }],
        inputEnabled: false,
        selected: 0
    },

    title: {
        text: 'Brazil' + String.fromCharCode(8594) + 'Netherlands'
    },

    exporting: {
        enabled: false
    },

    series: [{
        type: 'areaspline',
        name: 'Random data',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -999; i <= 0; i += 1) {
                data.push([
                    time + i * 1000,
                    Math.round(Math.random() * 150)
                ]);
            }
            return data;
        }())
    }],

    plotOptions: {
        series: {
            color: window.theColorStroke,
            fillColor: window.theColor
        }
    }

});





// Create the chart
window.chart = new Highcharts.stockChart({
    chart: {
        renderTo: $BrazilSingapore[0],
        events: {
            load: function () {

                // set up the updating of the chart each second
                var series = this.series[0];
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = Math.round(Math.random() * 100);
                    series.addPoint([x, y], true, true);
                }, 1000);
            }
        },
        type: 'area'
    },

    rangeSelector: {
        buttons: [{
            count: 1,
            type: 'minute',
            text: '1M'
        }, {
            count: 5,
            type: 'minute',
            text: '5M'
        }, {
            count: 1,
            type: 'hour',
            text: '1H'
        }, {
            type: 'all',
            text: 'All'
        }],
        inputEnabled: false,
        selected: 0
    },

    title: {
        text: 'Brazil' + String.fromCharCode(8594) + 'Singapore'
    },

    exporting: {
        enabled: false
    },

    series: [{
        type: 'areaspline',
        name: 'Random data',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -999; i <= 0; i += 1) {
                data.push([
                    time + i * 1000,
                    Math.round(Math.random() * 150)
                ]);
            }
            return data;
        }())
    }],

    plotOptions: {
        series: {
            color: window.theColorStroke,
            fillColor: window.theColor
        }
    }

});