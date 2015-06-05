define(["app", "d3"],
        function(app) {
            return {
                drawPie: function(cdata) {
                    var dataset = cdata.chartData;
                    var el = '#' + cdata.reportCode;

                    var div = d3.select(el).append("div").attr("class", "toolTip");

//Width and height
                    var w = 300;
                    var h = 400;
                    var legendRectSize = 18;
                    var legendSpacing = 4;
                    var color = d3.scale.category20b();
                    var margin = {top: 20, right: 20, bottom: 70, left: 40},
                    width = 400 - margin.left - margin.right,
                            height = 300 - margin.top - margin.bottom;

                    var donut = d3.layout.pie().value(function(d) {
                        return d.itemValue;
                    });

                    var pieData = donut(dataset);

                    var sliceProportion = 0; //size of this slice

                    function filterData(element, index, array) {
                        element.name = dataset[index].itemLabel;
                        element.value = dataset[index].itemValue;
                        sliceProportion += element.value;
                        return (element.value > 0);
                    }
//var dataset = [ 5, 10, 20, 45, 6, 25 ];

                    var filteredPieData = pieData.filter(filterData);

                    var outerRadius = w / 2;
                    var innerRadius = 0;
                    var arc = d3.svg.arc().innerRadius(innerRadius)
                            .outerRadius(outerRadius);

                    var pie = d3.layout.pie();

//Easy colors accessible via a 10-step ordinal scale
                    var color = d3.scale.category10();

//Create SVG element
                    var svg = d3.select(el).append("svg").attr(
                            "width", w).attr("height", h);

//Set up groups
                    var arcs = svg.selectAll("g.arc").data(filteredPieData)
                            .enter().append("g").attr("class", "arc").attr(
                            "transform",
                            "translate(" + outerRadius + ","
                            + outerRadius + ")");

//Draw arc paths
                    arcs.append("path").attr("fill", function(d, i) {
                        return color(i);
                    }).attr("d", arc);

//Labels
                    arcs.append("text").attr("transform", function(d) {
                        return "translate(" + arc.centroid(d) + ")";
                    }).attr("text-anchor", "middle").text(function(d) {
                        return d.value;
                    });

//legend

                    var legend = svg.selectAll('.legend')
                            .data(color.domain())
                            .enter()
                            .append('g')
                            .attr('class', 'legend')
                            .attr('transform', function(d, i) {
                                var height = legendRectSize + legendSpacing;
                                var offset = height * color.domain().length / 2;
                                var horz = 2 * legendRectSize;
                                var vert = (h - 50) + i * height - offset;
                                return 'translate(' + horz + ',' + vert + ')';
                            });

                    legend.append('rect')
                            .attr('width', legendRectSize)
                            .attr('height', legendRectSize)
                            .style('fill', color)
                            .style('stroke', color);

                    legend.append('text')
                            .attr('x', legendRectSize + legendSpacing)
                            .attr('y', legendRectSize - legendSpacing)
                            .text(function(d) {
                                return filteredPieData[d].data.itemLabel;
                            });


//tooltip
                    arcs.on("mousemove", function(d) {
                        div.style("left", d3.event.pageX + 10 + "px");
                        div.style("top", d3.event.pageY - 25 + "px");
                        div.style("display", "inline-block");
                        div.html((d.data.itemLabel) + "<br>" + (d.data.itemValue));
                    });

                    arcs.on("mouseout", function(d) {
                        div.style("display", "none");
                    });

                    arcs.on("click", function(d) {
                        alert(d.data.itemLabel + ":" + d.data.itemValue);
                    });


                }
            };
        });