import React, {
    FC,
    FocusEventHandler,
    InputHTMLAttributes,
    KeyboardEventHandler,
    useEffect,
    useRef,
    useState,
} from 'react';
import styled from '@emotion/styled';
import { InputStyles } from './inputStyles';

export type InputTypeProp = 'text' | 'email' | 'tel' | 'number';

export interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
    handler: FocusEventHandler<HTMLInputElement>;
    error: boolean;
    type?: InputTypeProp;
}

const Input: FC<InputPropsType> = ({ type, handler, value, error = false, ...props }) => {
    const [stateValue, setStateValue] = useState('');

    const inputEl = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputEl && stateValue !== value) {
            {/* @ts-ignore */}
            inputEl.current.value = value;
        }
    }, [value, stateValue]);

    const checkChange: FocusEventHandler<HTMLInputElement> = (e) => {
        if (value !== e.target.value) {
            setStateValue(e.target.value);
            handler(e);
        }
    };

    const pressEnter: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            {/* @ts-ignore */}
            checkChange(e);
        }
    };

    return (
        <InputStyles
            {...props}
            type={type}
            defaultValue={value}
            onBlur={checkChange}
            onKeyUp={pressEnter}
            error={error}
            name={props.id}
            ref={inputEl}
        />
    );
};

export default Input;
