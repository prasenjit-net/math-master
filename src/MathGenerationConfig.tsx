import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Complexity} from "./utils/math";

export interface MathGenerationConfigProps {
    onSubmit: (formData: MathConfig) => void;
}

export interface MathConfig {
    count: number;
    complexity: Complexity;
}

const MathGenerationConfig: React.FC<MathGenerationConfigProps> = ({onSubmit}) => {
    const [formData, setFormData] = useState<MathConfig>({count: 8, complexity: Complexity.MEDIUM});

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
        const value = parseInt(event.target.value) as Complexity;
        setFormData({
            ...formData,
            complexity: value
        });
    };

    return (
        <form onSubmit={handleSubmit} className="print:hidden flex flex-col sm:flex-row m-6">
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
                <label htmlFor="operation" className="block text-sm font-medium text-gray-700">
                    Complexity:
                </label>
                <select
                    id="complexity"
                    name="operation"
                    value={formData.complexity}
                    onChange={handleSelectChange}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                >
                    <option value={Complexity.VERY_EASY}>Very Easy</option>
                    <option value={Complexity.EASY}>Easy</option>
                    <option value={Complexity.MEDIUM}>Medium</option>
                    <option value={Complexity.HARD}>Hard</option>
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
            <div className="flex-shrink-0">
                <button
                    onClick={window.print}
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Print
                </button>
            </div>
        </form>
    );
};

export default MathGenerationConfig;
