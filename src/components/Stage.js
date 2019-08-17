import React from 'react';
import { useSpring, animated } from 'react-spring';

import Cell from './Cell';
import { StyledStage, StyledOverlayPause } from '../static/styles/components/StyledStage';

const Stage = ({ stage, stageRef, startedGame, onPause }) => {
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
		<animated.div style={spring}>
			<StyledOverlayPause paused={onPause}>Paused</StyledOverlayPause>
			<StyledStage ref={stageRef} width={stage[0].length} height={stage.length}>
				{stage.map((row) =>
					row.map((cell, index) => {
						return <Cell key={index} type={cell[0]} />;
					})
				)}
			</StyledStage>
		</animated.div>
	);
}

export default React.memo(Stage);
