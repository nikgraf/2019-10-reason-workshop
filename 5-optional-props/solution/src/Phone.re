[@react.component]
let make = (~phone) =>
  <div>
    {switch (phone) {
     | None => <div /> /* return React.null */
     | Some(number) => <div> {React.string(number)} </div>
     }}
  </div>;
