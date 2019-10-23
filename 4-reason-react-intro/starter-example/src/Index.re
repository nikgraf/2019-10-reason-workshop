// Entry point

[@bs.val] external document: Js.t({..}) = "document";

let container = document##createElement("div");
document##body##appendChild(container);

ReactDOMRe.render(<Places />, container);
