type MyType = {
  property1: string;
};

enum MyEnum {
  enumOne = "enumOne",
  enumTwo = "enumTwo",
}

type MyTypeTwo = {
  property2: boolean;
  property3: MyEnum;
} & MyType;

const myFunction1 = async (input: MyTypeTwo): Promise<MyTypeTwo> => {
  return input;
};

myFunction1({
  property1: "Hector",
  property2: false,
  property3: MyEnum.enumOne,
});

Object.values(MyEnum).map;

interface MyInterface {
  property1?: string;
  property2: number;
  property3: boolean;
}

interface MyInterfaceThree {
  property5?: boolean;
}

interface MyInterfaceTwo extends MyInterface, MyInterfaceThree {
  property4: string;
}

const myFunction = async (input: MyInterface): Promise<MyInterface> => {
  return input;
};
