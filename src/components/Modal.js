import React from 'react';
import Modal from 'react-modal';
import { StyledStartButton } from '../static/styles/components/StyledStartButton';
import { StyledModalBody, StyledModalContent } from '../static/styles/components/StyledTetris';

const customStyles = {
	overlay: {},
	content: {
		width: '100vw',
		height: '100vh',
		background: '#000',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	}
};

export default ({ isOpen, onClickButton }) => (
	<Modal
		style={customStyles}
		ariaHideApp={false}
		isOpen={isOpen}
		contentLabel="Game Over"
		closeTimeoutMS={800}
		className="modal"
	>
		<StyledModalBody>GAME OVER</StyledModalBody>
		<StyledModalContent>Play Again?</StyledModalContent>
	</Modal>
);

/*

		<StyledStartButton onClick={onClickButton}>Okay</StyledStartButton>
*/
