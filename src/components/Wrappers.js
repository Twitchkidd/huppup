import styled from 'styled-components';

export const LandingWrap = styled.div`
	background: linear-gradient(
		var(--purple-900),
		var(--blue-700),
		var(--green),
		var(--pink-300)
	);
	min-height: 100vh;
	overflow-x: hidden;
`;

export const ContentWrap = styled.div`
	width: min(100%, 64rem);
	margin-inline: auto;
`;
