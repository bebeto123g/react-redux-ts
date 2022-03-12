import React, { FC } from 'react';
import { css } from '@emotion/css';

const styles = css``;

const InputError: FC = ({ children }) => {
    return <div className={styles}>{children}</div>;
};

export default InputError;
