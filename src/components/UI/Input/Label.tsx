import React, { FC, LabelHTMLAttributes } from 'react';
import { css } from '@emotion/css';

const styles = css`
    font-family: 'Golos', -apple-system, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
        'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 8px;
    color: #0e0e0f;
    display: block;
`;

const Label: FC<LabelHTMLAttributes<HTMLLabelElement>> = ({ children, htmlFor = '' }) => {
    return (
        <label className={styles} htmlFor={htmlFor}>
            {children}
        </label>
    );
};

export default Label;
