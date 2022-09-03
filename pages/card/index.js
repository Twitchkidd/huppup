import { useState, useEffect } from 'react';
import styled from 'styled-components';
import DeviceOrientation from 'react-device-orientation';

const Button = styled.button`
	height: 100px;
	width: 300px;
`;

const Box = styled.div`
	height: 200px;
	width: 400px;
	background: var(--pink);
	position: absolute;
	/* left: calc(50% - 20px + ${props => props.left * 5}px); */
	left: calc(50% - 200px);
	bottom: 0;
	/* This is dumb. The easiest thing is to conditionally render the button and then only have the card on the screen. One div. Homework. */
	transform: rotateZ(${props => props.left}deg);
`;

// use `ngrok http 3000` to get https localhost!

export default function Card() {
	const [inBrowser, setInBrowser] = useState(false);
	const [hasOrientationPermission, setHasOrientationPermission] =
		useState(false);
	const handleClick = () => {
		if (typeof DeviceOrientationEvent.requestPermission === 'function') {
			DeviceOrientationEvent.requestPermission()
				.then(permissionState => {
					if (permissionState === 'granted') {
						setHasOrientationPermission(true);
					}
				})
				.catch(console.error);
		} else {
			// handle regular non iOS 13+ devices
			console.error("whoops, how'd we get here?");
		}
	};
	useEffect(() => {
		setInBrowser(true);
	}, []);
	return (
		<div style={{ display: 'flex' }}>
			<div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
				<h1>Heya!</h1>
				<Button onClick={handleClick} disabled={!inBrowser}>
					Give website motion and orientation data?
				</Button>
			</div>
			<div style={{ position: 'relative', width: '100%' }}>
				{hasOrientationPermission ? (
					<DeviceOrientation>
						{({ absolute, alpha, beta, gamma }) => (
							<div
								style={{ perspective: '400px', background: 'var(--gray-300)' }}>
								<Box left={beta} />
								<p
									style={{
										width: '6ch',
										overflow: 'hidden',
										whiteSpace: 'nowrap',
										textOverflow: 'ellipsis',
									}}>
									{beta}
								</p>
							</div>
						)}
					</DeviceOrientation>
				) : null}
			</div>
		</div>
	);
}
