import React from "react";
import styled from "styled-components";
import { range } from "d3-array";
import { forceSimulation } from "d3-force";
import { quadtree } from "d3-quadtree";
import { select } from "d3-selection";
import { schemeSet3 } from "d3-scale-chromatic";
import { scaleOrdinal, scaleSqrt } from "d3-scale";

// import Kubernetes from './assets/kubernetes.'
const technologies = [
  {
    name: "Kubernetes",
    image: "",
  },
];

class Balls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      width: 0,
      height: 0,
      rect: 0,
      n: 19,
      m: 5,
      padding: 6,
      maxSpeed: 100,
      minxSpeed: 20,
      radius: 7,
      color: null,
      svg: null,
      force: null,
      nodes: [],
      circle: null,
    };
    this.state.width = 1920; //- this.state.margin.left - this.state.margin.right;
    this.state.height = 1080; //- this.state.margin.top - this.state.margin.bottom;
    this.state.rect = [0, 0, this.state.width - 0, this.state.height - 0];
    this.state.radius = scaleSqrt().range([5, 10]);
    this.state.color = scaleOrdinal(schemeSet3).domain(range(this.state.m));
  }
  // componentDidMount() {
  //   console.log("starting animation");
  //   this.startAnimation();
  // }
  // componentDidUpdate() {
  //   console.log("some update")

  // }
  initialise() {
    for (let i of range(this.state.n)) {
      this.state.nodes.push({
        radius: this.state.radius(1 + Math.floor(Math.random() * 4)),
        color: this.state.color(Math.floor(Math.random() * this.state.m)),
        x:
          this.state.rect[0] +
          Math.random() * (this.state.rect[2] - this.state.rect[0]),
        y:
          this.state.rect[1] +
          Math.random() * (this.state.rect[3] - this.state.rect[1]),
        speedX: (Math.random() - 0.5) * 2 * this.state.maxSpeed,
        speedY: (Math.random() - 0.5) * 2 * this.state.maxSpeed,
      });
    }
    this.generateAnimation();
    this.startAnimation();
  }
  generateAnimation() {
    this.generateObjects();
    this.state.force = forceSimulation()
      .nodes(this.state.nodes)
      .on("tick", () => this.tick())
      .alpha(1)
      .alphaDecay(0.0001)
      .stop();
  }
  tick() {
    var { circle, rect, nodes, padding, radius } = this.state;
    function gravity(alpha) {
      return function(d) {
        if (d.x - d.radius - 2 < rect[0]) d.speedX = Math.abs(d.speedX);
        if (d.x + d.radius + 2 > rect[2]) d.speedX = -1 * Math.abs(d.speedX);
        if (d.y - d.radius - 2 < rect[1]) d.speedY = -1 * Math.abs(d.speedY);
        if (d.y + d.radius + 2 > rect[3]) d.speedY = Math.abs(d.speedY);

        d.x = d.x + d.speedX * alpha;
        d.y = d.y + -1 * d.speedY * alpha;
      };
    }
    function collide(alpha) {
      var quadtrees = quadtree(nodes);
      return function(d) {
        var r = d.radius + radius.domain()[1] + padding;

        var nx1 = d.x - r;

        var nx2 = d.x + r;

        var ny1 = d.y - r;

        var ny2 = d.y + r;
        quadtrees.visit(function(quad, x1, y1, x2, y2) {
          if (quad.point && quad.point !== d) {
            var x = d.x - quad.point.x;

            var y = d.y - quad.point.y;

            var l = Math.sqrt(x * x + y * y);

            var r =
              d.radius +
              quad.point.radius +
              (d.color !== quad.point.color) * padding;
            if (l < r) {
              l = ((l - r) / l) * alpha;
              d.x -= x *= l;
              d.y -= y *= l;
              quad.point.x += x;
              quad.point.y += y;
            }
          }
          return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
        });
      };
    }
    circle
      .each(gravity(0.1))
      .each(collide(0.5))
      .attr("cx", function(d) {
        return d.x;
      })
      .attr("cy", function(d) {
        return d.y;
      });
  }
  componentDidMount() {
    setTimeout(() => this.initialise());
  }
  startAnimation() {
    this.state.force.restart();
    select(".container")
      .select("svg")
      .selectAll("*")
      .attr("opacity", 1);
  }
  stopAnimation() {
    this.state.force.stop();
    select(".container")
      .select("svg")
      .selectAll("*")
      .attr("opacity", 0);
  }

  generateObjects() {
    this.state.svg = select(".container")
      .append("svg")
      .attr(
        "width",
        2880
        // this.state.width + this.state.margin.left + this.state.margin.right
      )
      .attr(
        "height",
        1800
        // this.state.height + this.state.margin.top + this.state.margin.bottom
      )
      .append("g")
      .attr(
        "transform",
        "translate(" +
          this.state.margin.left +
          "," +
          this.state.margin.top +
          ")"
      );
    this.state.circle = this.state.svg
      .selectAll("circle")
      .data(this.state.nodes)
      .enter()
      .append("circle")
      .attr("r", function(d) {
        return d.radius;
      })
      .attr("cx", function(d) {
        return d.x;
      })
      .attr("cy", function(d) {
        return d.y;
      })
      .style("fill", function(d) {
        return d.color;
      });
    select(".container")
      .select("svg")
      .selectAll("*")
      .attr("opacity", 0);
  }

  // Move nodes toward cluster focus.

  render() {
    return (
      <div
        className="container"
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></div>
    );
  }
}
export default Balls;
