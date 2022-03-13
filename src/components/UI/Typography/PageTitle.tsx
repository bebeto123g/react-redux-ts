import React, { FC } from 'react';
import { css } from '@emotion/css';

const styles = css`
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 56px;
`;

const PageTitle: FC = ({ children }) => {
    return <h1 className={styles}>{children}</h1>;
};

export default PageTitle;
