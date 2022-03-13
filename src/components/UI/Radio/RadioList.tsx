import React, { AllHTMLAttributes, FC } from 'react';
import { css } from '@emotion/css';
import { LabelStyle } from '../Input/Label';
import { EmotionCssClassNameType } from '../../../types';

interface RadioListPropsType extends AllHTMLAttributes<HTMLDivElement>  {
    className?: EmotionCssClassNameType;
    label?: string;
}

const stylesWrapper = css`
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

const RadioList: FC<RadioListPropsType> = ({ label, className, children, ...props }) => {
    return (
        <div {...props} className={className}>
            <div className={stylesWrapper}>
                {label && <LabelStyle as={'div'}>{label}</LabelStyle>}
                {children}
            </div>
        </div>
    );
};

export default RadioList;
