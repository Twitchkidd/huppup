import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import AppWrap from 'components/AppWrap';

const Title = styled.h1`
	margin: 0;
	line-height: 1.15;
	font-size: 4rem;
	text-align: center;
	color: var(--purple);
`;

export default function Home() {
	return (
		<AppWrap>
			<Head>
				<title>HupPup!</title>
				<meta
					name='description'
					content='Dog running, New London, Connecticut'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Title>Welcome to HupPup!</Title>
			<Image src='/huppup.svg' alt='HupPup Logo' width={120} height={120} />
		</AppWrap>
	);
}
