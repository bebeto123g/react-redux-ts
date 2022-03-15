import React, { FormEventHandler } from 'react';
import Button from '../../UI/Button/Button';
import ReceptionFormName from './ReceptionFormName';
import ReceptionFormEmail from './ReceptionFormEmail';
import ReceptionFormPhone from './ReceptionFormPhone';
import ReceptionFormAdditional from './ReceptionFormAdditional';
import ReceptionFormUserType from './ReceptionFormUserType';

const ReceptionForm = () => {
    const handlerFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handlerFormSubmit}>
            <ReceptionFormName />
            <ReceptionFormEmail />
            <ReceptionFormPhone />
            <ReceptionFormUserType />
            <ReceptionFormAdditional />
            <Button size="lg" variant="primary">
                Продолжить
            </Button>
        </form>
    );
};

export default ReceptionForm;
