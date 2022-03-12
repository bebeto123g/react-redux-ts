import React, { FC } from 'react';
import { css } from '@emotion/css';

const styles = css`
    font-family: 'Golos', -apple-system, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
        'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 56px;
    color: #0e0e0f;
`;

const PageTitle: FC = ({ children }) => {
    return <h1 className={styles}>{children}</h1>;
};

export default PageTitle;
