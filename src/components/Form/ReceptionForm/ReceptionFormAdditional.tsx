import React, { ChangeEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';
import CheckboxInput from '../../UI/Checkbox/CheckboxInput';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setFormIsAgree, setFormIsProcessingData } from '../../../store/form/actions';

const styles = css`
    margin-bottom: 32px;

    label {
        margin-bottom: 16px;
    }
`;

const ReceptionFormAdditional = () => {
    const isAgree = useAppSelector((state) => state.form.isAgree);
    const isProcessingData = useAppSelector((state) => state.form.isProcessingData);
    const dispatch = useAppDispatch();

    const handlerIsAgree: ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatch(setFormIsAgree(e.target.checked))
    };

    const handlerIsProcessing: ChangeEventHandler<HTMLInputElement> = (e) => {
        dispatch(setFormIsProcessingData(e.target.checked))
    };

    return (
        <div className={styles}>
            <CheckboxInput onChange={handlerIsAgree} checked={isAgree}>
                Я принимаю <Link to={'/terms'}>условия предоставления услуги.</Link>
            </CheckboxInput>
            <CheckboxInput onChange={handlerIsProcessing} checked={isProcessingData}>
                Я даю разрешение на обработку персональных данных.
            </CheckboxInput>
        </div>
    );
};

export default ReceptionFormAdditional;
