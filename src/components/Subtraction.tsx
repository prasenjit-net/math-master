import React from "react";
import { NumberRow } from "./NumberRow";

export type SubtractionProps = {
  inputs: number[];
  result: number | null;
};

export const Subtraction = ({ inputs, result }: SubtractionProps) => {
  return (
    <div>
      <div>
        {inputs.map((n, j) => (
          <NumberRow key={j} num={n} />
        ))}
      </div>
      <div>
        <NumberRow num={result} />
      </div>
    </div>
  );
};
