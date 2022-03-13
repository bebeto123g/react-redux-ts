import React, { FocusEventHandler, FormEventHandler, MouseEventHandler, useState } from 'react';
import InputBlock from '../../UI/Input/InputBlock';
import { UserType } from '../../../types';
import RadioList from '../../UI/Radio/RadioList';
import RadioInput from '../../UI/Radio/RadioInput';
import CheckboxInput from '../../UI/Checkbox/CheckboxInput';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button';

const stylesInputBlock = css`
    margin-bottom: 32px;
`;
const stylesCheckboxBlock = css`
    margin-bottom: 32px;

    label {
        margin-bottom: 16px;
    }
`;

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
                className={stylesInputBlock}
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
                className={stylesInputBlock}
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
                className={stylesInputBlock}
                error={true}
                handler={handlerFormPhone}
                inputProps={{
                    placeholder: '+7 (987) 123-45-67',
                    type: 'tel',
                    value: form.phone,
                }}
            />

            <RadioList label="Заявление подаёт" className={stylesInputBlock}>
                <RadioInput id="individual" name="reception-radio" defaultChecked={true}>
                    Физическе лицо
                </RadioInput>
                <RadioInput id="entity" name="reception-radio">
                    Юридическое лицо
                </RadioInput>
            </RadioList>

            <div className={stylesCheckboxBlock}>
                <CheckboxInput>
                    Я принимаю <Link to={'/terms'}>условия предоставления услуги.</Link>
                </CheckboxInput>
                <CheckboxInput>Я даю разрешение на обработку персональных данных.</CheckboxInput>
            </div>

            <Button callback={() => console.log('submit')} size="lg" variant="primary">
                Продолжить
            </Button>
        </form>
    );
};

export default ReceptionForm;
