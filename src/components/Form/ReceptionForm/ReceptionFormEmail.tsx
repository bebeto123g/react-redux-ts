import React from 'react';
import { css } from '@emotion/css';
import InputBlock from '../../UI/Input/InputBlock';
import { useFormInput } from '../../../hooks/useFormInput';

const styles = css`
    margin-bottom: 32px;
`;

const ReceptionFormEmail = () => {
    const { value, error, clearError, handler } = useFormInput('email');

    return (
        <InputBlock
            id="Reception-Form-Email"
            label="Электронная почта"
            textError="Введите почту"
            error={error}
            handler={handler}
            className={styles}
            inputProps={{
                placeholder: 'Введите email',
                type: 'email',
                onChange: clearError,
                value,
            }}
        />
    );
};

export default ReceptionFormEmail;
