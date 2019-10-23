'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var App$ReasonReactExamples = require("./App.bs.js");
var GlobalStyles$ReasonReactExamples = require("./GlobalStyles.bs.js");

var container = document.createElement("div");

document.body.appendChild(container);

ReactDom.render(React.createElement(App$ReasonReactExamples.make, { }), container);

exports.container = container;
/* container Not a pure module */
