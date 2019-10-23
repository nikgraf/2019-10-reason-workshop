'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var Places$ReasonReactExamples = require("./Places.bs.js");

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

function App(Props) {
  return React.createElement("div", undefined, React.createElement("h1", {
                  className: headline
                }, "Vienna"), React.createElement(Places$ReasonReactExamples.make, { }), React.createElement("footer", {
                  className: footer
                }, React.createElement("div", undefined, "Made by Nik Graf"), React.createElement("div", undefined, "Design inspired by Marius Hauken")));
}

var make = App;

exports.Styles = Styles;
exports.make = make;
/* headline Not a pure module */
