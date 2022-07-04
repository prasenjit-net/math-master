import React from "react";

export type NumberRowProps = {
  num: number;
};

export const NumberRow = ({ num }: NumberRowProps) => {
  const numString = num.toString();

  const generateRowMarkup = (str: string) => {
    const m = [];
    for (let i = 0; i < str.length; i++) {
      m.push(
        <div key={i} className="cell">
          {str[i]}
        </div>
      );
    }
    return m;
  };

  return <div className="row">{generateRowMarkup(numString)}</div>;
};
