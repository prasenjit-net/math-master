import React from "react";
import { NumberRow } from "./NumberRow";

export type AdditionProps = {
  inputs: number[];
  result: number | null;
};

export const Addition = ({ inputs, result }: AdditionProps) => {
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
