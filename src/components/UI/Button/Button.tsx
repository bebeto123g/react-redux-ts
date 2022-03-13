import React, { ButtonHTMLAttributes, FC } from 'react';

//bootstrap style
export interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'danger' | 'info' | 'warning' | 'primary';
    size?: 'sm' | 'lg';
    callback?: () => void;
    classNames?: string;
}

const Button: FC<ButtonPropsType> = ({
    variant,
    size,
    children,
    classNames,
    callback,
    ...props
}) => {
    const variantClass = variant ? ` btn-${variant}` : '';
    const sizeClass = size ? ` btn-${size}` : '';
    const propClasses = classNames ? ` ${classNames}` : '';

    return (
        <button
            {...props}
            className={`btn${variantClass}${sizeClass} ${propClasses}`}
            onClick={callback}
        >
            {children}
        </button>
    );
};

export default Button;
