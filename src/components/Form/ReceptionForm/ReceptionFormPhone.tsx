import React from 'react';
import { css } from '@emotion/css';
import InputBlock from '../../UI/Input/InputBlock';
import { useFormInput } from '../../../hooks/useFormInput';

const styles = css`
    margin-bottom: 32px;
`;

const ReceptionFormPhone = () => {
    const { value, error, clearError, handler } = useFormInput('phone');

    return (
        <InputBlock
            id="Reception-Form-Phone"
            label="Телефон"
            textError="Неверный формат телефона"
            className={styles}
            error={error}
            handler={handler}
            inputProps={{
                placeholder: '+7 (987) 123-45-67',
                type: 'tel',
                onChange: clearError,
                value,
            }}
        />
    );
};

export default ReceptionFormPhone;
