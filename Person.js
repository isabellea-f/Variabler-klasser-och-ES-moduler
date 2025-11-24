class Person {
  constructor(firstName, lastName, age, isActive, hobbies, meta) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isActive = isActive;
    this.hobbies = hobbies;
    this.meta = meta;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  getInfo() {
    const fullName = this.getFullName();
    return `My name is ${fullName}, I am ${this.age} years old `;
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }
}

export default Person;
