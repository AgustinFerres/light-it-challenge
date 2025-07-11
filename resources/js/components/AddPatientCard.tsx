
interface Props {
    onClick: () => void;
}

function AddPatientCard(props: Props) {
    return (
        <div className="flex w-50 h-80 justify-center items-center rounded-lg border-2 border-[#4AA7DEFF] text-9xl shadow-md cursor-pointer hover:shadow-2xl transition-shadow duration-300 ease-in-out"
             onClick={props.onClick}
        >
            +
        </div>
    );
}

export default AddPatientCard;
