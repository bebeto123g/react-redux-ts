import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface ButtonLinkPropsTypes {
    variant?: 'danger' | 'info' | 'warning' | 'primary';
    size?: 'sm' | 'lg';
    classNames?: string;
    to: string;
}

const ButtonLink: FC<ButtonLinkPropsTypes> = ({ variant, size, children, classNames, to }) => {
    const variantClass = variant ? ` btn-${variant}` : '';
    const sizeClass = size ? ` btn-${size}` : '';
    const propClasses = classNames ? ` ${classNames}` : '';

    return (
        <Link to={to} className={`btn${variantClass}${sizeClass} ${propClasses}`}>
            {children}
        </Link>
    );
};

export default ButtonLink;
