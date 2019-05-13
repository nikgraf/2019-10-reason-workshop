[@react.component]
let make = () =>
  <div>
    {Data.places
     ->Belt.List.map(place =>
         <li key={place.id}> {React.string(place.name)} </li>
       )
     ->Belt.List.toArray
     ->React.array}
  </div> /*    )*/;

// {React.array(
//    Belt.List.toArray(
//      Belt.List.map(Data.places, place =>
//        <li key={place.id}> {React.string(place.name)} </li>
//      ),
