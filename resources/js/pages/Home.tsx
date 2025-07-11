import { Head } from '@inertiajs/react';
import Header from "@/components/Header";
import PatientsList from "@/components/PatientsList";
import Patient from '@/types/Patient';
import { AlertObj, useAlert } from '@/hooks/useAlert';
import Alert from '@/components/ui/Alert';
import { useEffect, useState } from 'react';

interface Props {
    patients: Patient[]
}

export default function Home({ patients }: Props) {

    const [alerts, setAlerts] = useState<AlertObj[]>([]);
    const { alert, showAlert } = useAlert()

    useEffect(() => {
        if (alert) {
            setAlerts([...alerts, alert])
        }

        return () => setAlerts([]);
    }, [alert]);



    return (
        <>
            <Head title="Patient Registration">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#F8F4F4FF] text-[#4AA7DEFF] w-full">
                <Header />
                <main className="2xl:w-1/2 lg:w-4/5 md:w-full">
                    <PatientsList patients={patients} onAddPatient={() => showAlert("Patient added successfully", "success")}/>
                </main>
                <div className="fixed top-20 right-4 w-auto p-4">
                    {alerts.map((alert, index) => (
                        <Alert key={index} type={alert.type} message={alert.message} />
                    ))}
                </div>
            </div>
        </>
    );
}
