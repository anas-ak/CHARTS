anychart.onDocumentReady(function () {

    // create a data set
    var data = anychart.data.set([
    ["Jan", 3.8, 5.5, 6.9],
    ["Feb", 5.5, 7.0, 9.6],
    ["Mar", 9.9, 11.7, 13.3],
    ["Apr", 15.7, 17.6, 19.7],
    ["May", 21.5, 23.3, 25.8],
    ["Jun", 26.3, 28.5, 30.2],
    ["Jul", 29.3, 31.6, 33.5],
    ["Aug", 28.4, 30.6, 32.8],
    ["Sep", 24.4, 26.5, 28.0],
    ["Oct", 18.3, 20.6, 22.4],
    ["Nov", 12.3, 14.4, 16.5],
    ["Dec", 6.6, 8.7, 10.4]
    ]);

    // map the data
    var seriesData_1 = data.mapAs({x: 0, value: 1});
    var seriesData_2 = data.mapAs({x: 0, value: 2});
    var seriesData_3 = data.mapAs({x: 0, value: 3});

    // set the chart type
    var chart = anychart.line();

    // set the interactivity mode
    chart.interactivity().hoverMode("single");

    // create the first series (area), set the data and name
    var series1 = chart.area(seriesData_1);
    series1.name("Average for 20 Years");

    // configure the visual settings of the first series 
    series1.normal().fill("#04b4ae", 0.3);                      // Light Blue
    series1.hovered().fill("#04b4ae", 0.1);
    series1.selected().fill("#04b4ae", 0.5);
    series1.normal().hatchFill("zig-zag", "#808080", 1, 15);    // Gray zig-zags
    series1.hovered().hatchFill("zig-zag", "#808080", 1, 15);
    series1.selected().hatchFill("zig-zag", "#808080", 1, 15);
    series1.normal().stroke("#04b4ae");                         // Light Blue
    series1.hovered().stroke("#04b4ae", 2);
    series1.selected().stroke("#04b4ae", 4);

    // create the second series (line), set the data and name  
    var series2 = chart.line(seriesData_2);
    series2.name("2016");

    // configure the visual settings of the second series
    series2.normal().stroke("#04b404");                         // Green
    series2.hovered().stroke("#04b404", 2);
    series2.selected().stroke("#04b404", 4);

    // create the third series (line), set the data and title  
    var series3 = chart.line(seriesData_3);
    series3.name("2017 (Forecast)");

    // configure the visual settings of the third series
    series3.normal().stroke("#aeb404", 1, "10 5", "round");     // Olive Green with strokes
    series3.hovered().stroke("#aeb404", 2, "10 5", "round");
    series3.selected().stroke("#aeb404", 4, "10 5",  "round");

    // turn the legend on
    chart.legend(true);

    // set the chart title
    chart.title("Visual Settings");

    // set the titles of the axes
    chart.xAxis().title("Month");
    chart.yAxis().title("Temperature, \xb0C");

    // set the container id
    chart.container("container");

    // initiate drawing the chart
    chart.draw();
    /****************************************************************************************/

    // create a data set
    var new_data = anychart.data.set([
        ["January", 10000, 9000],
        ["February", 12000, 10500],
        ["March", 13000, 11000],
        ["April", 10000, 9000],
        ["May", 9000, 8500]
    ]);

    // map the data
    var n_seriesData_1 = new_data.mapAs({x: 0, value: 1});
    var n_seriesData_2 = new_data.mapAs({x: 0, value: 2});

    // set the chart type
    var new_chart = anychart.line();

     // create the first series and set the data
    var n_series1 = new_chart.line(n_seriesData_1);

    // create the second series and set the data
    var n_series2 = new_chart.line(n_seriesData_2);

    // enable and configure markers on the first series
    n_series1.markers(true);
    n_series1.markers().type("star5");
    n_series1.markers().fill("gold");
    n_series1.markers().size(10);

     // set the chart title
    new_chart.title("Markers (Series)");

    // set the titles of the axes
    new_chart.xAxis().title("Month");
    new_chart.yAxis().title("Sales, $");

    // set the container id
    new_chart.container("container_b");

    // initiate drawing the chart
    new_chart.draw();
    /****************************************************************************************/

    // create data
    var l_data = [
    ["John", 10000],
    ["Jake", 12000],
    ["Peter", 13000],
    ["James", 10000],
    ["Mary", 9000]
    ];

    // set the chart type
    var l_chart = anychart.line();

    // create a series, set the data and name
    var l_series = l_chart.column(l_data);
    l_series.name("Sales");

    // enable and configure labels on the series
    l_series.labels(true);
    l_series.labels().fontColor("green");
    l_series.labels().fontWeight(900);
    l_series.labels().format("${%value}");

    // set the chart title
    l_chart.title("Labels (Series)");

    // set the titles of the axes
    l_chart.xAxis().title("Manager");
    l_chart.yAxis().title("Sales, $");

    // set the container id
    l_chart.container("container_c");

    // initiate drawing the chart
    l_chart.draw();
    /****************************************************************************************/
    // create a data set
    var t_data = anychart.data.set([
      ["John", 10000, 12500],
      ["Jake", 12000, 15000],
      ["Peter", 13000, 16500],
      ["James", 10000, 13000],
      ["Mary", 9000, 11000]
    ]);

    // map the data
    var t_seriesData_1 = t_data.mapAs({x: 0, value: 1});
    var t_seriesData_2 = t_data.mapAs({x: 0, value: 2});

    // set the chart type
    var t_chart = anychart.column();

    // create the first series, set the data and name
    var t_series1 = t_chart.column(t_seriesData_1);
    t_series1.name("Sales in 2015");

    // create the second series, set the data and name
    var t_series2 = t_chart.column(t_seriesData_2);
    t_series2.name("Sales in 2016");

    // configure tooltips on the chart
    t_chart.tooltip().title("Information");
    t_chart.tooltip().format("Manager: {%categoryName} \n{%seriesName}: ${%value}");

    // set the chart title
    t_chart.title("Tooltips (Chart)");

    // set the titles of the axes
    t_chart.xAxis().title("Manager");
    t_chart.yAxis().title("Sales, $");

    // set the container id
    t_chart.container("container_d");

    // initiate drawing the chart
    t_chart.draw();
    /****************************************************************************************/
    
    // create a data set
    var q_data = anychart.data.set([
        ["John", 10000, 12500],
        ["Jake", 12000, 15000],
        ["Peter", 13000, 16500],
        ["James", 10000, 13500],
        ["Mary", 9000, 11000]
      ]);
  
      // map the data
      var q_seriesData_1 = q_data.mapAs({x: 0, value: 1});
      var q_seriesData_2 = q_data.mapAs({x: 0, value: 2});
  
      // set the chart type
      var q_chart = anychart.column();
  
      // create the first series, set the data and name
      var q_series1 = q_chart.column(seriesData_1);
      q_series1.name("Sales in 2015");
  
      // create the second series, set the data and name
      var q_series2 = q_chart.column(seriesData_2);
      q_series2.name("Sales in 2016");
  
      // enable the legend
      q_chart.legend(true);
      
      // set the chart title
      q_chart.title("Legend");
      
      // set the titles of the axes
      q_chart.xAxis().title("Manager");
      q_chart.yAxis().title("Sales, $");
  
      // set the container id
      q_chart.container("container_e");
  
      // initiate drawing the chart
      q_chart.draw();
      /****************************************************************************************/

      // create a data set
    var a_data = anychart.data.set([
        ["John", 10000, 100],
        ["Jake", 12000, 120],
        ["Peter", 13000, 130],
        ["James", 10000, 100],
        ["Mary", 9000, 90]
      ]);
  
      // map the data
      var a_seriesData_1 = a_data.mapAs({x: 0, value: 1});
      var a_seriesData_2 = a_data.mapAs({x: 0, value: 2});
  
      // set the chart type
      var a_chart = anychart.column();
  
      // configure the main y-scale
      var yScale1 = anychart.scales.linear();
      yScale1.maximum(20000);
  
      // configure an extra y-scale
      var yScale2 = anychart.scales.linear();
      yScale2.maximum(150);
  
      // set the title of the x-axis
      var xAxis = a_chart.xAxis();
      xAxis.title("Manager");
  
      // configure the main y-axis
      var yAxis1 = a_chart.yAxis(0);
      yAxis1.scale(yScale1);
      yAxis1.title("Sales, $");
  
      // configure an extra y-axis
      var yAxis2 = a_chart.yAxis(1);
      yAxis2.orientation("right")
      yAxis2.scale(yScale2);
      yAxis2.title("Number of Items Sold");
  
      // create the first series, set the data and name
      var a_series1 = a_chart.column(a_seriesData_1);
      a_series1.name("Sales");
  
      // create the second series, set the data and name
      var a_series2 = a_chart.line(a_seriesData_2);
      a_series2.name("Number of Items Sold");
  
      // bind the first series to the main y-scale
      a_series1.yScale(yScale1);
  
      // bind the second series to the extra y-scale
      a_series2.yScale(yScale2);
  
      // set the chart title
      a_chart.title("Axes and Scales");
  
      // set the container id
      a_chart.container("container_e");
  
      // initiate drawing the chart
      a_chart.draw();
});