export interface Step {
  test: string;
  choices: [
    {
      answer: string;
      point: number;
    }
  ];
}

export interface sentTest {
  test: string;
  choices?: string[];
  result?: string;
}

export interface Store {
  set: [Step];
  results: [number];
}
