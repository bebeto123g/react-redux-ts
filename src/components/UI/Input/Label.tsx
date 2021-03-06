import React, { FC, LabelHTMLAttributes } from 'react';
import styled from '@emotion/styled';

export const LabelStyle = styled.label`
    font-family: 'Golos', -apple-system, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
        'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 8px;
    display: block;
`;

const Label: FC<LabelHTMLAttributes<HTMLLabelElement>> = ({ children, ...props }) => {
    return <LabelStyle {...props}>{children}</LabelStyle>;
};

export default Label;
