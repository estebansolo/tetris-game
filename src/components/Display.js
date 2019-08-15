import React from 'react';
import { StyledDisplay } from '../static/styles/components/StyledDisplay';

export const Display = ({ gameOver, text }) => <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>;
