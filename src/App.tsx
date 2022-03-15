import React from 'react';
import SwitchRoutes from './routes/SwitchRoutes';
import './styles/common.scss';
import { css } from '@emotion/css';
import Container from './components/UI/Continer';

const styles = css`
    min-height: 100vh;
    overflow-x: hidden;
`;

const App = () => {
    return (
        <div className={styles}>
            <Container>
                <SwitchRoutes />
            </Container>
        </div>
    );
};

export default App;
