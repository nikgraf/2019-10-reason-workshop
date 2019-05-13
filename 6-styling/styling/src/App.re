module Styles = {
  open Emotion;

  let headline = [%css
    [textAlign(`center), margin3(`rem(4.), `zero, `rem(2.))]
  ];

  let footer = [%css
    [
      color(`hex("666")),
      fontSize(`rem(0.6)),
      textAlign(`center),
      margin3(`rem(3.), `zero, `rem(2.)),
    ]
  ];
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
