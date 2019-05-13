## Belt

```js
let a = Belt.List.add([1], 3);
Js.log(a);
```

```js
let b = Belt.List.get([0, 3, 32], 2);

let c = switch (b) {
  | None => "No entry"
  | Some(value) => "Value is " ++ string_of_int(value)
  };

Js.log(c);
```

https://bucklescript.github.io/docs/en/stdlib-overview

```js
let a = Belt.Array.add([|1|], 3);
Js.log(a);
```

```js
let b = Belt.Array.get([|0, 3, 32|], 2);

let c = switch (b) {
  | None => "No entry"
  | Some(value) => "Value is " ++ string_of_int(value)
  };

Js.log(c);
```

Differences?

## List

- homogeneous
- immutable
- fast at prepending items

```js
let message =
  switch (myList) {
  | [] => "This list is empty"
  | [a, ...rest] => "The head of the list is the string " ++ string_of_int(a)
  };
```

## Arrays

- mutable
- fast at random access & updates
- fix-sized on native (flexibly sized on JavaScript)

## Functions

```js
let plusOne = x => x + 1;

plusOne(3);
```

```js
let add = (x, y) => {
  let z = float_of_int(x);
  y +. z;
};
```

```js
let multiply = (x, y, z) => x * y * z;

multiply(1, 2, 3);
multiply(1)(2)(3);
multiply(1, 2)(3);
multiply(1)(2, 3);
```

```js
let numbers = [4, 11, 5];
let add = (x, y) => x + y;
List.map(x => add(4, x), numbers);
```

```js
let name = (~firstName, ~lastName) => firstName ++ " " ++ lastName;

name(~firstName="Jane", ~lastName="Doe");
name(~lastName="Doe", ~firstName="Jane");
```

```js
let name = (~firstName, ~middleName="Francis", ~lastName) => {
  firstName ++ " " ++ middleName ++ " " ++ lastName;
};

name(~firstName="Jane", ~middleName="Kim", ~lastName="Doe");
// problem ->
name(~firstName="Jane", ~lastName="Doe");
```

```js
let name = (~firstName, ~middleName="Francis", ~lastName, ()) => {
  firstName ++ " " ++ middleName ++ " " ++ lastName;
};

name(~firstName="Jane", ~middleName="Kim", ~lastName="Doe", ());
name(~firstName="Jane", ~lastName="Doe", ());
```

```js
let name = (~lastName, ~middleName=?, ~firstName, ()) => {
  switch (middleName) {
  | Some(value) => firstName ++ " " ++ value ++ " " ++ lastName
  | None => firstName ++ " " ++ lastName
  };
};
```

## Chaining Functions using the pipe Operator in Reason

To demonstrate the pipe or also called reverse-application operator, we are going use an example where we apply multiple functions. The goal is to convert an uppercased text to be lowercased, then capitalized and finally bound to the name info.

We can achieve it using the function lowercase as well as capitalize.

```js
let info = String.capitalize(String.lowercase("ALERT"));
```

With the reverse-application operator we can do this instead.

```js
let info = "ALERT" |> String.lowercase |> String.capitalize;
```

Especially in combination with partial application of arguments this syntax can be quite handy. Here we use sort, reverse and find, to find the largest entry in smaller than 4.

```js
[8, 3, 6, 1] |> List.sort(compare) |> List.rev |> List.find(x => x < 4);
```

https://reasonml.github.io/en/try.html?rrjsx=true&reason=Q

```js
type person = {name: string};
let max = {name: "Max"};

let greet = (person, string) => string ++ person.name;

greet(max, "Hello ");
max->greet("Hello ");

let greet = (string, person) => string ++ person.name;

greet("Hello ", max);
max|>greet("Hello ");
```

```js
type person = {name: string};
let max = {name: "Max"};

let greet = (person, msg, age) => msg ++ person.name ++ string_of_int(age);

greet(max, "Hello ");
print_endline("Foo"->greet(max, _, 2));
```

Show Belt!

```js
let x = [8, 3, 6, 1];

let a = x
    |> List.sort(compare)
    |> List.rev

let b = x
	-> Belt.List.sort((a, b) => a - b)
    -> Belt.List.reverse;
```

Math is an imaginary Lib!

```js
3 |> Math.abs
3 -> Math.abs
```

```js
# 2 / 5
5 |> Math.divide(2)
2 -> Math.divide(5)
```
