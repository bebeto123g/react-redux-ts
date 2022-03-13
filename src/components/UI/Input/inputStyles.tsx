import styled from '@emotion/styled';

export const InputStyles = styled.input<{error: boolean}>`
    font-family: 'Golos', -apple-system, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
        'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    padding: 12px 16px;
    border: 1px solid ${(props) => (props.error ? '#aa0000' : '#C4C8D0')};
    outline: none;
    border-radius: 4px;
`;
