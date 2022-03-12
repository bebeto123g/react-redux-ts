import React from 'react';
import SwitchRoutes from './routes/SwitchRoutes';
import './styles/common.scss';
import { css } from '@emotion/css';

const styles = css`
    min-height: 100vh;
    overflow-x: hidden;
`;

const App = () => {
    return (
        <div className={styles}>
            <SwitchRoutes />
        </div>
    );
};

export default App;
