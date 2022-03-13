import React, { FC } from 'react';
import {css} from '@emotion/css';
import { LabelStyle } from '../Input/Label';

interface RadioListPropsType {
    label?: string;
}

const styles = css`
    div:first-of-type {
        margin-bottom: 16px;
    }

    label {
        margin-bottom: 16px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }
`;

const RadioList: FC<RadioListPropsType> = ({ label, children }) => {
    return (
        <div className={styles}>
            {label && <LabelStyle as={'div'}>{label}</LabelStyle>}
            {children}
        </div>
    );
};

export default RadioList;
