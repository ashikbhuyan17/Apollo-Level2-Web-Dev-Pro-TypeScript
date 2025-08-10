/*

Inheritance কী?
Inheritance হলো OOP-এর একটি প্রক্রিয়া, যেখানে একটি child class parent class-এর properties ও methods উত্তরাধিকারসূত্রে পেয়ে সেগুলো ব্যবহার  করতে পারে।

Parent Class: যে ক্লাস থেকে উত্তরাধিকার নেওয়া হয়।
Child Class: যে ক্লাস parent class-এর বৈশিষ্ট্য উত্তরাধিকারসূত্রে পায়

extends কীওয়ার্ড: Inheritance বাস্তবায়নের জন্য ব্যবহৃত হয়।
Constructor: Parent class-এর constructor কল করার জন্য super() ব্যবহার হয়।
Access Modifiers: Properties এবং methods-এর visibility নিয়ন্ত্রণ করা যায়।
Method Overriding: Parent-এর মেথড পরিবর্তন বা নতুনভাবে ব্যবহার করা যায়।
Interface: Structure define করে এবং inheritance সমর্থন করে।


*/

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat(): void {
    console.log(`${this.name} is eating.`);
  }
}
class Dog extends Animal {
  makeSound() {
    throw new Error('Method not implemented.');
  }
  bark(): void {
    console.log(`${this.name} is barking.`);
  }
}

const myDog = new Dog('Buddy');
myDog.eat(); // Parent class-এর method ব্যবহার করা
myDog.bark(); // Child class-এর method ব্যবহার করা
