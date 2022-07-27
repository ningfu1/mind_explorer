export interface Step {
  test: string;
  choices: [
    {
      answer: string;
      point: number;
    }
  ];
}

export interface Store {
  set: [Step];
  results: [number];
}
