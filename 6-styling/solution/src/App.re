module Styles = {
  open Css;

  let headline =
    style([
      textAlign(center),
      margin3(~top=rem(4.), ~h=zero, ~bottom=rem(2.)),
    ]);

  let footer =
    style([
      color(hex("666")),
      fontSize(rem(0.6)),
      textAlign(center),
      margin3(~top=rem(3.), ~h=zero, ~bottom=rem(2.)),
    ]);
};

[@react.component]
let make = () =>
  <div>
    <h1 className=Styles.headline> {React.string("Vienna")} </h1>
    <Places />
    <footer className=Styles.footer>
      <div> {React.string("Made by Nik Graf")} </div>
      <div> {React.string("Design inspired by Marius Hauken")} </div>
    </footer>
  </div>;
