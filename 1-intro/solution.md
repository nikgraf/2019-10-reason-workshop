```
type color = Black | White;

type kind = Queen | King | Rook | Bishop | Knight | Pawn;

type piece = {
  color,
  kind,
  position: (int, int),
};

let pieces = [
  {kind: King, color: Black, position: (3, 4)},
  {kind: Pawn, color: Black, position: (4, 2)},
  {kind: Knight, color: White, position: (3, 3)},
];
```

## Alternate

```
position: A1 | A2 …
```

```
position: [3, 2]
```

```
type position: {
  x: int,
  y: int
}

position: position
```

```
type position // custom

position: position
```

# Pro version

```js
module type ChessPositionType = {
  type t;

  let make: (~x: int, ~y: int) => t;
};

module ChessPosition: ChessPositionType = {
  type t = (int, int);
  let normalize = x =>
    if (x < 0) {
      0;
    } else if (x > 7) {
      7;
    } else {
      x;
    };
  let make = (~x, ~y) => {
    (normalize(x), normalize(y));
  };
};

type color =
  | Black
  | White;

type kind =
  | Queen
  | King
  | Rook
  | Bishop
  | Knight
  | Pawn;

type piece = {
  color,
  kind,
  position: ChessPosition.t,
};

let pieces = [
  {kind: King, color: Black, position: ChessPosition.make(~x=3, ~y=4)},
  {kind: Pawn, color: Black, position: ChessPosition.make(~x=4, ~y=2)},
  {kind: Knight, color: White, position: ChessPosition.make(~x=3, ~y=3)},
];
```
