'use strict';

var Css = require("bs-css/src/Css.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Css_Types = require("bs-css/src/Css_Types.js");
var Data$ReasonReactExamples = require("./Data.bs.js");

var list = Css.style(/* :: */[
      Css.margin(Css.auto),
      /* :: */[
        Css.maxWidth(Css.px(632)),
        /* :: */[
          Css.margin3(Css.rem(1), Css.auto, Css.zero),
          /* [] */0
        ]
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
                    /* :: */[
                      Css.Shadow.box(Css.px(0), Css.px(0), Css.px(0), Css.px(2000), true, Css.rgba(255, 255, 255, 0.4)),
                      /* [] */0
                    ]
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

var headline = Css.style(/* :: */[
      Css.fontSize(Css.rem(1.5)),
      /* [] */0
    ]);

var link = Css.style(/* :: */[
      Css.textDecoration(Css.none),
      /* :: */[
        Css.color(Css.hex("000")),
        /* [] */0
      ]
    ]);

var content = Css.style(/* :: */[
      Css.padding(Css.rem(1)),
      /* [] */0
    ]);

var description = Css.style(/* :: */[
      Css.whiteSpace(Css.nowrap),
      /* :: */[
        Css.overflow(Css.hidden),
        /* :: */[
          Css.textOverflow(Css.ellipsis),
          /* [] */0
        ]
      ]
    ]);

var attribution = Css.style(/* :: */[
      Css.display(Css.block),
      /* :: */[
        Css.fontSize(Css.rem(0.4)),
        /* :: */[
          Css.color(Css.hex("000")),
          /* :: */[
            Css.marginTop(Css.rem(2.5)),
            /* [] */0
          ]
        ]
      ]
    ]);

var filterInput = Css.style(/* :: */[
      Css.fontSize(Css.rem(0.8)),
      /* :: */[
        Css.boxSizing(Css.borderBox),
        /* :: */[
          Css.display(Css.block),
          /* :: */[
            Css.width(Css.px(632)),
            /* :: */[
              Css.padding2(Css.rem(0.4), Css.rem(0.4)),
              /* :: */[
                Css.borderRadius(Css.px(6)),
                /* :: */[
                  Css.margin(Css.auto),
                  /* :: */[
                    Css.border(Css.px(1), Css.solid, Css.hex("ccc")),
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var Styles = {
  list: list,
  preview: preview,
  headline: headline,
  link: link,
  content: content,
  description: description,
  attribution: attribution,
  filterInput: filterInput
};

function Places(Props) {
  var match = React.useState((function () {
          return "";
        }));
  var setTerm = match[1];
  var term = match[0];
  var filteredPlaces = Belt_List.keep(Data$ReasonReactExamples.places, (function (place) {
          return place[/* name */1].toLowerCase().includes(term.toLowerCase());
        }));
  return React.createElement("div", undefined, React.createElement("input", {
                  className: filterInput,
                  placeholder: "Filter by name …",
                  value: term,
                  onChange: (function ($$event) {
                      return Curry._1(setTerm, $$event.target.value);
                    })
                }), React.createElement("ul", {
                  className: list
                }, Belt_List.toArray(Belt_List.map(filteredPlaces, (function (place) {
                            var imageUrl = place[/* image */3][/* url */0];
                            var id = place[/* id */0];
                            var match = place[/* image */3][/* attributionUrl */2];
                            return React.createElement("li", {
                                        key: place[/* id */0],
                                        className: preview,
                                        style: {
                                          backgroundImage: "url(" + (String(imageUrl) + ")")
                                        }
                                      }, React.createElement("a", {
                                            className: link,
                                            href: "/place/" + (String(id) + "")
                                          }, React.createElement("div", {
                                                className: content
                                              }, React.createElement("h2", {
                                                    className: headline
                                                  }, place[/* name */1]), React.createElement("p", {
                                                    className: description
                                                  }, place[/* description */2]), match !== undefined ? React.createElement("a", {
                                                      className: attribution,
                                                      href: match
                                                    }, place[/* image */3][/* attribution */1]) : React.createElement("p", {
                                                      className: attribution
                                                    }, place[/* image */3][/* attribution */1]))));
                          })))));
}

var make = Places;

exports.Styles = Styles;
exports.make = make;
/* list Not a pure module */
