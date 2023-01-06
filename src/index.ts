const Test = (msg: string): PropertyDecorator => (_, property) => {
  console.log(`${property.toString()} : ${msg}`);
  console.log("Change last-name : test");
}

class Person {
  public sex: string = '';
  public firstName: string = '';
  public lastName: string = '';

  constructor(sex: string, firstName: string, lastName: string) {
    this.sex = sex;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public get fullname(): string {
    return `${this.lastName} ${this.firstName} (${this.sex})`;
  }
  
  @Test("Hi")
  test() {
    this.lastName = "test";
  }
}

const person = new Person("Man", "kim", "Jawon");
console.log(person.fullname);
person.test();
console.log(person.fullname);
