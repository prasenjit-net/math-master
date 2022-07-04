import React from "react";
import { useMathContext } from "../util/MathContext";
import { Addition } from "./Addition";
import { Subtraction } from "./Subtraction";

export const MathBody = () => {
  const mathContext = useMathContext();
  if (!mathContext.math) return <div></div>;
  const { math } = mathContext;
  return (
    <div>
      {math.type === "add" && (
        <Addition inputs={math.inputs} result={math.result} />
      )}
      {math.type === "subtract" && (
        <Subtraction inputs={math.inputs} result={math.result} />
      )}
    </div>
  );
};
