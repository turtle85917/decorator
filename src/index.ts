@ClassDecorator
class TestClass{
  public test():void{
    console.log("Hello, World!");
  }
}

function ClassDecorator(constructor:typeof TestClass):void{
  console.log("Evaluated.");
  constructor.prototype.test();
}

const testClass = new TestClass();
testClass.test();
