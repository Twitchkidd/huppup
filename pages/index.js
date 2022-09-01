import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import LandingWrap from 'components/LandingWrap';

export default function Home() {
	return (
		<LandingWrap>
			<Head>
				<title>HupPup!</title>
				<meta
					name='description'
					content='Dog running, New London, Connecticut'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
		</LandingWrap>
	);
}
