import React, { useState, FormEvent, ChangeEvent } from 'react';

export enum Operation {
    ADD = '+',
    SUB = '-',
    MUL = 'x',
}

export interface MathGenerationConfigProps {
    onSubmit: (formData: MathConfig) => void;
}

export interface MathConfig {
    count: number;
    complexity: number;
    operation: Operation;
}

const MathGenerationConfig: React.FC<MathGenerationConfigProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<MathConfig>({ count: 8, complexity: 5, operation: Operation.ADD });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(formData);
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : parseFloat(target.value);
        const name = target.name;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value as Operation;
        setFormData({
            ...formData,
            operation: value
        });
    };

    return (
        <form onSubmit={handleSubmit} className="print:hidden flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <div className="flex-grow">
                <label htmlFor="count" className="block text-sm font-medium text-gray-700">
                    Count:
                </label>
                <input
                    id="count"
                    type="number"
                    name="count"
                    value={formData.count}
                    onChange={handleInputChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
            </div>
            <div className="flex-grow">
                <label htmlFor="complexity" className="block text-sm font-medium text-gray-700">
                    Complexity:
                </label>
                <input
                    id="complexity"
                    type="number"
                    name="complexity"
                    value={formData.complexity}
                    onChange={handleInputChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
            </div>
            <div className="flex-grow">
                <label htmlFor="operation" className="block text-sm font-medium text-gray-700">
                    Operation:
                </label>
                <select
                    id="operation"
                    name="operation"
                    value={formData.operation}
                    onChange={handleSelectChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                >
                    <option value={Operation.ADD}>Addition</option>
                    <option value={Operation.SUB}>Subtraction</option>
                    <option value={Operation.MUL}>Multiplication</option>
                </select>
            </div>
            <div className="flex-shrink-0">
                <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Generate
                </button>
            </div>
        </form>
    );
};

export default MathGenerationConfig;
