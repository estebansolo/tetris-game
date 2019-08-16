import React from 'react';
import { StyledStartButton } from '../static/styles/components/StyledStartButton';

const StartButton = ({ callback, text }) => <StyledStartButton onClick={callback}>{text}</StyledStartButton>;

export default React.memo(StartButton);
