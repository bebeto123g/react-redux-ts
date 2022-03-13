import React, { FC } from 'react';
import { css } from '@emotion/css';

const styles = css`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 16px;
`;

const Paragraph: FC = ({ children }) => {
    return <p className={styles}>{children}</p>;
};

export default Paragraph;
