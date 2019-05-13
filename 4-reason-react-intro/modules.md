```
module Math = {};
```

```
module Math = {
  let pi = 3.14159;
  let add = (x, y) => x + y;
};

Math.pi;
Math.add(2, 3);
```

```
module School = {
  type profession =
    | Teacher
    | Director;
};

School.Teacher;
```

## Local Open

```
let personOne = School.Teacher;
let greeting =
  School.(
    switch (personOne) {
    | Teacher => "Hello teacher!"
    | Director => "Hello director!"
    }
  );

School.[Teacher, Teacher];
```

```
module Circle = {
  type point = {
    x: float,
    y: float,
  };
};

let center = Circle.{x: 1.2, y: 2.3};
```
