import React from 'react';
import { StyledDisplay, StyledLabel } from '../static/styles/components/StyledDisplay';

const Display = ({ gameOver, label, text }) => {
    return (
        <StyledDisplay gameOver={gameOver}>
            {label}
            <StyledLabel>{text}</StyledLabel>
        </StyledDisplay>
    )
};

export default React.memo(Display)