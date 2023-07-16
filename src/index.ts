@ClassDecorator
class TestClass{
  @Method("Hello, there.")
  public say():void{
    console.log("Hi.");
  };

  public test():void{
    console.log("Hello, World!");
  }
}

function ClassDecorator<T extends {new(...args:any[]):{}}>(constructor:T):T{
  return class extends constructor{
    // ...
  };
}

function Method(content:string):MethodDecorator{
  return (target:any, key:string|symbol, descriptor:PropertyDescriptor):void=>{
    descriptor.value = function():void{
      console.log(content);
    };
  };
}

const testClass = new TestClass();
testClass.test();
testClass.say();
