import React, {useState} from 'react';
import './App.css';
import MathView from "./MathView";
import FormComponent, {MathConfig} from "./MathGenerationConfig";
import {generateMathProblem, MathProblem} from "./utils/math";

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
        <div className="font-mono">
            <FormComponent onSubmit={formSubmit}/>
            <div className="flex flex-row flex-wrap border-2 border-gray-500 m-6 text-3xl">
                {maths.map((m, i) => (<MathView math={m} key={i}/>))}
            </div>
        </div>
    );
}

export default App;
