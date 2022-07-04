import React, { useCallback, useEffect } from "react";
import { useMathContext } from "../util/MathContext";

export const KeyboardHandler = () => {
  const { appendKey } = useMathContext();
  const handleKeyPress = useCallback(
    (ev: KeyboardEvent) => {
      if (parseInt(ev.key)) {
        appendKey(ev.key);
      }
    },
    [appendKey]
  );

  useEffect(() => {
    document.addEventListener("keyup", handleKeyPress);
    return () => {
      document.removeEventListener("keyup", handleKeyPress);
    };
  }, [handleKeyPress]);
  return <div></div>;
};
