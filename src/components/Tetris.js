import React, { useState, useRef, useEffect } from 'react';
import { createStage, checkCollision } from '../gameHelpers';
import { useSpring, animated } from 'react-spring';

// Components
import Stage from './Stage';
import Modal from './Modal';
import Footer from './Footer';
import Display from './Display';
import StartButton from './StartButton';

// Custom Hooks
import { useGameStatus } from '../hooks/useGameStatus';
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

// Styled
import { StyledTitle, StyledTetrisWrapper, StyledTetris } from '../static/styles/components/StyledTetris';

const Tetris = () => {
	const stageRef = useRef(null);
	const [ highScore, setHighScore ] = useState(localStorage.getItem('TetrisGameHS') || 0);
	const [ startedGame, setStartedGame ] = useState(false);
	const [ dropTime, setDropTime ] = useState(null);
	const [ gameOver, setGameOver ] = useState(false);
	const [ isOpenModal, setIsOpenModal ] = useState(false);
	const [ buttonText, setButtonText ] = useState('Start Game');

	const [ player, updatePlayerPos, resetPlayer, playerRotate ] = usePlayer();
	const [ stage, setStage, rowsCleared ] = useStage(player, resetPlayer);

	const [ score, setScore, rows, setRows, level, setLevel ] = useGameStatus(rowsCleared);

	useEffect(
		() => {
			if (score > highScore) {
				setHighScore(score);
				localStorage.setItem('TetrisGameHS', score);
			}
		},
		[ highScore, score ]
	);

	const movePlayer = (dir) => {
		if (!checkCollision(player, stage, { x: dir, y: 0 })) {
			updatePlayerPos({ x: dir, y: 0 });
		}
	};

	const drop = () => {
		// Increase Level when player has cleared 10 rows
		if (rows > (level + 1) * 10) {
			setLevel((prev) => prev + 1);
			// Also Increase Speed
			setDropTime(600 / (level + 1) + 200);
		}

		if (!checkCollision(player, stage, { x: 0, y: 1 })) {
			updatePlayerPos({ x: 0, y: 1, collided: false });
		} else {
			// Game Over
			if (player.pos.y < 1) {
				setGameOver(true);
				setDropTime(null);
				setIsOpenModal(true);
				setButtonText('Start New Game');
			}
			updatePlayerPos({ x: 0, y: 0, collided: true });
		}
	};

	const dropPlayer = () => {
		setDropTime(null);
		drop();
	};

	const keyUp = ({ keyCode }) => {
		if (!gameOver) {
			if (keyCode === 40) {
				setDropTime(600 / (level + 1) + 200);
			}
		}
	};

	const startGame = () => {
		// Reset everything
		setStage(createStage());
		setTimeout(() => {
			setDropTime(600);
		}, 500);

		resetPlayer();
		setGameOver(false);
		setRows(0);
		setScore(0);
		setLevel(1);
		setButtonText('Restart Game');
		setStartedGame(true);

		window.scrollTo(0, stageRef.current.offsetTop);
	};

	const move = ({ keyCode }) => {
		if (!gameOver) {
			console.log(keyCode);
			if (keyCode === 37) {
				movePlayer(-1);
			} else if (keyCode === 39) {
				movePlayer(1);
			} else if (keyCode === 40) {
				dropPlayer();
			} else if (keyCode === 38) {
				playerRotate(stage, 1);
			} else if (keyCode === 80) {
				if (dropTime) {
					setDropTime(null);
				} else {
					setDropTime(600 / (level + 1) + 200);
				}
			} else if (keyCode === 32) {
				//setDropTime(0);
			}
		}
	};

	useInterval(() => {
		drop();
	}, dropTime);

	const spring = useSpring({
		config: {
			duration: 500
		},
		to: {
			opacity: startedGame ? 1 : 0,
			transform: startedGame ? 'translateX(0)' : 'translateX(30vw)',
			display: startedGame ? 'block' : 'none'
		}
	});

	return (
		<StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={(e) => move(e)} onKeyUp={keyUp}>
			<StyledTetris>
				<aside>
					<StyledTitle>Tetris Game</StyledTitle>
					<div>
						<Display label="High Score" text={highScore} />
						{startedGame && (
							<React.Fragment>
								<Display label="Score" text={score} />
								<Display label="Rows" text={rows} />
								<Display label="Level" text={level} />
							</React.Fragment>
						)}
					</div>
					<StartButton callback={startGame} text={buttonText} />
				</aside>
				<animated.div style={spring}>
					<Stage stage={stage} stageRef={stageRef} />
				</animated.div>
				<Modal
					isOpen={isOpenModal}
					onClickButton={() => {
						setIsOpenModal(false);
					}}
				/>
			</StyledTetris>
			<Footer />
		</StyledTetrisWrapper>
	);
};

export default Tetris;
