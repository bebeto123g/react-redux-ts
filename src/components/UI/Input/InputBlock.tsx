import React, { FC, FocusEventHandler, InputHTMLAttributes } from 'react';

import Label from './Label';
import Input, { InputTypeProp } from './Input';
import InputError from './Error';
import { EmotionCssClassNameType } from '../../../types';

interface InputBlockNativePropsType extends InputHTMLAttributes<HTMLInputElement> {
    type?: InputTypeProp
}

interface InputBlockProps {
    label?: string;
    error: boolean;
    textError?: string;
    id: string | number;
    inputProps: InputBlockNativePropsType;
    handler: FocusEventHandler<HTMLInputElement>;
    className?: EmotionCssClassNameType
}

const InputBlock: FC<InputBlockProps> = ({
    handler,
    id,
    label,
    textError,
    error,
    inputProps = { type: 'text' },
    className
}) => {
    return (
        <div className={className}>
            {label && <Label htmlFor={String(id)}>{label}</Label>}
            {error && <InputError>{textError}</InputError>}
            <Input {...inputProps} error={error} handler={handler} id={String(id)} />
        </div>
    );
};

export default InputBlock;
