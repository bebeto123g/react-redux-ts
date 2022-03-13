import React, { FC } from 'react';
import { css } from '@emotion/css';

const labelStyle = css`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    position: relative;
    cursor: pointer;

    input[type='radio'] {
        visibility: hidden;
        position: absolute;
        pointer-events: none;

        &:checked + span {
            box-shadow: 0 0 0 5px #0044cc inset;
            border-color: #0044cc;
        }
    }

    span:first-of-type {
        order: -1;
        width: 20px;
        height: 20px;
        margin-right: 12px;
        border-radius: 50%;
        border: 1px solid #c4c8d0;
        transition: box-shadow 0.3s;
    }
`;

interface RadioInputPropsType {
    id: string;
    name: string;
}

const RadioInput: FC<RadioInputPropsType> = ({ id, name, children }) => {
    return (
        <label className={labelStyle}>
            <input type="radio" name={name} id={String(id)} />
            <span />
            <span>{children}</span>
        </label>
    );
};

export default RadioInput;
