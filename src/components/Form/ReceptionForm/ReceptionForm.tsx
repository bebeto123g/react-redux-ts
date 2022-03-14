import React, { FormEventHandler, KeyboardEventHandler, useEffect, useRef } from 'react';
import ReceptionFormName from './ReceptionFormName';
import ReceptionFormEmail from './ReceptionFormEmail';
import ReceptionFormPhone from './ReceptionFormPhone';
import ReceptionFormAdditional from './ReceptionFormAdditional';
import ReceptionFormUserType from './ReceptionFormUserType';
import ReceptionFormSubmit from './ReceptionFormSubmit';
import { useAppDispatch } from '../../../store';
import { submitForm } from '../../../store/form/actions';
import { useNavigate } from 'react-router-dom';

const ReceptionForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const formRef = useRef<HTMLFormElement>(null);

    const handlerFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        dispatch(submitForm());
        navigate('/success');
    };

    const pressEnter: KeyboardEventHandler<HTMLFormElement> = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

    useEffect(() => {
        formRef.current?.reset();
    }, []);

    return (
        <form onSubmit={handlerFormSubmit} ref={formRef} onKeyDown={pressEnter}>
            <ReceptionFormName />
            <ReceptionFormEmail />
            <ReceptionFormPhone />
            <ReceptionFormUserType />
            <ReceptionFormAdditional />
            <ReceptionFormSubmit />
        </form>
    );
};

export default ReceptionForm;
