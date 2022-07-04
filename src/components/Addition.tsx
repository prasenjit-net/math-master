import React from "react";
import { NumberRow } from "./NumberRow";

export type AdditionProps = {
  inputs: number[];
};

export const Addition = ({ inputs }: AdditionProps) => {
  return (
    <div>
      {inputs.map((n, j) => (
        <NumberRow key={j} num={n} />
      ))}
    </div>
  );
};
