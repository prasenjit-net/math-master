import React from "react";
import { NumberRow } from "./NumberRow";

export type SubtractionProps = {
  inputs: number[];
};

export const Subtraction = ({ inputs }: SubtractionProps) => {
  return (
    <div>
      {inputs.map((n, j) => (
        <NumberRow key={j} num={n} />
      ))}
    </div>
  );
};
