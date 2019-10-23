## State Management

1. Allow users to filter the places using an input field.

Hint: Docs on how to retrieve `event.target.value` https://reasonml.github.io/reason-react/docs/en/event

Here are some useful input styles:

```re
let filterInput =
  style([
    fontSize(rem(0.8)),
    boxSizing(borderBox),
    display(block),
    width(px(632)),
    padding2(~v=rem(0.4), ~h=rem(0.4)),
    borderRadius(px(6)),
    margin(auto),
    border(px(1), solid, hex("ccc")),
  ]);
```

2. Optional bonus exercise: add tags per place and allow to filter by them.
