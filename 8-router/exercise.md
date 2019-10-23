## ReasonReact Routing

1. Split your application into a homepage listing the places and a detail page for each of the places. For this exercise use the router shipping with ReasonReact https://reasonml.github.io/reason-react/docs/en/router

2. Optional bonus exercise: Create a Link component that does the redirect using pop state.

## Setup

For this lesson we are switching to the `webpack-dev-server` since we need the `historyApiFallback` so any specific route is serving the `index.html`.

We change:
- index.html
- installed webpack & webpack-cli
- adopted the webpack config:

index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>ReasonReact Examples</title>
    <link
      href="https://fonts.googleapis.com/css?family=Arvo"
      rel="stylesheet"
    />
  </head>
  <body>
    <script src="/bundleOutput/index.js"></script>
  </body>
</html>
```

webpack.config.js
```js
const path = require("path");

module.exports = {
  entry: "./src/Index.bs.js",
  mode: "development",
  output: {
    path: path.join(__dirname, "bundleOutput"),
    filename: "index.js"
  },
  devServer: {
    index: "index.html",
    port: 8000,
    contentBase: __dirname,
    writeToDisk: true, // so contentBase and output.path can be different
    historyApiFallback: true
  }
};
```
