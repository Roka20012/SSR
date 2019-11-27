import styled from 'styled-components';

export const Footer = styled.footer`
	word-break: break-all;
	text-align: center;
	width: 100%;
	height: 100px;
	vertical-align: middle;
	line-height: 100px;
	margin-top: 85px;
    font-size: 15px;
	font-family: Quicksand, arial, sans-serif;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

	&:hover {
		box-shadow: 0 0px 40px rgba(0, 0, 0, 0.1), 0 0px 40px rgba(0, 0, 0, 0.1);
	}
`;
