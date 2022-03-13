import React, { FC } from 'react';
import { css } from '@emotion/css';

const styles = css`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 24px;
`;

const BlockTitle: FC = ({children}) => {
    return <h3 className={styles}>{children}</h3>
}

export default BlockTitle;
