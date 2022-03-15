import React, { ButtonHTMLAttributes, FC } from 'react';

//bootstrap style
export interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'danger' | 'info' | 'warning' | 'primary';
    size?: 'sm' | 'lg';
}

const Button: FC<ButtonPropsType> = ({ variant, size, children, className, ...props }) => {
    const variantClass = variant ? ` btn-${variant}` : '';
    const sizeClass = size ? ` btn-${size}` : '';
    const propClasses = className ? ` ${className}` : '';

    return (
        <button {...props} className={`btn${variantClass}${sizeClass}${propClasses}`}>
            {children}
        </button>
    );
};

export default Button;
