import Patient from "@/types/Patient";
import PatientCard from "@/components/PatientCard";
import AddPatientCard from "@/components/AddPatientCard";
import Separator from "@/components/ui/Separator";
import { useEffect, useState } from 'react';
import AddPatientForm from "@/components/AddPatientForm";

interface Props {
    patients: Patient[];
    onAddPatient?: Function;
}

function PatientsList(props: Props) {
    const [ cards, setCards ] = useState<Patient[]>([]);
    const [ modalOpen, setModalOpen ] = useState<boolean>(false);

    const handleAddCard = () => {
        setModalOpen(true);
    }

    useEffect(() => {
        setCards(props.patients);
    }, [props.patients]);

    return (
        <div className="mt-20">
            <h2>Patients List</h2>
            <Separator />
            <div className="grid md:grid-cols-4 gap-10 px-2 sm:grid-cols-2 justify-items-center" >
                {
                    cards.map((patient, index) => <PatientCard {...patient} key={index}/>)
                }
                <AddPatientCard onClick={handleAddCard} />
            </div>
            <AddPatientForm open={modalOpen} onClose={() => setModalOpen(false)} onSuccess={props.onAddPatient}/>
        </div>
    );
}

export default PatientsList;
