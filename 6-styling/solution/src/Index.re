// Entry point

include GlobalStyles;

[@bs.val] external document: Js.t({..}) = "document";

let container = document##createElement("div");
document##body##appendChild(container);

ReactDOMRe.render(<App />, container);
