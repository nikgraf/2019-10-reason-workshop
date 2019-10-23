'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Places$ReasonReactExamples = require("./Places.bs.js");

var container = document.createElement("div");

document.body.appendChild(container);

ReactDom.render(React.createElement(Places$ReasonReactExamples.make, { }), container);

exports.container = container;
/* container Not a pure module */
