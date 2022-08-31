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
	font-family: var(--serif);
	font-size: var(--fs-x-large);
`;

const P = styled.p`
	font-family: var(--sans);
`;

const Small = styled.p`
	font-size: var(--fs-small);
`;

const Display = styled.h2`
	font-family: var(--display);
	font-size: var(--fs-large);
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
			<P>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde itaque
				assumenda ipsa alias minus dolorem mollitia incidunt nihil possimus
				voluptatem odio error distinctio ratione quia, ipsum quod eum et
				molestiae voluptates excepturi eius numquam. Repellat similique vero aut
				odio facere cupiditate amet, facilis voluptas ullam assumenda voluptatem
				tempora quasi provident eius aspernatur quia eos veniam, sunt quisquam
				debitis necessitatibus culpa? Deleniti nostrum autem odio unde fuga,
				voluptate laborum saepe, quis nam, voluptatibus debitis voluptates? Ipsa
				laborum maiores hic aut ad.
			</P>
			<Small>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
				nesciunt repellat? Quidem molestias eveniet soluta iusto nihil. Possimus
				tenetur molestias illum architecto fugit ipsa qui dicta odit placeat
				pariatur explicabo commodi, laboriosam impedit tempore debitis,
				doloremque corporis, autem omnis magni odio vitae quisquam delectus
				magnam? In hic corrupti obcaecati minus. Quisquam iste fugiat quas
				eveniet laborum nulla, in harum repellendus debitis, inventore explicabo
				ipsum voluptates tempore facilis voluptatibus neque praesentium quae.
				Laboriosam similique eos minus minima in impedit optio debitis error,
				dolorum nostrum iure, earum beatae quae asperiores nam delectus odio
				nulla. Beatae, magni. Maxime, enim ut illum labore est sint, iure dolor
				sed corrupti esse aspernatur ex earum expedita quod animi, odit delectus
				beatae! Molestiae necessitatibus quo corporis hic?
			</Small>
			<Display>Oh wow! What a deal!</Display>
			<Image src='/huppup.svg' alt='HupPup Logo' width={120} height={120} />
		</AppWrap>
	);
}
