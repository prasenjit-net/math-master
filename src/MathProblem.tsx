import React from "react";

export type ProblemProp = {
    op: number[]
}

function MathProblem({op}: ProblemProp) {
    return (
        <div className="p-4 m-4 flex flex-col">
            <div className="flex flex-row">
                <div className="flex flex-col-reverse">
                    <div className="p-2">+</div>
                </div>
                <div className="flex flex-col">
                    {op.map((t, index) => <div key={index} className="p-2 text-right">{t}</div>)}
                </div>
            </div>
            <div className="border-2 border-black"></div>
            <div>&nbsp;</div>
        </div>
    )
}

export default MathProblem;