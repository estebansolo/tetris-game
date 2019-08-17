import React from 'react';
import { StyledDisplay, StyledLabel } from '../static/styles/components/StyledDisplay';

const Display = ({ gameOver, label, text, size }) => {
    return (
        <StyledDisplay gameOver={gameOver} size={size}>
            {label}
            <StyledLabel>{text}</StyledLabel>
        </StyledDisplay>
    )
};

export default React.memo(Display)