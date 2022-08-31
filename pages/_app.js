import Global from 'components/Global';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Global />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
