import React from 'react';

interface ButtonProps {
    disabled?: boolean;
    className?: string; // Corrected the spelling of 'className'
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ disabled, children, className }) => { // Corrected the spelling of 'clasName' to 'className'
    return (
        <button disabled={disabled} className={className}> 
            {children}
        </button>
    );
};

export default Button;