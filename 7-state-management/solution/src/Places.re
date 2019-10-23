module Styles = {
  open Css;

  let list =
    style([
      margin(auto),
      maxWidth(px(632)),
      margin3(~top=rem(1.), ~h=auto, ~bottom=zero),
    ]);

  let preview =
    style([
      width(px(632)),
      height(px(280)),
      borderRadius(px(6)),
      marginBottom(rem(1.)),
      boxShadows([
        Shadow.box(
          ~x=px(0),
          ~y=px(2),
          ~blur=px(4),
          ~spread=px(0),
          ~inset=false,
          rgba(0, 0, 0, 0.2),
        ),
        Shadow.box(
          ~x=px(0),
          ~y=px(0),
          ~blur=px(0),
          ~spread=px(2000),
          ~inset=true,
          rgba(255, 255, 255, 0.4),
        ),
      ]),
      backgroundSize(cover),
      backgroundPosition(
        Types.Percentage.pct(50.),
        Types.Percentage.pct(50.),
      ),
      position(relative),
    ]);

  let headline = style([fontSize(rem(1.5))]);

  let link = style([textDecoration(none), color(hex("000"))]);

  let content = style([padding(rem(1.))]);

  let description =
    style([whiteSpace(nowrap), overflow(hidden), textOverflow(ellipsis)]);

  let attribution =
    style([
      display(block),
      fontSize(rem(0.4)),
      color(hex("000")),
      marginTop(rem(2.5)),
    ]);

  let filterInput =
    style([
      fontSize(rem(0.8)),
      boxSizing(borderBox),
      display(block),
      width(px(632)),
      padding2(~v=rem(0.4), ~h=rem(0.4)),
      borderRadius(px(6)),
      margin(auto),
      border(px(1), solid, hex("ccc")),
    ]);
};

[@react.component]
let make = () => {
  let (term, setTerm) = React.useState(() => "");

  let filteredPlaces =
    Data.places->Belt.List.keep(place =>
      term
      ->Js.String.toLowerCase
      ->Js.String.includes(place.name->Js.String.toLowerCase)
    );

  <div>
    <input
      value=term
      placeholder={j|Filter by name …|j}
      onChange={event => setTerm(ReactEvent.Form.target(event)##value)}
      className=Styles.filterInput
    />
    <ul className=Styles.list>
      {filteredPlaces
       ->Belt.List.map(place => {
           let imageUrl = place.image.url;

           <li
             key={place.id}
             className=Styles.preview
             style={ReactDOMRe.Style.make(
               ~backgroundImage={j|url($imageUrl)|j},
               (),
             )}>
             <div className=Styles.content>
               <h2 className=Styles.headline> {React.string(place.name)} </h2>
               <p className=Styles.description>
                 {React.string(place.description)}
               </p>
               {switch (place.image.attributionUrl) {
                | None =>
                  <p className=Styles.attribution>
                    {React.string(place.image.attribution)}
                  </p>
                | Some(url) =>
                  <a href=url className=Styles.attribution>
                    {React.string(place.image.attribution)}
                  </a>
                }}
             </div>
           </li>;
         })
       ->Belt.List.toArray
       ->React.array}
    </ul>
  </div>;
};
