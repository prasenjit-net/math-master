import React, {useState, FormEvent, ChangeEvent} from 'react';

export interface MathGenerationConfigProps {
    onSubmit: (formData: MathConfig) => void;
}

export interface MathConfig {
    count: number;
    complexity: number;
    addition: boolean;
    subtraction: boolean;
}

const MathGenerationConfig: React.FC<MathGenerationConfigProps> = ({onSubmit}) => {
    const [formData, setFormData] = useState<MathConfig>({
        count: 0,
        complexity: 0,
        addition: false,
        subtraction: false
    });

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

    return (
        <form onSubmit={handleSubmit} className="p-2 m-8 print:hidden flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
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
                <label htmlFor="addition" className="block text-sm font-medium text-gray-700">
                    Addition:
                </label>
                <input
                    id="addition"
                    type="checkbox"
                    name="addition"
                    checked={formData.addition}
                    onChange={handleInputChange}
                    className="mt-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
            </div>
            <div className="flex-grow">
                <label htmlFor="subtraction" className="block text-sm font-medium text-gray-700">
                    Subtraction:
                </label>
                <input
                    id="subtraction"
                    type="checkbox"
                    name="subtraction"
                    checked={formData.subtraction}
                    onChange={handleInputChange}
                    className="mt-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
            </div>
            <div className="flex-shrink-0">
                <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default MathGenerationConfig;
