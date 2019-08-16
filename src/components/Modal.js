import React from 'react'
import Modal from 'react-modal';
import { StyledStartButton} from '../static/styles/components/StyledStartButton'
import { StyledModalBody } from '../static/styles/components/StyledTetris'

const customStyles = {
	overlay: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	content : {
		background: '#fff',
		padding: '20px 40px',
		border: '1px solid #000'
	}
};

export default ({isOpen, onClickButton}) => (
	<Modal
		style={customStyles}
		ariaHideApp={false}
		isOpen={isOpen}
		contentLabel="Game Over"
		closeTimeoutMS={200}
		className="modal"
	>
		<StyledModalBody>GAME OVER</StyledModalBody>
		<StyledStartButton onClick={onClickButton}>
			Okay
		</StyledStartButton>
	</Modal>
)