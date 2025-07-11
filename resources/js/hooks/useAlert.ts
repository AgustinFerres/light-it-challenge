import { useState } from 'react';

type AlertType = 'success' | 'error';

export interface AlertObj {
    type: AlertType;
    message: string;
}

export function useAlert() {
    const [alert, setAlert] = useState<AlertObj | null>(null);

    const showAlert = (message: string, type: AlertType = 'success') => {
        console.log("test");
        setAlert({ message, type });
    };

    const hideAlert = () => {
        setAlert(null);
    };

    return { alert, showAlert, hideAlert };
}
