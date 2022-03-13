import React, { FC, InputHTMLAttributes } from 'react';

const Checkbox: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <input {...props} id={String(props.id)} type='checkbox' />
    )
};

export default Checkbox;