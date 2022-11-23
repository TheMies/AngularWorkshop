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