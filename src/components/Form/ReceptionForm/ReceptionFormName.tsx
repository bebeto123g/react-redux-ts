import React from 'react';
import { css } from '@emotion/css';
import InputBlock from '../../UI/Input/InputBlock';
import { useFormInput } from '../../../hooks/useFormInput';

const styles = css`
    margin-bottom: 32px;
`;

const ReceptionFormName = () => {
    const { value, error, clearError, handler } = useFormInput('name');

    return (
        <InputBlock
            id="Reception-Form-Name"
            label="Заявитель"
            textError="От 5 до 100 символов"
            error={error}
            handler={handler}
            className={styles}
            inputProps={{
                placeholder: 'Введите имя',
                type: 'text',
                onChange: clearError,
                value,
            }}
        />
    );
};

export default ReceptionFormName;
