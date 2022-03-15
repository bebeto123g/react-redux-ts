import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface ButtonLinkPropsTypes extends LinkProps {
    variant?: 'danger' | 'info' | 'warning' | 'primary';
    size?: 'sm' | 'lg';
}

const ButtonLink: FC<ButtonLinkPropsTypes> = ({ variant, size, children, className, ...props }) => {
    const variantClass = variant ? ` btn-${variant}` : '';
    const sizeClass = size ? ` btn-${size}` : '';
    const propClasses = className ? ` ${className}` : '';

    return (
        <Link {...props} className={`btn${variantClass}${sizeClass}${propClasses}`}>
            {children}
        </Link>
    );
};

export default ButtonLink;
