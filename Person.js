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
    return `Persons name is ${fullName}, they are ${
      this.age
    } years old. Adult: ${this.isAdult()} `;
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }

  isAdult() {
    return this.age >= 18;
  }
}

export default Person;
