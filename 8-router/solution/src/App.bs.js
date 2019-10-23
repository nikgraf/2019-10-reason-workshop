'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var Data$ReasonReactExamples = require("./Data.bs.js");
var Place$ReasonReactExamples = require("./Place.bs.js");
var Places$ReasonReactExamples = require("./Places.bs.js");
var NotFound$ReasonReactExamples = require("./NotFound.bs.js");

var headline = Css.style(/* :: */[
      Css.textAlign(Css.center),
      /* :: */[
        Css.margin3(Css.rem(4), Css.zero, Css.rem(2)),
        /* [] */0
      ]
    ]);

var footer = Css.style(/* :: */[
      Css.color(Css.hex("666")),
      /* :: */[
        Css.fontSize(Css.rem(0.6)),
        /* :: */[
          Css.textAlign(Css.center),
          /* :: */[
            Css.margin3(Css.rem(3), Css.zero, Css.rem(2)),
            /* [] */0
          ]
        ]
      ]
    ]);

var Styles = {
  headline: headline,
  footer: footer
};

function parseUrl(url) {
  var match = url[/* path */0];
  if (match) {
    if (match[0] === "place") {
      var match$1 = match[1];
      if (match$1 && !match$1[1]) {
        return /* Place */[match$1[0]];
      } else {
        return /* NotFound */1;
      }
    } else {
      return /* NotFound */1;
    }
  } else {
    return /* Homepage */0;
  }
}

function getPlace(id) {
  return Belt_List.getBy(Data$ReasonReactExamples.places, (function (place) {
                return place[/* id */0] === id;
              }));
}

function App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var route = parseUrl(url);
  var tmp;
  if (typeof route === "number") {
    tmp = route !== 0 ? React.createElement(NotFound$ReasonReactExamples.make, { }) : /* array */[
        React.createElement("h1", {
              className: headline
            }, "Vienna"),
        React.createElement(Places$ReasonReactExamples.make, { })
      ];
  } else {
    var match = getPlace(route[0]);
    tmp = match !== undefined ? React.createElement(Place$ReasonReactExamples.make, {
            place: match
          }) : React.createElement(NotFound$ReasonReactExamples.make, { });
  }
  return React.createElement("div", undefined, tmp, React.createElement("footer", {
                  className: footer
                }, React.createElement("div", undefined, "Made by Nik Graf"), React.createElement("div", undefined, "Design inspired by Marius Hauken")));
}

var make = App;

exports.Styles = Styles;
exports.parseUrl = parseUrl;
exports.getPlace = getPlace;
exports.make = make;
/* headline Not a pure module */
