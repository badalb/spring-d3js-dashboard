$(document).ready(
		function() {
			if ($("#TBC01")) {

				$.ajax({
					url : '/chartdata/TBC01',
					contentType : 'application/json',
					dataType : 'json',
					type : 'GET',
					async : false,
					success : function(res) {
														
						var dataset = res.chartData;
						
						var margin = {top: 20, right: 20, bottom: 70, left: 40},
					    width = 400 - margin.left - margin.right,
					    height = 400 - margin.top - margin.bottom;

					// Parse the date / time
					//var	parseDate = d3.time.format("%Y-%m").parse;

					var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

					var y = d3.scale.linear().range([height, 0]);

					var xAxis = d3.svg.axis()
					    .scale(x)
					    .orient("bottom")
					     .ticks(10)
					    //.tickFormat(d3.time.format("%Y-%m"))
					    ;

					var yAxis = d3.svg.axis()
					    .scale(y)
					    .orient("left")
					    .ticks(10);

					var svg = d3.select("#TBC01").append("svg")
					    .attr("width", width + margin.left + margin.right)
					    .attr("height", height + margin.top + margin.bottom)
					  .append("g")
					    .attr("transform", 
					          "translate(" + margin.left + "," + margin.top + ")");

					//d3.csv("bar-data.csv", function(error, data) {

					 
						
					  x.domain(dataset.map(function(d) { return d.itemLabel; }));
					  y.domain([0, d3.max(dataset, function(d) { return d.itemValue; })]);

					  svg.append("g")
					      .attr("class", "x axis")
					      .attr("transform", "translate(0," + height + ")")
					      .call(xAxis)
					    .selectAll("text")
					      .style("text-anchor", "end")
					      .attr("dx", "-.8em")
					      .attr("dy", "-.55em")
					      .attr("transform", "rotate(-90)" );

					  svg.append("g")
					      .attr("class", "y axis")
					      .call(yAxis)
					    .append("text")
					      .attr("transform", "rotate(-90)")
					      .attr("y", 1)
					      .attr("dy", ".71em")
					      .style("text-anchor", "end")
					      .text("");

	
				   var bar =    svg.selectAll("bar")
					      .data(dataset)
					    .enter().append("rect")
					      .style("fill", "steelblue")
					      .attr("x", function(d) { return x(d.itemLabel); })
					      .attr("width", x.rangeBand())
					      .attr("y", function(d) { return y(d.itemValue); })
					      .attr("height", function(d) { return height - y(d.itemValue); })
					     // .text(function(d) { return d.itemValue; });
					      					  
					  svg.selectAll("bar")
				      .data(dataset)
					  .enter().append("text")
					  .attr("x", function(d) { return x(d.itemLabel); })
					  .attr("y", function(d, i){ return y(d.itemValue) -5; } )
					  .attr("dx", x.rangeBand()/2 -5)
					  //.attr("dy", 15)
					  .attr("text-anchor", "top")
					  .text(function(d) { return d.itemValue; });

				   var div = d3.select("#TBC01").append("div").attr("class", "toolTip");
				   
				   bar.on("mousemove", function(d){
						    div.style("left", d3.event.pageX+10+"px");
								  div.style("top", d3.event.pageY-25+"px");
								  div.style("display", "inline-block");
						    div.html((d.itemLabel)+"<br>"+(d.itemValue));
						});

				   bar.on("mouseout", function(d){
						    div.style("display", "none");
						}); 
						
				   bar.on("click", function(d) {
					         alert(d.itemLabel + ":" + d.itemValue)
					      });		
						
					},
					error : function(res) {
						alert(res);
					}
				});

			}

		});