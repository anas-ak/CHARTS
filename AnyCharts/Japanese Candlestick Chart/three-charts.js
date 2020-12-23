anychart.onDocumentReady(function() {

            //Creates Candlestick Chart.
            var chart_a = anychart.candlestick(
            [
                [Date.UTC(2018, 10, 01), 511.53, 514.98, 505.79, 506.40],
                [Date.UTC(2018, 10, 10), 507.84, 513.30, 507.23, 512.88],
                [Date.UTC(2018, 10, 20), 512.36, 515.40, 510.58, 511.40],
                [Date.UTC(2018, 10, 30), 513.10, 516.50, 511.47, 515.25],
                [Date.UTC(2018, 11, 09), 515.02, 528.00, 514.62, 525.15]
            ]);

            chart_a.title('First Candlestick Chart');
            chart_a.xScale().minimum(Date.UTC(2018, 09, 25)).maximum(Date.UTC(2018, 11, 15));
            chart_a.container('container');
            chart_a.draw();

            //data
            var data = [
            [Date.UTC(2007, 07, 23), 23.55, 23.88, 23.38, 23.62],
            [Date.UTC(2007, 07, 24), 22.65, 23.7, 22.65, 23.36],
            [Date.UTC(2007, 07, 25), 22.75, 23.7, 22.69, 23.44],
            [Date.UTC(2007, 07, 26), 23.2, 23.39, 22.87, 22.92],
            [Date.UTC(2007, 07, 27), 23.98, 24.49, 23.47, 23.49],
            [Date.UTC(2007, 07, 30), 23.55, 23.88, 23.38, 23.62],
            [Date.UTC(2007, 07, 31), 23.88, 23.93, 23.24, 23.25],
            [Date.UTC(2007, 08, 01), 23.17, 23.4, 22.85, 23.25],
            [Date.UTC(2007, 08, 02), 22.65, 23.7, 22.65, 23.36],
            [Date.UTC(2007, 08, 03), 23.2, 23.39, 22.87, 22.92],
            [Date.UTC(2007, 08, 06), 23.03, 23.15, 22.44, 22.97],
            [Date.UTC(2007, 08, 07), 22.75, 23.7, 22.69, 23.44]
            ];

            //create a chart
            var chart_b = anychart.candlestick();

            //set the interactivity mode
            chart_b.interactivity('by-x');
            
            //create a japanese candlestick series and set the data
            var series = chart_b.candlestick(data);
            series.pointWidth(10);

            //set the chart title
            chart_b.title('Japanese Candlestick Chart: Basic Sample');

            //set the titles of the axes
            chart_b.xAxis().title('Date');
            chart_b.yAxis().title('Price, $');

            //set the container id
            chart_b.container('container_b');

            //initiate drawing the chart
            chart_b.draw();

            // create data
            var more_data = ([
                ["White", 507, 511, 506, 510],
                ["Black", 510, 511, 506, 507],
                ["Long lower shadow", 508.5, 511, 506, 510],
                ["Long upper shadow", 508.5, 511, 506, 507],
                ["Hammer", 510, 511, 506, 511],
                ["Inverted hammer", 507, 511, 506,506],
                ["Spinning top white", 508, 511, 506, 509],
                ["Spinning top black", 509, 511, 506, 508],
                ["Four Price Doji", 508.5, 508.5, 508.5, 508.5],
                ["Long legged doji", 508.5, 511, 506, 508.5],
                ["Dragonfly doji", 511, 511, 506, 511],
                ["Gravestone doji", 506, 511, 506, 506],
                ["Marubozu white", 506, 511, 506, 511],
                ["Marubozu black", 511, 511, 506, 506]
            ]);

            // create a chart
            var chart_c = anychart.cartesian();
  
            // set the interactivity mode
            chart_c.interactivity("by-x");

            // rotate the labels on the x-axis
            chart_c.xAxis().labels().rotation(-90);

            // create a series, set the data and configure visual settings
            var new_series = chart_c.candlestick(more_data);
            new_series.fallingFill("black");
            new_series.fallingStroke("black");
            new_series.risingFill("white");
            new_series.risingStroke("black");

            // set the interactivity mode
            chart_c.interactivity("by-x");

            // set the container id
            chart_c.container("container_c");

            // initiate drawing the chart
            chart_c.draw();
        });