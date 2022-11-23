interface IUser {
  name: string;
  age: number;
  height: number;

  showNameAgeAndHeight(): string;
}

export class User {
  name: string;
  age: number;
  
  constructor(name: string, age: number) {
    console.log("In conctructor of User")
    this.name = name;
    this.age = age;
  }

  sayHi(){
    return this.name + " says 'Hi!'."
  }
}



// export class User implements IUser{
//   name: string;
//   age: number;
//   height: number;
  
//   constructor(name: string, age: number, height: number) {
//     console.log("In conctructor of User")
//     this.name = name;
//     this.age = age;
//     this.height = height;
//   }
//   showNameAgeAndHeight(): string {
//     return `${this.name} is ${this.age} years old and is ${this.height} meters tall.`
//   }

//   sayHi(){
//     return this.name + " says 'Hi!'."
//   }
// }