import React, { useState } from 'react';
import { createStage, checkCollision } from '../gameHelpers';

// Components
import Stage from './Stage';
import Modal from './Modal';
import Display from './Display';
import StartButton from './StartButton';

// Custom Hooks
import { useGameStatus } from '../hooks/useGameStatus'
import { useInterval } from '../hooks/useInterval'
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

// Styled
import { StyledTitle, StyledTetrisWrapper, StyledTetris } from '../static/styles/components/StyledTetris';

const Tetris = () => {
	const [ dropTime, setDropTime ] = useState(null);
	const [ gameOver, setGameOver ] = useState(false);
	const [ isOpenModal, setIsOpenModal ] = useState(false)

	const [ player, updatePlayerPos, resetPlayer, playerRotate ] = usePlayer();
	const [ stage, setStage, rowsCleared ] = useStage(player, resetPlayer);

	const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared)

	const movePlayer = (dir) => {
		if (!checkCollision(player, stage, { x: dir, y: 0 })) {
			updatePlayerPos({ x: dir, y: 0 });
		}
	};

	const drop = () => {
		// Increase Level when player has cleared 10 rows
		if(rows > (level + 1) * 10){
			setLevel(prev => prev + 1)
			// Also Increase Speed
			setDropTime(1000 / (level + 1) + 200)
		}

		if (!checkCollision(player, stage, { x: 0, y: 1 })) {
			updatePlayerPos({ x: 0, y: 1, collided: false });
		} else {
			// Game Over
			if (player.pos.y < 1) {
				setGameOver(true);
				setDropTime(null);
				setIsOpenModal(true)
			}
			updatePlayerPos({ x: 0, y: 0, collided: true });
		}
	};

	const dropPlayer = () => {
		setDropTime(null)
		drop();
	};

	const keyUp = ({keyCode}) => {
		if(!gameOver){
			if(keyCode === 40){
				setDropTime(1000 / (level + 1) + 200)
			}
		}
	}

	const startGame = () => {
		// Reset everything
		setStage(createStage());
		setDropTime(1000)
		resetPlayer();
		setGameOver(false);
		setRows(0)
		setScore(0)
		setLevel(0)
	};

	const move = ({ keyCode }) => {
		if (!gameOver) {
			if (keyCode === 37) {
				movePlayer(-1);
			} else if (keyCode === 39) {
				movePlayer(1);
			} else if (keyCode === 40) {
				dropPlayer();
			} else if(keyCode === 38){
				playerRotate(stage, 1)
			}
		}
	};

	useInterval(() => {
		drop()
	}, dropTime)

	return (
		<StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={(e) => move(e)} onKeyUp={keyUp}>
			<StyledTetris>
				<Stage stage={stage} />
				<aside>
					<StyledTitle>Tetris Game</StyledTitle>
					<div>
						<Display label="Score" text={score} />
						<Display label="Rows" text={rows} />
						<Display label="Level" text={level} />
					</div>
					<StartButton callback={startGame} />
				</aside>
				<Modal isOpen={isOpenModal} onClickButton={() => {setIsOpenModal(false)}}/>
			</StyledTetris>
		</StyledTetrisWrapper>
	);
};

export default Tetris;
