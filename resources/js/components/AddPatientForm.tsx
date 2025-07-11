import { useForm } from '@inertiajs/react';
import Separator from "@/components/ui/Separator";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { FormEvent } from 'react';

interface Props {
    open: boolean;
    onClose: () => void;
    onSuccess?: Function;
}

function AddPatientForm(props: Props) {

    const { data, setData, post, transform, reset, errors, clearErrors, processing } = useForm({
        name: '',
        email: '',
        prefix: '',
        phone: '',
        photo: null,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        transform((data) => ({
            ...data,
            phone: data.prefix + data.phone,
        }));

        post('/patients', {
            onSuccess: () => {
                props.onSuccess?.();
                handleClose();
            },
            preserveScroll: true,
        });
    }

    const handleReset = () => {
        reset();
        clearErrors();
    }

    const handleClose = () => {
        handleReset();
        props.onClose();
    }


    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)] ${props.open ? 'block' : 'hidden'}`}
            onClick={handleClose}
        >
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg" onClick={(e) => e.stopPropagation()}>
                <h2 className="mb-4 text-xl font-semibold">Add Patient</h2>
                <Separator />
                <form onSubmit={handleSubmit} className="my-4 flex flex-col gap-4">
                    <Input label="Name" type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} error={errors.name} />
                    <Input label="Email" type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} error={errors.email} />
                    <div className="flex w-full items-end gap-2 mb-[-10px]">
                        <div className="w-16">
                            <Input
                                label="Phone"
                                type="text"
                                placeholder="+598"
                                value={data.prefix}
                                onChange={(e) => setData('prefix', e.target.value)}
                                error={!!errors.prefix}
                            />
                        </div>
                        <div className="flex-1 ">
                            <Input type="text" value={data.phone} onChange={(e) => setData('phone', e.target.value)} error={!!errors.phone} className="flex-1" />
                        </div>
                    </div>
                    {(errors.phone || errors.prefix) && <p className="text-sm text-red-600">{errors.phone || errors.prefix}</p>}
                    <Input label="Photo" type="file" onChange={(e) => setData('photo', e.target.files[0])} error={errors.photo} />
                    <div className="mt-4 flex justify-end gap-2">
                        <Button label="Reset" onClick={handleReset} type="button" />
                        <Button label="Add" type="submit" filled loading={processing} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddPatientForm;
