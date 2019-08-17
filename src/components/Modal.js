import React, { useRef } from 'react';
import Modal from 'react-modal';
import { StyledModalOptions, StyledModalBody, StyledModalContent, StyledModalButtons } from '../static/styles/components/StyledTetris';

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

export default ({ isOpen, onClickButton }) => {
	const optRef = useRef(null)

	const onModalOpen = () => {
		optRef.current.focus()
	}

	return (
		<Modal
			style={customStyles}
			ariaHideApp={false}
			isOpen={isOpen}
			contentLabel="Game Over"
			closeTimeoutMS={800}
			className="modal"
			onAfterOpen={onModalOpen}
		>
			<StyledModalBody>GAME OVER</StyledModalBody>
			<StyledModalContent>Play Again?</StyledModalContent>
			<StyledModalOptions>
				<StyledModalButtons ref={optRef} onClick={() => onClickButton(true)}>Yes</StyledModalButtons>
				<StyledModalButtons onClick={() => onClickButton(false)}>No</StyledModalButtons>
			</StyledModalOptions>
		</Modal>
	);
}