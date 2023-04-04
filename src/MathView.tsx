import React from "react";
import {MathProblem} from "./utils/math";
import {Col, Container, Row} from "react-bootstrap";

export type ProblemProp = {
    math: MathProblem
}

function MathView({math}: ProblemProp) {
    return (
        <div className="d-flex flex-column flex-fill align-items-end m-2 p-2">
            {math.operands.map((t, index) =>
                <div key={index} className="d-flex flex-row px-3">
                    <div className="flex-shrink-1">{(index === (math.operands.length - 1)) ? math.operator : ""}</div>
                    <div className="flex-grow-1">{t}</div>
                </div>)
            }
            <div className="border border-2 border-dark w-100"/>
        </div>
    )
}

export default MathView;