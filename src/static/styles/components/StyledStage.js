import styled from 'styled-components';

export const StyledStage = styled.div`
	display: grid;
	grid-template-rows: repeat(${(props) => props.height}, calc(340px / ${(props) => props.width}));
	grid-template-columns: repeat(${(props) => props.width}, 1fr);
	grid-gap: 1px;
	border: 2px solid #333;
	width: 351px;
	background: #111;
`;

export const StyledOverlayPause = styled.div`
	background-color: white;
	font-family: Pixel,Arial,Helvetica;
	opacity: 0.7;
	position: absolute;
	width: 100%;
	height: 100%;
	display: ${(props) => (props.paused ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	font-size: 3.5rem;
`