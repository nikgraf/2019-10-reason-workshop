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

type route =
  | Homepage
  | Place(string)
  | NotFound;

let parseUrl = (url: ReasonReactRouter.url) => {
  switch (url.path) {
  | [] => Homepage
  | ["place", id] => Place(id)
  | _ => NotFound
  };
};

let getPlace = id => {
  Data.places->Belt.List.getBy(place => place.id == id);
};

[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();
  let route = parseUrl(url);

  <div>
    {switch (route) {
     | Homepage =>
       [|
         <h1 className=Styles.headline> {React.string("Vienna")} </h1>,
         <Places />,
       |]
       ->ReasonReact.array
     | NotFound => <NotFound />
     | Place(id) =>
       switch (getPlace(id)) {
       | None => <NotFound />
       | Some(place) => <Place place />
       }
     }}
    <footer className=Styles.footer>
      <div> {React.string("Made by Nik Graf")} </div>
      <div> {React.string("Design inspired by Marius Hauken")} </div>
    </footer>
  </div>;
};
