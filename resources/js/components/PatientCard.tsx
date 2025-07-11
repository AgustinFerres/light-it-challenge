import {useState} from 'react';

interface Props {
    name: string;
    email: string;
    phone: string;
    photo: string;
}

function PatientCard(props: Props) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div
            className="flex w-50 h-80 flex-col justify-start rounded-lg bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            onMouseOver={() => setExpanded(true)}
            onMouseOut={() => setExpanded(false)}
        >
            <img src={props.photo} alt={`${props.name}'s photo`} className="h-full w-full rounded-md object-cover shadow-lg" />
            <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">{props.name}</h2>
                <div className={`text-left ${expanded ? 'block' : 'hidden'} mt-2`}>
                    <p className="text-sm text-gray-600">Email: {props.email}</p>
                    <p className="text-sm text-gray-600">Phone: {props.phone}</p>
                </div>
            </div>
        </div>
    );
}

export default PatientCard;
