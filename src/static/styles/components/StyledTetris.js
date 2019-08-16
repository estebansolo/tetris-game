import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background: #f9ebc3;
	background-size: cover;
	overflow: hidden;
`;

export const StyledTetris = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	/*padding: 40px;*/
	max-width: 900px;
	margin: 0 auto;

	aside {
		width: 100%;
		max-width: 30vw;
		display: block;
		padding: 0 15px;
	}
`;

export const StyledTitle = styled.div`
	font-family: Pixel,Arial,Helvetica,sans-serif;
	font-size: 3rem;
	margin-bottom: 2rem;
	text-align: center;
`

export const StyledModalBody = styled.div`
	font-family: Pixel,Arial,Helvetica,sans-serif;
	font-size: 2rem;
	font-weight: 300;
	word-break: break-all;
	text-align: center;
	padding: 20px;
`