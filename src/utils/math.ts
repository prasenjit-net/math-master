export enum Operator {
    ADD = "+",
    SUB = "-",
    MUL = "*",
    DIV = "÷"
}

export enum Complexity {
    VERY_EASY = 10,
    EASY = 100,
    MEDIUM = 1000,
    HARD = 10000,
}

export interface MathProblem {
    operands: number[],
    operator: Operator,
    answer: number,
}

const randomOperation = (complexity: Complexity): Operator => {
    let operator: Operator;
    switch (complexity) {
        case Complexity.EASY:
            operator = [Operator.ADD, Operator.SUB][Math.floor(Math.random() * 2)];
            break;
        case Complexity.MEDIUM:
            operator = [Operator.ADD, Operator.SUB, Operator.MUL][Math.floor(Math.random() * 3)];
            break;
        case Complexity.HARD:
            operator = [Operator.ADD, Operator.SUB, Operator.MUL, Operator.DIV][Math.floor(Math.random() * 4)];
            break;
        default:
            operator = Operator.ADD;
    }
    return operator;
};

const randomInt = (min: number, max: number): number => {
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNum > 0 ? randomNum : randomInt(min, max);
};
export const generateMathProblem = (complexity: Complexity): MathProblem => {
    const operator = randomOperation(complexity);
    const operands: number[] = [];
    let answer;
    switch (operator) {
        case Operator.ADD:
            let opCount = 2;
            if (complexity === Complexity.MEDIUM || complexity === Complexity.HARD) {
                opCount = randomInt(2, 3);
            }
            for (let i = 0; i < opCount; i++) {
                operands.push(randomInt((complexity / 10), complexity))
            }
            operands.sort((a, b) => b - a);
            answer = operands.reduce((a, b) => a + b);
            break;
        case Operator.SUB:
            operands.push(randomInt((complexity / 10), complexity), randomInt((complexity / 10), complexity));
            operands.sort((a, b) => b - a);
            answer = operands[0] - operands[1];
            break;
        case Operator.DIV:
            const div1 = randomInt(2, 15);
            const div2 = randomInt(2, 15);
            const divisor = Math.min(div1, div2);
            const quotient = Math.max(div1, div2);
            const dividend = divisor * quotient;
            operands.push(dividend, divisor);
            answer = quotient;
            break;
        case Operator.MUL:
            const factor1 = Math.floor(Math.random() * Math.sqrt(complexity)) + 1;
            const factor2 = Math.floor(Math.random() * Math.sqrt(complexity)) + 1;
            operands.push(factor1, factor2);
            operands.sort((a, b) => b - a);
            answer = factor1 * factor2;
            break;
    }
    return {
        operands, operator, answer
    } as MathProblem;
}