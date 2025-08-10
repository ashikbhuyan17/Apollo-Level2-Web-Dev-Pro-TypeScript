/*
  Method overriding মানে হচ্ছে —
  যখন child class তার parent class-এর কোনো method-এর একই নাম, return type, এবং parameters রেখে নতুনভাবে সেই method-এর body লিখে দেয়,
  যাতে call করার সময় child class-এর method টি কার্যকর হয়।
*/

class Animal1 {
  makeSound(): void {
    console.log('Some generic animal sound.');
  }
}

class Dog1 extends Animal1 {
  // Parent class method override করা হচ্ছে
  makeSound(): void {
    console.log('Dog barks.');
  }
}

const myDog1 = new Dog1();
myDog1.makeSound(); // Output: Dog barks.

console.log('================================================');

// উদাহরণ ২: super ব্যবহার করে Parent Class-এর Method কল করা and passes the property values
class Animal2 {
  makeSound(): void {
    console.log('Some generic animal sound.');
  }
}

class Dog2 extends Animal2 {
  makeSound(): void {
    // Parent class-এর method ব্যবহার করা
    super.makeSound();
    console.log('Dog barks.');
  }
}

const myDog2 = new Dog2();
console.log('🚀 ~ myDog2:', myDog2);
myDog2.makeSound();
// Output:
// Some generic animal sound.
// Dog barks.

console.log('================================================');

// উদাহরণ ৩: Constructor-সহ Method Overriding

/* 
    age?: number: ? চিহ্ন দিয়ে age-কে optional করা হয়েছে। এর মানে হলো,
    age আর্গুমেন্টটি দেওয়া নাও হতে পারে। যদি দেওয়া না হয়, তাহলে এটি undefined হবে।

 */
class Person {
  // Constructor to initialize the object
  constructor(public name: string, public age?: number) {
    // Optional parameter age, যদি না দেওয়া হয় তাহলে undefined হবে।
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}.`);
    if (this.age !== undefined) {
      console.log(`I am ${this.age} years old.`);
    }
  }
}

class Student extends Person {
  grade: number;

  constructor(name: string, grade: number) {
    super(name); // Parent class constructor কল করা, age পাস করা হচ্ছে না
    this.grade = grade;
  }
}

const student1 = new Student('John', 10);
student1.greet(); // Output: Hello, my name is John.

const student2 = new Person('Jane', 25);
student2.greet(); // Output: Hello, my name is Jane. I am 25 years old.

console.log(
  '================= Access Modifiers ==============================='
);

// উদাহরণ ৪: Access Modifiers সহ Method Overriding
class Vehicle {
  protected startEngine(): void {
    console.log('Engine started.');
  }
}

class Car3 extends Vehicle {
  startEngine(): void {
    console.log('Checking car systems...');
    super.startEngine(); // Parent class-এর method
    console.log('Car engine is now running.');
  }
}

const myCar3 = new Car3();
myCar3.startEngine();
// Output:
// Checking car systems...
// Engine started.
// Car engine is now running.
