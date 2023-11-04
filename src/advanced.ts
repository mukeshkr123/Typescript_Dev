// Type Alias

// type Employee = {
//   id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "Mukesh",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// Union Types

// function kgToLbs(weigth: number | string) {
//   if (typeof weigth === "number") return weigth * 2.2;
//   else return parseInt(weigth) * 2.2;
// }

// kgToLbs(10);
// kgToLbs("10kg");

//Intersection Types

// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UiWidget = Draggable & Resizable;

// let TexBox: UiWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// literal Types

// type Quatity = 50 | 100;
// type Metric = "cm" | "inch";

// let quantity: Quatity = 100;

// Nullable types
// function greet(name: string | null | undefined) {
//   if (name) console.log(name.toUpperCase());
//   else return console.log("Hola!");
// }

// greet(undefined);

// Optional chaining

// type Customer = {
//   birthday: Date;
// };

// function getCustomer(id: number): Customer | null | undefined {
//   return id === 0 ? null : { birthday: new Date() };
// }

// let cutomer = getCustomer(1);
// // Optional property acess operator
// console.log(cutomer?.birthday);

// The Nullish Coaelscing Operator

// let speed: number | null = null;
// let ride = {
//   // Nullish Coaelscing Operator
//   speed: speed ?? 30,
// };

// Type Assertions

// let phone = document.getElementById("phone") as HTMLInputElement;
// // or
// let phone2 = <HTMLInputElement>document.getElementById("phone2");

// phone.value;

// The unknown Type

// function render(document: unknown) {
//   if (typeof document === "string") {
//     document.toUpperCase();
//   }
// }

// The Never Type

function processEvent(): never {
  while (true) {}
}

processEvent();
console.log("Process event");
