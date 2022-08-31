import { css } from 'styled-components';

const size = {
	small: 640,
	med: 768,
	large: 1024,
};

export const above = Object.keys(size).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${size[label] / 16}em) {
			${css(...args)}
		}
	`;
	return acc;
}, {});

export const below = Object.keys(size).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${size[label] / 16}em) {
			${css(...args)}
		}
	`;
	return acc;
}, {});

// import { above } from '../utils';

// const CoverImageWrap = styled.div`
// 	margin-bottom: 2rem;
// 	${above.med`
// 		margin-bottom: 4rem;
// 	`}
// 	max-width: 100%;
// `;
