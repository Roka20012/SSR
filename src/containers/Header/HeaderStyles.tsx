import styled from 'styled-components';

export const StyledHeader = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	flex-wrap: wrap;
	font-family: sans-serif;
	word-break: break-all;
	text-align: center;
	overflow: hidden;
	padding: 5px 0 32px;
	margin: 0 auto;
	margin-bottom: 30px;
	width: 100%;
	font-family: Quicksand, arial, sans-serif;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

	&:hover {
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 0px 40px rgba(0, 0, 0, 0.1);
	}
`;

export const Button = styled.button`
	display: block;
	width: 20%;
	min-width: 200px;
	padding: 12px 0;
	font-family: inherit;
	margin-top: 10px;
	margin-left: 10px;
	margin-right: 10px;
	font-size: 14px;
	font-weight: 700;
	color: #fff;
	background-color: #e5195f;
	border: 0;
	border-radius: 35px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
	cursor: pointer;
	transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

	&:hover {
		box-shadow: 0 10px 10px rgba(0, 0, 0, 0.16);
		transform: translate(0, -1px);
	}

	@media screen and (max-width: 475px) {
		width: 90%;
		max-width: 400px;
	}
`;
