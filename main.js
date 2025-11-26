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

const person4 = new Person(
  "Jane",
  "Doe",
  10,
  false,
  ["playing", "singing", "drawing"],
  { role: "student", city: "Eskilstuna" }
);

const output = document.querySelector("#output");
const activeAdult = document.querySelector("#active-adult");

const people = [person1, person2, person3, person4];
output.textContent = people.map((person) => person.getInfo()).join("\n");

let activeAdults = [];

for (const person of people) {
  if (person.isAdult() && person.isActive) {
    activeAdults.push(person);
  }
}

activeAdult.textContent = activeAdults
  .map((person) => person.getInfo())
  .join("\n");

const roleOutput = document.querySelector("#role-output");

function checkRole(role) {
  let studentArr = [];

  for (const person of people) {
    if (person.meta.role === role) {
      studentArr.push(person);
    }
  }

  const studentText = studentArr.map((person) => person.getInfo()).join("\n");

  return studentText;
}

roleOutput.textContent = checkRole("student");
