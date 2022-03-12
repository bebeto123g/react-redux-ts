import React, { FC } from 'react';
import { css } from '@emotion/css';

const styles = css`
    font-family: 'Golos', -apple-system, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
        'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 16px;
    color: #0e0e0f;
`;

const Paragraph: FC = ({ children }) => {
    return <p className={styles}>{children}</p>;
};

export default Paragraph;
