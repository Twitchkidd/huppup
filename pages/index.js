import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

const Title = styled.h1`
	margin: 0;
	line-height: 1.15;
	font-size: 4rem;
	text-align: center;
	color: pink;
`;

export default function Home() {
	return (
		<div>
			<Head>
				<title>HupPup!</title>
				<meta
					name='description'
					content='Dog running, New London, Connecticut'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Title>
					Welcome to <a href='#'>HupPup!</a>
				</Title>

				<p>
					Get started by editing <code>pages/index.js</code>
				</p>

				<div>
					<a href='https://nextjs.org/docs'>
						<h2>Documentation &rarr;</h2>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a href='https://nextjs.org/learn'>
						<h2>Learn &darr;</h2>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>

					<a href='https://github.com/vercel/next.js/tree/canary/examples'>
						<h2>Examples &uarr;</h2>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'>
						<h2>Deploy &larr;</h2>
						<p>
							Instantly deploy your Next.js site to a public URL with Vercel.
						</p>
					</a>
				</div>
			</main>

			<footer>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					Powered by{' '}
					<span>
						<Image
							src='/huppup.svg'
							alt='Vercel Logo'
							width={120}
							height={120}
						/>
					</span>
				</a>
			</footer>
		</div>
	);
}
