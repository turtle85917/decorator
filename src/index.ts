import "reflect-metadata";

@ClassDecorator
class TestClass{
  @MethodDecorator("Hello, there.")
  public say():void{
    console.log("Hi.");
  };

  public test():void{
    console.log("Hello, World!");
  }

  public d(@ParameterDecorator param:string):void{
    console.log(param);
  }

  @Get("/user")
  public test_():void{
  }
}

function ClassDecorator<T extends {new(...args:any[]):{}}>(constructor:T):T{
  console.log(Reflect.get(constructor.prototype, "path"));
  return class extends constructor{
  };
}

function MethodDecorator(content:string):(...args: any)=>void{
  return (target:any, key:string, descriptor:PropertyDescriptor):void=>{
    descriptor.value = function():void{
      console.log(content);
    };
  };
}

function ParameterDecorator(target:any, key:string, index:number):void{
  console.log(`${key} : ${index}`);
}

function Get(path:string):(...args: any)=>void{
  return (target:any, key:string, descriptor:PropertyDecorator):void=>{
    Reflect.set(target, "path", path);
  }
}

const testClass = new TestClass();
testClass.test();
testClass.say();
testClass.d("Hello.");
