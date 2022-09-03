import { useState, useEffect } from 'react';
import styled from 'styled-components';
import DeviceOrientation from 'react-device-orientation';

const Button = styled.button`
	height: 300px;
	width: 200px;
`;

const Box = styled.div`
	height: 40px;
	width: 40px;
	background: var(--pink);
	position: absolute;
	left: ${props => `${props.left * 5 + 100}px`};
	bottom: 0;
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
			<div style={{ position: 'relative' }}>
				<h1>Heya!</h1>
				{hasOrientationPermission ? (
					<DeviceOrientation>
						{({ absolute, alpha, beta, gamma }) => (
							<div>
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
			<Button onClick={handleClick} disabled={!inBrowser}>
				Give website motion and orientation data?
			</Button>
			{/* {hasOrientationPermission ? (
				<DeviceOrientation>
					{({ absolute, alpha, beta, gamma }) => (
						<div style={{ fontSize: 'var(--fs-200)' }}>
							<p>Absolute: {absolute}</p>
							<p>Alpha: {alpha}</p>
							<p>Beta: {beta}</p>
							<p>Gamma: {gamma}</p>
						</div>
					)}
				</DeviceOrientation>
			) : null} */}
		</div>
	);
}
