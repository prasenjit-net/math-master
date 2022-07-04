import { createContext, useContext, useState } from "react";
import { generateRandomNumber, randomOperation } from "./maths";

const _mathContext = createContext<MathContextType>({} as MathContextType);

export type OpType = "add" | "subtract";

export type MathType = {
  type: OpType;
  inputs: number[];
};

export type MathContextType = {
  math: MathType | null;
  generate: () => void;
};
export type MathContextProp = {
  children: JSX.Element;
};

function generateRandomMathProblem(): MathType {
  const opType = randomOperation() as OpType;
  const inputs = [];
  inputs.push(generateRandomNumber(4));
  inputs.push(generateRandomNumber(4));
  inputs.push(generateRandomNumber(4));
  return { type: opType, inputs: inputs };
}

export const MathContextProvider = ({ children }: MathContextProp) => {
  const [mathData, setMathData] = useState<MathType | null>(null);

  const generate = () => {
    const m = generateRandomMathProblem();
    setMathData(m);
    console.log("generating...", m);
  };

  return (
    <_mathContext.Provider value={{ math: mathData, generate: generate }}>
      {children}
    </_mathContext.Provider>
  );
};

export const useMathContext = () => {
  return useContext(_mathContext);
};
