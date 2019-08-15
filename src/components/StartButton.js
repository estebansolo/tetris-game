import React from 'react';
import { StyledStartButton } from '../static/styles/components/StyledStartButton';

export const StartButton = ({ callback }) => <StyledStartButton onClick={callback}>Start Game</StyledStartButton>;
