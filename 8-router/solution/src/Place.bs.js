'use strict';

var Css = require("bs-css/src/Css.js");
var React = require("react");
var Css_Types = require("bs-css/src/Css_Types.js");

var wrapper = Css.style(/* :: */[
      Css.margin(Css.auto),
      /* :: */[
        Css.maxWidth(Css.px(632)),
        /* :: */[
          Css.margin3(Css.rem(1), Css.auto, Css.zero),
          /* [] */0
        ]
      ]
    ]);

var nav = Css.style(/* :: */[
      Css.textAlign(Css.center),
      /* :: */[
        Css.display(Css.block),
        /* :: */[
          Css.margin3(Css.rem(4), Css.zero, Css.rem(2)),
          /* :: */[
            Css.color(Css.hex("000")),
            /* :: */[
              Css.fontSize(Css.rem(0.6)),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var headline = Css.style(/* :: */[
      Css.textAlign(Css.center),
      /* :: */[
        Css.margin3(Css.rem(4), Css.zero, Css.rem(2)),
        /* [] */0
      ]
    ]);

var preview = Css.style(/* :: */[
      Css.width(Css.px(632)),
      /* :: */[
        Css.height(Css.px(280)),
        /* :: */[
          Css.borderRadius(Css.px(6)),
          /* :: */[
            Css.marginBottom(Css.rem(1)),
            /* :: */[
              Css.boxShadows(/* :: */[
                    Css.Shadow.box(Css.px(0), Css.px(2), Css.px(4), Css.px(0), false, Css.rgba(0, 0, 0, 0.2)),
                    /* [] */0
                  ]),
              /* :: */[
                Css.backgroundSize(Css.cover),
                /* :: */[
                  Css.backgroundPosition(Css_Types.Percentage.pct(50), Css_Types.Percentage.pct(50)),
                  /* :: */[
                    Css.position(Css.relative),
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var attribution = Css.style(/* :: */[
      Css.display(Css.block),
      /* :: */[
        Css.fontSize(Css.rem(0.5)),
        /* :: */[
          Css.color(Css.hex("000")),
          /* [] */0
        ]
      ]
    ]);

var description = Css.style(/* :: */[
      Css.color(Css.hex("333")),
      /* :: */[
        Css.fontSize(Css.rem(0.8)),
        /* [] */0
      ]
    ]);

var Styles = {
  wrapper: wrapper,
  nav: nav,
  headline: headline,
  preview: preview,
  attribution: attribution,
  description: description
};

function Place(Props) {
  var place = Props.place;
  var imageUrl = place[/* image */3][/* url */0];
  var match = place[/* image */3][/* attributionUrl */2];
  var match$1 = place[/* phone */4];
  var match$2 = place[/* email */5];
  return React.createElement("div", {
              className: wrapper
            }, React.createElement("a", {
                  className: nav,
                  href: "/"
                }, "Vienna"), React.createElement("h1", {
                  className: headline
                }, place[/* name */1]), React.createElement("div", {
                  className: preview,
                  style: {
                    backgroundImage: "url(" + (String(imageUrl) + ")")
                  }
                }), match !== undefined ? React.createElement("a", {
                    className: attribution,
                    href: match
                  }, place[/* image */3][/* attribution */1]) : React.createElement("p", {
                    className: attribution
                  }, place[/* image */3][/* attribution */1]), React.createElement("p", undefined, place[/* address */6]), match$1 !== undefined ? React.createElement("p", undefined, match$1) : null, match$2 !== undefined ? React.createElement("p", undefined, match$2) : null, React.createElement("p", {
                  className: description
                }, place[/* description */2]));
}

var make = Place;

exports.Styles = Styles;
exports.make = make;
/* wrapper Not a pure module */
