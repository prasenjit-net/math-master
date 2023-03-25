import React, {useEffect, useState} from 'react';
import './App.css';
import MathProblem from "./MathProblem";

export type MathType = {
    inputs: number[],
    operand: Operand;
};

export type Operand = "+" | "-";

function App() {
    const [maths, setMaths] = useState<MathType[]>([]);
    const [count, setCount] = useState<number>(8);
    const [complexity, setComplexity] = useState<number>(4);

    useEffect(() => {
        const problems: MathType[] = [];
        for (let i = 0; i < count; i++) {
            const math: MathType = {} as MathType;
            math.inputs = [];
            math.inputs.push(randomNumber(complexity), randomNumber(complexity))
            math.operand = "+";
            problems.push(math);
        }
        setMaths(problems);
    }, [count, complexity]);

    const randomNumber = (complexity: number) => Math.floor(Math.random() * Math.pow(10, complexity)) + 1;
    return (
        <div className="font-mono">
            <form className="p-2 m-8 print:hidden">
                <div>
                    <label className="p-1">Number of problem: {count}</label>
                    <input type="button"
                           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                           value="+" onClick={() => setCount(count + 1)}/>
                    <input type="button"
                           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                           value="-" onClick={() => setCount(count - 1)}/>
                </div>
                <div>
                    <label className="p-1">Complexity: {complexity}</label>
                    <input type="button"
                           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                           value="+" onClick={() => setComplexity(complexity + 1)}/>
                    <input type="button"
                           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                           value="-" onClick={() => setComplexity(complexity - 1)}/>
                </div>
            </form>
            <div className="flex flex-row flex-wrap border-2 border-gray-500 m-6 text-3xl">
                {maths.map((m, i) => (<MathProblem op={m.inputs} key={i}/>))}
            </div>
        </div>
    );
}

export default App;
