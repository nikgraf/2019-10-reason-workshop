'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");

var headline = Css.style(/* :: */[
      Css.textAlign(Css.center),
      /* :: */[
        Css.margin3(Css.rem(4), Css.zero, Css.rem(2)),
        /* [] */0
      ]
    ]);

var Styles = {
  headline: headline
};

function NotFound(Props) {
  return React.createElement("div", undefined, React.createElement("h1", {
                  className: headline
                }, "Sorry, couldn't find this page."));
}

var make = NotFound;

exports.Styles = Styles;
exports.make = make;
/* headline Not a pure module */
