// The any type

// function render(document: any) {
//   console.log(document);
// }

// Array

// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

// Tuples

// let user: [number, string] = [1, "Mosh"];

// Enums

// //pascal Case
// enum Size {
//   Small,
//   Medium,
//   Large,
// }

// let mySize = Size.Medium;

// Functions

// function calculateTax(income: number, taxYear: number): number {
//   if (taxYear < 2022) return income * 1.2;
//   return income * 1.3;
// }

// calculateTax(10_000, 2020);

// objects

// let emplyee: {
//   id: number;
//   name: string;
// } = { id: 1, name: "Mukesh " };

// to prevent it from accidentally modifying

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Mukesh ",
  retire: (date: Date) => {
    console.log(date);
  },
};
