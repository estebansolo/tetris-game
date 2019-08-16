import styled from 'styled-components';

export const StyledStage = styled.div`
	display: grid;
	grid-template-rows: repeat(${(props) => props.height}, calc(439px / ${(props) => props.width}));
	grid-template-columns: repeat(${(props) => props.width}, 1fr);
	grid-gap: 1px;
	border: 2px solid #333;
	width: 450px;
	/*display: ${(props) => (props.startedGame ? 'grid' : 'none')};*/
	background: #111;
`;
