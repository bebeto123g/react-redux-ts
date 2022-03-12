import React, { FC } from 'react';
import { css } from '@emotion/css';

const styles = css`
    font-family: 'Golos', -apple-system, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
        'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 8px;
    color: #aa0000;
    display: flex;
    align-items: center;

    &::before {
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin-right: 8px;
        background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 8C0 12.4112 3.5888 16 8 16C12.4112 16 16 12.4112 16 8C16 3.5888 12.4112 0 8 0C3.5888 0 0 3.5888 0 8ZM4.70506 4.70503C4.97843 4.43166 5.42164 4.43166 5.69501 4.70503L8.00001 7.01004L10.305 4.70502C10.5784 4.43166 11.0216 4.43166 11.295 4.70503C11.5683 4.97839 11.5683 5.42161 11.295 5.69498L8.98995 7.99999L11.295 10.305C11.5683 10.5784 11.5683 11.0216 11.295 11.295C11.0216 11.5683 10.5784 11.5683 10.305 11.295L8.00001 8.98994L5.69497 11.295C5.4216 11.5683 4.97839 11.5683 4.70502 11.295C4.43166 11.0216 4.43166 10.5784 4.70503 10.305L7.01006 7.99999L4.70506 5.69497C4.4317 5.42161 4.4317 4.97839 4.70506 4.70503Z' fill='%23AA0000'/%3E%3C/svg%3E%0A");
    }
`;

const InputError: FC = ({ children }) => {
    return <div className={styles}>{children}</div>;
};

export default InputError;
