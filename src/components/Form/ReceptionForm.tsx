import React, { FocusEventHandler, useState } from 'react';
import InputBlock from '../UX/Input/InputBlock';
import { UserType } from '../../types';

const initFormState = {
    name: '',
    email: '',
    phone: '',
    userType: 'individual' as UserType,
    isAgree: true,
    processingData: false,
};

const ReceptionForm = () => {
    const [form, setForm] = useState<typeof initFormState>(initFormState);

    const handlerFormName: FocusEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.value);
        setForm((prev) => ({ ...prev, name: e.target.value }));
    };

    return (
        <form>
            <InputBlock
                id="Reception-Form-Name"
                label="Заявитель"
                textError="Введите почту"
                error={false}
                handler={handlerFormName}
                inputProps={{
                    placeholder: 'Введите имя',
                    type: 'text',
                    minLength: 5,
                    maxLength: 40,
                    value: form.name,
                }}
            />
        </form>
    );
};

export default ReceptionForm;
