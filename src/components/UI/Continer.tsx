import React, { FC } from 'react';
import { css } from '@emotion/css';

const styles = css`
    max-width: 832px;
    box-sizing: content-box;
    padding: 16px;
    margin: 0 auto;
`;

const Container: FC = ({ children }) => {
    return <div className={styles}>{children}</div>;
};

export default Container;
