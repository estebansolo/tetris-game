import React from 'react';
import { StyledCell } from '../static/styles/components/StyledCell';
import { TETROMINOS } from '../tetrominos';

export const Cell = ({ type }) => <StyledCell type={type} color={TETROMINOS[type].color} />;
