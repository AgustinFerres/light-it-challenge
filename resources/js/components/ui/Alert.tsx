import { useEffect, useState } from 'react';

interface Props {
    type: 'success' | 'error';
    message: string;
}

function Alert(props: Props) {

    const [visible, setVisible] = useState(true);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const animationTimeout = setTimeout(() => setAnimate(true), 100);
        const timer = setTimeout(() => setVisible(false), 3000);
        return () => {
            clearTimeout(timer);
            clearTimeout(animationTimeout);
        };
    }, []);

    if (!visible) return null;

    switch (props.type) {
        case 'success':
            return (
                <div
                    className={`p-4 mb-4 text-sm text-white rounded-lg bg-green-600 w-auto
                    transition-transform duration-500 ease-in-out transform ${animate ? 'translate-x-0' : 'translate-x-[130%]'}`}
                    role="alert"
                >
                    {props.message}
                </div>
            );
        case 'error':
            return (
                <div className="alert alert-danger" role="alert">
                    {props.message}
                </div>
            );
    }
}

export default Alert;
