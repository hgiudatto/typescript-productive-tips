interface Input {
    name: string
}

const basicFunction = (props: Input) => {
  return props;
};

basicFunction({ name: "Hec" });
