## Optional Props

1. Render the image of each place. Depending on if the attributionUrl is available either render a Link or just the text.

Hint:

```
switch (phone) {
  | None => <div />
  | Some(number) => <div> {React.string(number)} </div>
}
```

2. Render the phone (which is not always in the list)

3. Optional bonus exercise: Extract Phone to be a separate component and pass phone data as a prop
