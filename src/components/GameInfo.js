import React from 'react'
import Display from './Display';
import Strokes from './Strokes';
import StartButton from './StartButton';
import { StyledTitle } from '../static/styles/components/StyledTetris';

const GameInfo = ({highScore, startedGame, score, rows, level, startGame, buttonText}) => {
    return (
        <aside>
            <StyledTitle>Tetris Game</StyledTitle>
            <div>
                <Display label="High Score" text={highScore} size="1.3rem"/>
                {startedGame && (
                    <React.Fragment>
                        <Display label="Score" text={score} />
                        <Display label="Rows" text={rows} />
                        <Display label="Level" text={level} />
                    </React.Fragment>
                )}
            </div>
            <StartButton callback={startGame} text={buttonText} />
            <Strokes />
        </aside>
    )
}

export default React.memo(GameInfo)