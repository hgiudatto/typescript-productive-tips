interface MyInterfaceUtility {
  property1: string;
  property2?: number;
  property3?: boolean;
}

const obj: Partial<MyInterfaceUtility> = {
  property1: "Achilles",
  property2: 30,
  property3: true,
};

const objTwo: Omit<MyInterfaceUtility, "property3" | "property2"> = {
  property1: "Hector",
};
