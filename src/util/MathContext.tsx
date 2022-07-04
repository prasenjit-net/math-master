import { createContext, useContext, useState } from "react";
import { generateRandomNumber, randomOperation } from "./maths";

const _mathContext = createContext<MathContextType>({} as MathContextType);

export type OpType = "add" | "subtract";

export type MathType = {
  type: OpType;
  inputs: number[];
  result: number | null;
};

export type MathContextType = {
  math: MathType | null;
  generate: () => void;
  check: () => void;
  appendKey: (char: string) => void;
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
  return { type: opType, inputs: inputs, result: null };
}

export const MathContextProvider = ({ children }: MathContextProp) => {
  const [mathData, setMathData] = useState<MathType | null>(null);

  const generate = () => {
    const m = generateRandomMathProblem();
    setMathData(m);
  };

  const check = () => {
    console.log("Checking result...");
  };

  const appendKey = (char: string) => {
    if (mathData && char) {
      let r = 0;
      if (mathData.result) {
        r = mathData.result;
      }
      const newNum = parseInt(char[0]);
      if (newNum) {
        r = r * 10 + newNum;
        setMathData({ ...mathData, result: r });
      }
    }
  };

  return (
    <_mathContext.Provider
      value={{ math: mathData, generate, appendKey, check }}
    >
      {children}
    </_mathContext.Provider>
  );
};

export const useMathContext = () => {
  return useContext(_mathContext);
};
