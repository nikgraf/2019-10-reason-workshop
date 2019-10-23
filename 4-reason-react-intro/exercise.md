## ReasonReact Intro

1. Setup the editor -> https://reasonml.github.io/docs/en/editor-plugins

2. Create a new ReasonReact BuckleScript project -> https://reasonml.github.io/reason-react/docs/en/installation

```
npm install -g bs-platform
bsb -init my-react-app -theme react-hooks
cd my-react-app && npm install && npm start
# in another tab
npm run server
```

3. Add your Data.re file

4. Render a list of the place names using <li> tags. Use the `place.id`. Get inspired by the following hints:

```
["Vienna", "London", "Paris"]
    ->Belt.List.map(city => React.string(city))
    ->Belt.List.toArray
    ->React.array
```

```
[|"Vienna", "London", "Paris"|]
    ->Belt.List.map(city => React.string(city))
    ->React.array
```

5. Optional bonus exercise: Render other place properties
