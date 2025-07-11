import {InputHTMLAttributes} from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string | boolean;
    className?: string;
}

function Input({ label, error, className, ...rest }: Props) {
    return (
        <div>
            {label && (
                <label className="block mb-1 font-medium text-gray-700">
                    {label}
                </label>
            )}
            <input
                {...rest}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    error ? 'border-red-500' : 'border-gray-300'
                } ${className}`}
            />
            {error && typeof error === 'string' && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
}

export default Input;
