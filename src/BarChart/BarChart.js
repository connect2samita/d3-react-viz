import React from "react";
import * as d3 from "d3";

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
    var colors = d3
      .scaleSequential()
      .domain([1, 10])
      .interpolator(d3.interpolateViridis);

    var container = d3.select(".bar-chart." + this.props.id);

    var graph = container
      .append("svg")
      .attr("width", width)
      .attr("height", barHeight * data.length);

    var barHorizontal = graph
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", function (d, i) {
        return "translate(0," + i * barHeight + ")";
      });

    const x = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.frequency)])
      .range([0, width - 0]);

    const y = d3
      .scaleBand()
      .domain(d3.sort(data, (d) => -d.frequency))
      .rangeRound([0, height - 0])
      .padding(0.1);

    barHorizontal
      .append("rect")
      .attr("width", function (d) {
        return d * scaleFactor;
      })
      .attr("height", barHeight - 10)
      .attr("rx", 2)
      .attr("fill", function (d, i) {
        return colors(d);
      });

    barHorizontal
      .append("text")
      .attr("x", function (d) {
        return d * scaleFactor + 5;
      })
      .attr("y", (barHeight - 10) / 2)
      .attr("dy", ".35em")
      .style("font-size", "12px")
      .style("color", "#FFF")
      .text(function (d) {
        return "name " + d;
      });

    barHorizontal
      .append("g")
      .attr("transform", `translate(0, 15)`)
      .call(d3.axisTop(x).ticks(width / 80))
      .call((g) => g.select(".domain").remove());

    barHorizontal
      .append("g")
      .attr("transform", `translate(20 ,-15)`)
      .call(d3.axisLeft(y).tickSizeOuter(0));
  }

  componentDidMount() {
    let dataset = this.props.dataset.split(",");
    dataset.forEach((e, i) => {
      dataset[i] = parseInt(e);
    });

    this.horizontalChart(dataset);
  }

  render() {
    return <div className={"bar-chart " + this.props.id}></div>;
  }
}

export default barChart;
