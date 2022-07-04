import React from "react";
import { useMathContext } from "../util/MathContext";

export const MathControl = () => {
  const { generate, check } = useMathContext();
  return (
    <div>
      <button onClick={generate}>Generate</button>
      <button onClick={check}>Check</button>
    </div>
  );
};
