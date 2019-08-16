import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	background: #f9ebc3;
	background-size: cover;
	overflow: hidden;
`;

export const StyledTetris = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	/*padding: 40px;*/
	max-width: 900px;
	margin: 0 auto;
	min-height: 94vh;

	aside {
		width: 100%;
		max-width: 340px;
		display: block;
		padding: 0 15px;
	}

	@media all and (max-width: 820px) {
		flex-direction: column;
		padding: 15px 0;

		aside {
			padding: 20px;
		}
	}
`;

export const StyledTitle = styled.div`
	font-family: Pixel, Arial, Helvetica, sans-serif;
	font-size: 3rem;
	margin-bottom: 2rem;
	text-align: center;
`;

export const StyledModalBody = styled.div`
	font-family: Pixel, Arial, Helvetica, sans-serif;
	font-size: 7rem;
	font-weight: 300;
	word-break: break-all;
	text-align: center;
	padding: 20px;
	color: white;
`;

export const StyledModalContent = styled.div`
	font-family: Pixel, Arial, Helvetica, sans-serif;
	font-size: 3rem;
	word-break: break-all;
	text-align: center;
	color: white;
`;
