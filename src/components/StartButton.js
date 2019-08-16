import React from 'react';
import { StyledStartButton } from '../static/styles/components/StyledStartButton';

const StartButton = ({ callback }) => <StyledStartButton onClick={callback}>Start Game</StyledStartButton>;

export default React.memo(StartButton)
