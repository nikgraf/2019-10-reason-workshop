module Styles = {
  open Css;

  let headline =
    style([
      textAlign(center),
      margin3(~top=rem(4.), ~h=zero, ~bottom=rem(2.)),
    ]);
};

[@react.component]
let make = () =>
  <div>
    <h1 className=Styles.headline>
      {React.string("Sorry, couldn't find this page.")}
    </h1>
  </div>;
