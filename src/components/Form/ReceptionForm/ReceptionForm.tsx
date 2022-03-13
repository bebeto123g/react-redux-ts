import React, { FocusEventHandler, FormEventHandler, useState } from 'react';
import InputBlock from '../../UX/Input/InputBlock';
import { UserType } from '../../../types';
import RadioList from '../../UI/Radio/RadioList';
import RadioInput from '../../UI/Radio/RadioInput';

const initFormState = {
    name: '',
    email: '',
    phone: '',
    userType: 'individual' as UserType,
    isAgree: true,
    processingData: false,
};

const ReceptionForm = () => {
    // TODO перенести каждый инпут в отедльный компонент, чтобы в форме не было обращения к состоянию в redux-е
    const [form, setForm] = useState(initFormState);

    const handlerFormName: FocusEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.value);
        setForm((prev) => ({ ...prev, name: e.target.value }));
    };

    const handlerFormEmail: FocusEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.value);
        setForm((prev) => ({ ...prev, email: e.target.value }));
    };

    const handlerFormPhone: FocusEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.value);
        setForm((prev) => ({ ...prev, phone: e.target.value }));
    };

    const handlerFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        console.log(form);
    };

    return (
        <form onSubmit={handlerFormSubmit}>
            <InputBlock
                id="Reception-Form-Name"
                label="Заявитель"
                textError="От 5 до 40 символов"
                error={true}
                handler={handlerFormName}
                inputProps={{
                    placeholder: 'Введите имя',
                    type: 'text',
                    minLength: 5,
                    maxLength: 40,
                    value: form.name,
                }}
            />
            <InputBlock
                id="Reception-Form-Email"
                label="Электронная почта"
                textError="Введите почту"
                error={true}
                handler={handlerFormEmail}
                inputProps={{
                    placeholder: 'Введите email',
                    type: 'email',
                    value: form.email,
                }}
            />
            <InputBlock
                id="Reception-Form-Phone"
                label="Телефон"
                textError="Неверный формат телефона"
                error={true}
                handler={handlerFormPhone}
                inputProps={{
                    placeholder: '+7 (987) 123-45-67',
                    type: 'tel',
                    value: form.phone,
                }}
            />

            <RadioList label="Заявление подаёт">
                <RadioInput id="individual" name="reception-radio">
                    Физическе лицо
                </RadioInput>
                <RadioInput id="entity" name="reception-radio">
                    Юридическое лицо
                </RadioInput>
            </RadioList>
        </form>
    );
};

export default ReceptionForm;
