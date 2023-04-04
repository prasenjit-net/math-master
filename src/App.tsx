import React, {useState} from 'react';
import './App.css';
import MathView from "./MathView";
import FormComponent, {MathConfig} from "./MathGenerationConfig";
import {generateMathProblem, MathProblem} from "./utils/math";
import {Container} from "react-bootstrap";

function App() {
    const [maths, setMaths] = useState<MathProblem[]>([]);

    const formSubmit = (formData: MathConfig) => {
        console.table(formData);
        const ms: MathProblem[] = [];
        for (let i = 0; i < formData.count; i++) {
            let mathProblem = generateMathProblem(formData.complexity);
            ms.push(mathProblem);
        }
        console.table(ms);
        setMaths(ms);
    };
    return (
        <Container>
            <FormComponent onSubmit={formSubmit}/>
            <div
                className="letter-spacing-1 d-flex flex-row font-monospace lh-base fs-2 vh-100 align-items-baseline flex-wrap">
                {maths.map((m, i) => (<MathView math={m} key={i}/>))}
            </div>
        </Container>
    );
}

export default App;
