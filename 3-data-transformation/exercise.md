## Data transformation

1. Create an Array of all the names from your list of places. Print out the names in the end using the console. **Hint**: use `Js.log`.

First use only function calls (like in JavaScript) and then use the pipe first operator to chain the function calls. https://reasonml.github.io/docs/en/pipe-first. When using pipe first please use `Belt.List` or `Belt.Array`.
You should end up with the same result, but in a more readable manner.

Find the documentation here: https://bucklescript.github.io/bucklescript/api/Belt.List.html & https://bucklescript.github.io/bucklescript/api/Belt.Array.html

2. Optional pro lesson: Create a search function. It accepts a list of places and a search term and will find all the items based on this term. For simplicity the function should only check against the place name. For an empty string it returns all entries. **Hint**: Use `Js.String.includes`.

To make sure the lower/upper case is ignored you can use `Js.String.toLowerCase`.
