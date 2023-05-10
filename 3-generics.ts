const myFunc = <T>(input: T): T => {
  return input;
};

const result = myFunc<{
  name: string;
}>({ name: "Hec" });

const resultTwo = myFunc<string[]>(["Hec"]);
