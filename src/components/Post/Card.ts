import styled from 'styled-components';

export const CardWrapper = styled.div`
	font-family: sans-serif;
	word-break: break-all;
	text-align: center;
	overflow: hidden;
	padding: 20px 0 32px;
	margin: 48px auto 0;
	width: 90%;
	max-width: 500px;
	font-family: Quicksand, arial, sans-serif;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
	border-radius: 5px;
	transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

	&:hover {
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 0px 40px rgba(0, 0, 0, 0.1);
	}
`;

export const CardHeader = styled.header`
	text-transform: uppercase;
	padding-top: 32px;
`;

export const CardHeading = styled.h1`
	font-size: 24px;
	padding: 10px;
	font-weight: bold;
	text-align: center;
`;

export const CardBody = styled.div`
	padding: 15px 32px;
`;

export const CardFieldset = styled.fieldset`
	position: relative;
	padding: 0;
	margin: 0;
	border: 0;

	& + & {
		margin-top: 24px;
	}

	&:nth-last-of-type(2) {
		margin-top: 32px;
	}

	&:last-of-type {
		text-align: center;
	}
`;


export const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 17px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const CardOptionsNote = styled.small`
	display: block;
	width: 100%;
	font-size: 20px;
	text-align: center;
	padding: 10px;
`;

export const CardOptions = styled.ul`
	padding: 0;
	margin: 16px 0 8px;
	display: flex;
	justify-content: space-between;
	width: 100%;
	list-style-type: none;
`;

export const CardOptionsItem = styled.li`
	margin: 0 auto;
	width: 100%;
	max-width: 200px;
	&:nth-of-type(n + 2) {
		margin-left: 16px;
	}
`;

export const CardButton = styled.button`
	display: block;
	width: 100%;
	padding: 12px 0;
	font-family: inherit;
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
	}
`;
