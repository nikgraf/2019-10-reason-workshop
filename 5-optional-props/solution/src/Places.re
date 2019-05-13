[@react.component]
let make = () =>
  <div>
    {Data.places
     ->Belt.List.map(place =>
         <li key={place.id}>
           <div> {React.string(place.name)} </div>
           <img src={place.image.url} alt={place.name} />
           {switch (place.image.attributionUrl) {
            | None => <p> {React.string(place.image.attribution)} </p>
            | Some(url) =>
              <a href=url> {React.string(place.image.attribution)} </a>
            }}
           <Phone phone={place.phone} />
         </li>
       )
     ->Belt.List.toArray
     ->React.array}
  </div>;
