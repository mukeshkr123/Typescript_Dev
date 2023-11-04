# TypeScript

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

## Summary

- TypeScript extends JavaScript by providing static typing and additional types.
- Avoid using the `any` type when possible, as it undermines the benefits of TypeScript.
- Tuples are used for representing fixed-length arrays with specific types.
- Enums are used to represent a list of related constants.
- Functions can be annotated with parameter and return types.
- Objects can be explicitly typed, and properties can be marked as `readonly` for immutability.

## Compiler Options

Here are some compiler options you can use in your TypeScript configuration (`tsconfig.json`):

- `noImplicitAny`: Warns about variables inferred with the `any` type. Requires explicit annotation when necessary.
- `noImplicitReturns`: Ensures all code paths in a function return a value.
- `noUnusedLocals`: Reports unused local variables.
- `noUnusedParameters`: Reports unused parameters.

By enabling these options, you can catch potential issues and write more maintainable code.
