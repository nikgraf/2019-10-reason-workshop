'use strict';

var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Data$ReasonReactExamples = require("./Data.bs.js");
var Phone$ReasonReactExamples = require("./Phone.bs.js");

function Places(Props) {
  return React.createElement("div", undefined, Belt_List.toArray(Belt_List.map(Data$ReasonReactExamples.places, (function (place) {
                        var match = place[/* image */3][/* attributionUrl */2];
                        return React.createElement("li", {
                                    key: place[/* id */0]
                                  }, React.createElement("div", undefined, place[/* name */1]), React.createElement("img", {
                                        alt: place[/* name */1],
                                        src: place[/* image */3][/* url */0]
                                      }), match !== undefined ? React.createElement("a", {
                                          href: match
                                        }, place[/* image */3][/* attribution */1]) : React.createElement("p", undefined, place[/* image */3][/* attribution */1]), React.createElement(Phone$ReasonReactExamples.make, {
                                        phone: place[/* phone */4]
                                      }));
                      }))));
}

var make = Places;

exports.make = make;
/* react Not a pure module */
