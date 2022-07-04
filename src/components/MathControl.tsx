import React from "react";
import { useMathContext } from "../util/MathContext";

export const MathControl = () => {
  const { generate } = useMathContext();
  return (
    <div>
      <button onClick={generate}>Generate</button>
    </div>
  );
};
