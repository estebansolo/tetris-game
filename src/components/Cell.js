import React from 'react';
import { StyledCell } from '../static/styles/components/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => {
    return (
        <StyledCell type={type} color={TETROMINOS[type].color} />
    );
}

export default React.memo(Cell)
