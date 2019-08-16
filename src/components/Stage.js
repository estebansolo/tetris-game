import React from 'react';
import Cell from './Cell';
import { StyledStage } from '../static/styles/components/StyledStage';

const Stage = ({ stage, stageRef }) => (
	<StyledStage ref={stageRef} width={stage[0].length} height={stage.length}>
		{stage.map((row) =>
			row.map((cell, index) => {
				return <Cell key={index} type={cell[0]} />;
			})
		)}
	</StyledStage>
);

export default React.memo(Stage);
