'use strict';

var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Data$ReasonReactExamples = require("./Data.bs.js");

function Places(Props) {
  return React.createElement("div", undefined, Belt_List.toArray(Belt_List.map(Data$ReasonReactExamples.places, (function (place) {
                        return React.createElement("li", {
                                    key: place[/* id */0]
                                  }, place[/* name */1]);
                      }))));
}

var make = Places;

exports.make = make;
/* react Not a pure module */
