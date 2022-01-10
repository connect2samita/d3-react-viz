import React from 'react';
import * as d3 from 'd3';

class barChart extends React.Component {
    constructor(props) {
        super(props);
    }

    horizontalChart(dataset) {
        var data = dataset;
        var width = 300;
        var height = 300;
        var scaleFactor = 20;
        var barHeight = 30;

        // var colors = d3.scaleOrdinal(d3.schemeAccent);
        var colors = d3.scaleSequential().domain([1,10]).interpolator(d3.interpolateViridis);

        var container = d3.select('.bar-chart.' + this.props.id);

        var graph = container.append("svg")
            .attr("width", width)
            .attr("height", barHeight * data.length);

        var barHorizontal = graph.selectAll('g')
            .data(data)
            .enter()
            .append("g")
            .attr("transform", function(d, i) {
                return "translate(0," + (i * barHeight) + ")";
            });

        barHorizontal.append("rect")
            .attr("width", function(d) {
                return (d * scaleFactor);
            })
            .attr("height", barHeight - 10)
            .attr("rx", 2)
            .attr("fill", function(d, i) {
                return colors(d);
            });

        barHorizontal.append("text")
            .attr("x", function(d) {
                return (d * scaleFactor) + 5;
            })
            .attr("y", (barHeight - 10) / 2)
            .attr("dy", ".35em")
            .style("font-size", "12px")
            .style("color", "#FFF")
            .text(function(d) { return d; });
    }

    componentDidMount() {
        let dataset = this.props.dataset.split(",");
        dataset.forEach((e,i) => {
            dataset[i] = parseInt(e);
        });

        this.horizontalChart(dataset);
    }

    render() {
        return (
            <div className={"bar-chart " + this.props.id}></div>
        );
    }
}

export default barChart;