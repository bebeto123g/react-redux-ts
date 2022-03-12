import React, { FC, FocusEventHandler, InputHTMLAttributes } from 'react';
import { css } from '@emotion/css';

import Label from '../../UI/Input/Label';
import Input from '../../UI/Input/Input';
import InputError from '../../UI/Input/Error';

interface InputBlockProps {
    label?: string;
    error: boolean;
    textError?: string;
    id: string | number;
    inputProps: InputHTMLAttributes<HTMLInputElement>;
    handler: FocusEventHandler<HTMLInputElement>;
}

const styles = css(`
    margin-bottom: 32px;
`);

const InputBlock: FC<InputBlockProps> = ({
    handler,
    id,
    label,
    textError,
    error,
    inputProps = { type: 'text' },
}) => {
    return (
        <div className={styles}>
            {label && <Label htmlFor={String(id)}>{label}</Label>}
            {error && <InputError>{textError}</InputError>}
            <Input {...inputProps} error={error} handler={handler} id={String(id)} />
        </div>
    );
};

export default InputBlock;
