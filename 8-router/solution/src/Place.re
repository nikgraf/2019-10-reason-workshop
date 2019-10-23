module Styles = {
  open Css;

  let wrapper =
    style([
      margin(auto),
      maxWidth(px(632)),
      margin3(~top=rem(1.), ~h=auto, ~bottom=zero),
    ]);

  let nav =
    style([
      textAlign(center),
      display(block),
      margin3(~top=rem(4.), ~h=zero, ~bottom=rem(2.)),
      color(hex("000")),
      fontSize(rem(0.6)),
    ]);

  let headline =
    style([
      textAlign(center),
      margin3(~top=rem(4.), ~h=zero, ~bottom=rem(2.)),
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
      ]),
      backgroundSize(cover),
      backgroundPosition(
        Types.Percentage.pct(50.),
        Types.Percentage.pct(50.),
      ),
      position(relative),
    ]);

  let attribution =
    style([display(block), fontSize(rem(0.5)), color(hex("000"))]);

  let description = style([color(hex("333")), fontSize(rem(0.8))]);
};

[@react.component]
let make = (~place: Data.place) => {
  let imageUrl = place.image.url;

  <div className=Styles.wrapper>
    <a href="/" className=Styles.nav> {React.string("Vienna")} </a>
    <h1 className=Styles.headline> {React.string(place.name)} </h1>
    <div
      className=Styles.preview
      style={ReactDOMRe.Style.make(~backgroundImage={j|url($imageUrl)|j}, ())}
    />
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
    <p> {React.string(place.address)} </p>
    {switch (place.phone) {
     | None => React.null
     | Some(number) => <p> {React.string(number)} </p>
     }}
    {switch (place.email) {
     | None => React.null
     | Some(email) => <p> {React.string(email)} </p>
     }}
    <p className=Styles.description> {React.string(place.description)} </p>
  </div>;
};
