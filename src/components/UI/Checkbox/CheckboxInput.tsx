import React, { FC, InputHTMLAttributes } from 'react';
import { css } from '@emotion/css';

const labelStyle = css`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    position: relative;
    cursor: pointer;

    input[type='checkbox'] {
        visibility: hidden;
        position: absolute;
        pointer-events: none;

        &:checked + span {
            border-color: #0044cc;
            background-color: #0044cc;
        }
    }

    span:first-of-type {
        order: -1;
        width: 20px;
        min-width: 20px;
        height: 20px;
        margin-right: 12px;
        border-radius: 4px;
        border: 1px solid #c4c8d0;
        transition: background 0.3s;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url("data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.132954 4.44144C-0.044318 4.25344 -0.044318 3.94744 0.132954 3.75744L0.775678 3.07444C0.95295 2.88644 1.24113 2.88644 1.4184 3.07444L3.63657 5.46644L8.5811 0.141443C8.75837 -0.0465575 9.04655 -0.0465575 9.22382 0.141443L9.86655 0.825442C10.0438 1.01344 10.0438 1.32044 9.86655 1.50744L3.95748 7.85844C3.78021 8.04644 3.49203 8.04644 3.31476 7.85844L0.132954 4.44144Z' fill='white'/%3E%3C/svg%3E%0A");
    }
`;

type CheckboxInputPropsType = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

const CheckboxInput: FC<CheckboxInputPropsType> = ({ children, ...props }) => {
    return (
        <label className={labelStyle}>
            <input {...props} id={String(props.id)} type="checkbox" />
            <span />
            <span>{children}</span>
        </label>
    );
};

export default CheckboxInput;
