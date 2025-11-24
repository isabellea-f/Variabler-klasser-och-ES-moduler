import Person from "./Person.js";

const person1 = new Person(
  "Isabelle",
  "Franzen",
  31,
  true,
  ["gym", "climbing"],
  { role: "student", city: "sundvsall" }
);

const person2 = new Person(
  "Sascha",
  "Bergenås",
  34,
  true,
  ["gaming", "anime"],
  { role: "student", city: "Sundsvall" }
);

const person3 = new Person(
  "Nathalie",
  "Franzén",
  34,
  false,
  ["reading", "cats", "dogs"],
  { role: "healthcare admin", city: "Stockholm" }
);

console.log(person1.getInfo());
console.log(person2.getInfo());
console.log(person3.getInfo());
