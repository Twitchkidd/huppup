import styled from 'styled-components';
import Image from 'next/future/image';

const FullWidth = styled(Image)`
	// https://twitter.com/una/status/951519740840873984?s=21
	left: 50%;
	margin-left: -50vw;
	margin-right: -50vw;
	max-width: 100vw;
	position: relative;
	right: 50%;
	width: 100vw;

	height: 100%;
`;

export default FullWidth;
