'use strict';

var React = require("react");

function Phone(Props) {
  var phone = Props.phone;
  return React.createElement("div", undefined, phone !== undefined ? React.createElement("div", undefined, phone) : React.createElement("div", undefined));
}

var make = Phone;

exports.make = make;
/* react Not a pure module */
