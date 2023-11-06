# TypeScript Documentation

1. [Getting Started with TypeScript](#getting-started-with-typescript)

   - [Benefits of TypeScript](#benefits-of-typescript)
   - [Setting Up the Environment](#setting-up-the-environment)
   - [Configuring the TypeScript Compiler](#configuring-the-typescript-compiler)

2. [Fundamentals](#fundamentals)

   - [Built-in Types](#built-in-types)
   - [The Any Type](#the-any-type)
   - [Arrays](#arrays)
   - [Tuples](#tuples)
   - [Enums](#enums)
   - [Functions](#functions)
   - [Objects](#objects) -[Compiler Options](#compiler-options)

3. [TypeScript Advanced Types](#typescript-advanced-types)

   - [Type Aliases](#type-aliases)
   - [Union Types](#union-types)
   - [Intersection Types](#intersection-types)
   - [Literal Types](#literal-types)
   - [Nullable Types](#nullable-types)
   - [Optional Chaining](#optional-chaining)
   - [The Nullish Coalescing Operator](#the-nullish-coalescing-operator)
   - [Type Assertions](#type-assertions)
   - [The Unknown Type](#the-unknown-type)
   - [The Never Type](#the-never-type)

4. [Node with TypeScript](#node-with-typescript)
   - [Executing TypeScript Code with Node](#executing-typescript-code-with-node)
   - [Setting up an Express Project](#setting-up-an-express-project)
   - [Creating Basic Routes](#creating-basic-routes)
   - [Creating a Router](#creating-a-router)
   - [Parsing Request Bodies](#parsing-request-bodies)
   - [Building an API](#building-an-api)

## Getting Started with TypeScript

TypeScript is a programming language designed to address the shortcomings of JavaScript by introducing static typing, code completion, refactoring, and shorthand notations. In this guide, we'll walk you through setting up the environment for TypeScript and configuring the TypeScript compiler.

### Benefits of TypeScript

- **Static Typing:** TypeScript provides static type checking, which helps catch type-related errors at compile time.
- **Code Completion:** Enjoy enhanced code completion and IntelliSense in your favorite code editor.
- **Refactoring:** Refactor your code more confidently, thanks to type information.
- **Shorthand Notations:** TypeScript allows you to write more concise and readable code.

### Setting Up the Environment

To get started with TypeScript, follow these steps:

1. Install TypeScript globally using npm:

   ```bash
   npm i -g typescript
   ```

2. Create a TypeScript file, e.g., `filename.ts`.

3. Compile your TypeScript code to JavaScript using the TypeScript compiler:

   ```bash
   npx tsc filename.ts
   ```

### Configuring the TypeScript Compiler

To configure the TypeScript compiler according to your project's needs, you can generate a `tsconfig.json` file:

1. Run the following command to initialize a `tsconfig.json` file:

   ```bash
   npx tsc --init
   ```

2. Open the generated `tsconfig.json` file and customize it to enable or disable various compiler settings based on your project requirements.

## Fundamentals

### Built-in Types

**JavaScript**

- `number`
- `string`
- `boolean`
- `null`
- `undefined`
- `object`

**TypeScript**

- `any`
- `unknown`
- `never`
- `enum`
- `tuple`

### The `any` Type

The `any` type in TypeScript allows a variable to represent any kind of value. It should be used sparingly because it undermines the benefits of using TypeScript.

```ts
function render(document: any) {
  console.log(document);
}
```

### Arrays

You can define arrays with specific element types:

```ts
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
```

### Tuples

Tuples are fixed-length arrays where each element has a specific type:

```ts
let user: [number, string] = [1, "Mosh"];
```

### Enums

Enums represent a list of related constants. They follow PascalCase naming convention:

```ts
enum Size {
  Small,
  Medium,
  Large,
}

let mySize = Size.Medium;
```

### Functions

Functions in TypeScript can be annotated with their parameter and return types:

```ts
function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000, 2020);
```

### Objects

You can specify the structure of objects with explicit type annotations:

```ts
let employee: {
  id: number;
  name: string;
} = { id: 1, name: "Mukesh" };
```

To prevent accidental modification of object properties, you can use the `readonly` modifier:

```ts
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Mukesh",
  retire: (date: Date) => {
    console.log(date);
  },
};
```

### Summary

- TypeScript extends JavaScript by providing static typing and additional types.
- Avoid using the `any` type when possible, as it undermines the benefits of TypeScript.
- Tuples are used for representing fixed-length arrays with specific types.
- Enums are used to represent a list of related constants.
- Functions can be annotated with parameter and return types.
- Objects can be explicitly typed, and properties can be marked as `readonly` for immutability.

### Compiler Options

Here are some compiler options you can use in your TypeScript configuration (`tsconfig.json`):

- `noImplicitAny`: Warns about variables inferred with the `any` type. Requires explicit annotation when necessary.
- `noImplicitReturns`: Ensures all code paths in a function return a value.
- `noUnusedLocals`: Reports unused local variables.
- `noUnusedParameters`: Reports unused parameters.

By enabling these options, you can catch potential issues and write more maintainable code.

## TypeScript Advanced Types

In TypeScript, you have access to various advanced types that allow you to create custom type aliases, handle different scenarios, and enhance the type safety of your code. This README provides an overview of advanced TypeScript types.

### Type Aliases

Type aliases allow you to create custom names for types, making your code more readable and maintainable. For example:

```ts
type Employee = {
  id: number;
  name: string;
  retire: (date: Date) => void;
};
```

### Union Types

Union types enable a variable to accept one of multiple types. It's useful for scenarios where a variable can have different data types:

```ts
function kgToLbs(weight: number | string) {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}
```

### Intersection Types

Intersection types allow you to combine multiple types into one. This can be particularly useful when you want to create complex types by merging multiple simpler types:

```ts
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UiWidget = Draggable & Resizable;
```

### Literal Types

Literal types enable you to specify that a variable must have a specific, exact value:

```ts
type Quantity = 50 | 100;
type Metric = "cm" | "inch";
```

### Nullable Types

Nullable types handle scenarios where variables can have values or be null or undefined:

```ts
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else return console.log("Hola!");
}
```

### Optional Chaining

Optional chaining simplifies your code and removes the need for null checks when accessing properties of potentially null or undefined objects:

```ts
customer?.birthdate?.getFullYear();
customers?.[0];
log?.("message");
```

### The Nullish Coalescing Operator

The Nullish Coalescing Operator (`??`) allows you to provide a default value when dealing with null or undefined objects:

```ts
let speed: number | null = null;
let ride = {
  speed: speed ?? 30,
};
```

### Type Assertions

Type assertions are used when you know more about the type of a variable than TypeScript does. They specify a different type than the one inferred by the compiler:

```ts
let phone = document.getElementById("phone") as HTMLInputElement;
// or
let phone2 = <HTMLInputElement>document.getElementById("phone2");
```

## The Unknown Type

The `unknown` type is a type-safe version of `any`. It can represent any value but requires narrowing down to a specific type before performing operations on it:

```ts
function render(document: unknown) {
  if (typeof document === "string") {
    // Narrow down to a specific type before operations
  }
}
```

### The Never Type

The `never` type represents values that never occur. It is often used to annotate functions that never return or always throw an error:

```ts
function processEvent(): never {
  while (true) {}
}
```

### Compiler Options

When working with TypeScript, you can configure various compiler options in your `tsconfig.json` file to enforce strict type checking and code quality. Some of these options are:

- `strictNullChecks`: Ensures null and undefined are not acceptable values for variables unless explicitly declared as nullable.
- `allowUnreachableCode`: Reports errors about unreachable code.

These options can help improve code quality and maintainability.

## Node with TypeScript

### Executing TypeScript Code with Node

1. Initialize a new npm project:

   ```bash
   npm init -y
   ```

2. Install `ts-node` as a development dependency:

   ```bash
   npm i -D ts-node
   ```

3. Add a `start` script to your `package.json`:
   ```json
   "scripts": {
       "start": "ts-node index.ts"
   }
   ```

### Setting up an Express Project

To set up an Express project with TypeScript:

1. Install Express and TypeScript dependencies:

   ```bash
   npm i express
   npm i -D typescript @types/node @types/express
   ```

2. Create a TypeScript configuration file:

   ```bash
   npx tsc --init
   ```

3. Install `ts-node` globally:

   ```bash
   npm install -g ts-node
   ```

4. Create an Express server in your `index.ts` file:

   ```typescript
   import express from "express";
   const app = express();
   app.listen(8000, () => console.log("Server started on port 8000"));
   ```

5. Install Nodemon as a development dependency:

   ```bash
   npm i nodemon -D
   ```

6. Configure Nodemon in your `package.json` by adding a script:
   ```json
   "scripts": {
       "start": "nodemon index.ts"
   }
   ```

### Creating Basic Routes

To create a basic route in your Express application, use the following code in your `index.ts`:

```typescript
import express from "express";
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});
```

### Creating a Router

You can create a router for your Express application as follows:

```typescript
import { Router } from "express";
const router = Router();

// Define a route for the router
router.get("/", (req, res) => {
  res.send("List of reminders");
});

export default router;
```

### Parsing Request Bodies

To parse request bodies in your Express application, use the `express.json()` middleware and create an interface for your request data:

```typescript
app.use(express.json());

interface CreateReminderDto {
  title: string;
}

app.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;
  res.json(title);
});
```

You can also store the `CreateReminderDto` interface in a separate folder for better organization and reusability.

### Building an API

Create a `Remainder` class to represent reminders:

```typescript
export default class Remainder {
  id: number;
  isComplete: boolean;

  constructor(public title: string) {
    this.id = Date.now();
    this.isComplete = false;
  }
}
```

Then, create an API for managing reminders:

```typescript
import Remainder from "./remainder/remainder";

const remainders: Remainder[] = [];

interface CreateReminderDto {
  title: string;
}

app.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const remainder = new Remainder(title);
  remainders.push(remainder);
  res.status(201).json(remainder);
});
```

## Object-Oriented Programming with TypeScript - Classes and Interfaces

### Classes and Constructors

In TypeScript, classes are used to create blueprints for objects. They contain properties and methods that define the structure and behavior of objects. Constructors are special methods within a class used to initialize object properties.

```ts
class Account {
  id: number;
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }
}
```

### Creating Objects

You can create objects from a class using the `new` keyword:

```ts
let account = new Account(1, "Mosh", 0);
account.deposit(100);
console.log(account);
```

### Read-Only Properties

To make a property read-only, you can use the `readonly` keyword:

```ts
readonly id: number;
```

### Access Modifiers

Access modifiers (`public`, `private`, `protected`) control access to properties and methods in a class.

### Parameter Properties

Parameter properties allow you to create and initialize properties in one place within the constructor:

```ts
constructor(public id: number, private balance: number) {
}
```

### Getters and Setters

You can use getters and setters to control access and validation of properties:

```ts
private _balance = 0;
get balance(): number {
  return this._balance;
}
set balance(value: number) {
  if (value < 0)
    throw new Error();
  this._balance = value;
}
```

### Static Members

Static members belong to the class itself, rather than instances of the class:

```ts
class Ride {
  static activeRides = 0;
}
Ride.activeRides++;
```

### Inheritance

Classes can inherit and reuse members from another class. The parent class is known as the base class, while the inheriting class is the derived class.

### Method Overriding

You can override methods in derived classes to provide a different implementation:

```ts
class Student extends Person {
  override speak() {
    console.log("Student speaking");
  }
}
```

### Abstract Classes and Methods

Abstract classes have partial implementations and cannot be instantiated. They are used as a blueprint for derived classes. Abstract methods don't have a body and must be implemented in derived classes.

### Interfaces

Interfaces define the shape of objects, specifying properties and methods that must be implemented by classes that implement the interface.

```ts
interface Calendar {
  name: string;
  addEvent(): void;
}
```

### Compiler Options

The `noImplicitOverride` compiler option helps catch errors when attempting to override a method without using the `override` keyword.

## React With TypeScript

### Creating a Component

-create component using typescript

```tsx
interface Reminder {
  id: number;
  title: string;
}

interface ReminderListProps {
  items: Reminder[];
}

const ReminderList = ({ items }: ReminderListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default ReminderList;
```

- passing the props

```tsx
const reminders = [
  { id: 1, title: "Reminder 1" },
  { id: 2, title: "Reminder 2" },
];

function App() {
  return (
    <div>
      <ReminderList items={reminders} />
    </div>
  );
}
```

### Using the State Hook

````tsx
function App() {
  const [reminders, setRemainders] = useState<Reminder[]>([
    {
      id: 1,
      title: "Reminder 1",
    },
  ]);
  return (
    <div>
      <ReminderList items={reminders} />
    </div>
  );
}```
````

### Calling the Backend

```tsx
import axios from "axios";
import { Reminder } from "../components/ReminderList";

class ReminderService {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });

  async getReminders() {
    const response = this.http.get<Reminder[]>("/todos");
    return (await response).data;
  }

  async addReminder(titles: string) {
    const response = await this.http.post("/todos", {
      title: titles,
    });
    return response.data;
  }

  async removeReminder(id: number) {
    const response = await this.http.delete(`/todos/${id}`);
    return response.data;
  }
}

export default new ReminderService();
```

### Using UseEffect

```tsx
import reminderService from "./services/reminder";

function App() {
  const [reminders, setRemainders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setRemainders(reminders);
  };
  return (
    <div>
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
```
