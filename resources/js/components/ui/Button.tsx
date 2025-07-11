import {ButtonHTMLAttributes} from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    onClick?: () => void;
    filled?: boolean;
    loading?: boolean;
}

function Button({ label, onClick, filled, loading, ...rest }: Props) {
    return (
        <button
            {...rest}
            className={`flex items-center justify-center px-4 py-2
             text-lg font-medium rounded-md flex-1 cursor-pointer shadow-md hover:shadow-2xl
             ${filled ? 'bg-[#4AA7DEFF] text-white disabled:bg-[#316C8FFF]' : 'bg-transparent text-[##4AA7DEFF] border-2 border-[#4AA7DEFF] disabled:border-[#316C8FFF]'}`}
            disabled={loading}
            onClick={onClick}
        >
            {
                loading ? (
                    <div
                        className="animate-spin h-7 w-7 border-4 border-t-[#4AA7DEFF] border-b-[#4AA7DEFF] border-l-transparent border-r-transparent rounded-full"></div>
                ) : (
                    <p>
                        {label}
                    </p>
                )
            }
        </button>
    );
}

export default Button;
