import { css } from '@emotion/css';
import React, { FC } from 'react';
import { UserType } from '../../../types';

const labelStyle = css(`
    display: flex;
`);

interface RadioInputPropsType {
    id: UserType;
    name: string;
}

const RadioInput: FC<RadioInputPropsType> = ({ id, name, children }) => {
    return (
        <label>
            <input type="radio" name={name} id={String(id)} />
            <span></span>
            <span>{children}</span>
        </label>
    );
};

export default RadioInput;
