// function Person(name, age, gender) {
//   this.person_name = name;
//   this.age = age;
//   this.gender = gender;
// }

// var x = new Person("rishabh", 23, "Male");

// console.log(x);

class Person {
  constructor(name, age, gender) {
    this.person_name = name;
    this.age = age;
    this.gender = gender;
  }

  sleep() {
    console.log(`${this.person_name} is sleeping`);
  }
}

var x = new Person("rishabh", 23, "Male");
console.log(x);
