import React, {useEffect, useState} from 'react';
import './App.css';
import MathProblem from "./MathProblem";
import FormComponent, {MathConfig, Operation} from "./MathGenerationConfig";

export type MathType = {
    inputs: number[],
    operation: Operation;
};

function App() {
    const [maths, setMaths] = useState<MathType[]>([]);
    const [config, setConfig] = useState<MathConfig>({count: 8, complexity: 5, operation: Operation.ADD});

    useEffect(() => {
        const problems: MathType[] = [];
        for (let i = 0; i < config.count; i++) {
            const math: MathType = {} as MathType;
            math.inputs = [];
            const num1 = getRandomInt(config.complexity);
            math.inputs.push(num1)
            math.inputs.push(getRandomInt(config.complexity, num1));
            math.operation = config.operation;
            problems.push(math);
        }
        setMaths(problems);
    }, [config]);

    const getRandomInt = (complexity: number, max: number = 0): number => {
        if (max === 0) {
            max = Math.pow(10, (complexity)) - 1;
        }
        const min = Math.pow(10, (complexity - 1)) - 1;
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const formSubmit = (formData: MathConfig) => {
        setConfig(formData);
    };
    return (
        <div className="font-mono">
            <FormComponent onSubmit={formSubmit}/>
            <div className="flex flex-row flex-wrap border-2 border-gray-500 m-6 text-3xl">
                {maths.map((m, i) => (<MathProblem operation={m.operation} inputs={m.inputs} key={i}/>))}
            </div>
        </div>
    );
}

export default App;
