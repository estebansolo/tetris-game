import React from 'react'
import Display from './Display';
import { STROKES as strokes } from '../gameHelpers'
import { StyledStrokes } from '../static/styles/components/StyledStrokes'

const Strokes = () => {
    return (
        <StyledStrokes>
            {strokes.map((stroke, index) => (
                <Display key={index} {...stroke} />)
            )}
        </StyledStrokes>
    )
}

export default React.memo(Strokes)