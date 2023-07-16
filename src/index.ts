@ClassDecorator
class TestClass{
  @MethodDecorator
  public deco():void{
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

function MethodDecorator(target:TestClass, key:string, descriptor:PropertyDescriptor):void{
  descriptor.value = function(){
    console.log("Hmm...");
  };
}

const testClass = new TestClass();
testClass.test();
testClass.deco();
