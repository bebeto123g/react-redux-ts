import React, { FC } from 'react';
import { css } from '@emotion/css';

const styles = css`
  font-family: 'Golos', -apple-system, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 24px;
  color: #0E0E0F;
`;

const BlockTitle: FC = ({children}) => {
    return <h3 className={styles}>{children}</h3>
}

export default BlockTitle;
