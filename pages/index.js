import Head from 'next/head';
import { LandingWrap, ContentWrap } from 'components/Wrappers';
import FullWidth from 'components/FullWidth';
import doggie from 'assets/images/doggie.jpg';

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
			<ContentWrap>
				<h1>HupPup!</h1>
				<h2>Dog Running</h2>
				<h3>Also Some Words!</h3>
				<h4>Someone Call For Words?</h4>
				<h5>WORDS! We Got Em!</h5>
				<h6>WORDS ALL DAY ALRIIIGHT YEA!!!</h6>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
					accusantium perferendis numquam, quae totam praesentium neque.
					Accusantium molestias veniam dolor, ipsa magni ea voluptatem omnis
					aliquam illo accusamus est sed culpa necessitatibus!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
					nobis at, sequi numquam reprehenderit deserunt repellendus soluta,
					dolor exercitationem veritatis aperiam. Quibusdam mollitia cum
					similique pariatur repellendus, placeat voluptatem dolorum harum
					impedit odit reiciendis praesentium nesciunt recusandae perferendis,
					in quae deleniti, exercitationem eum illo ipsa.
				</p>
				<ul>
					<li>Lorem, ipsum dolor</li>
					<li>Lorem, ipsum dolor</li>
					<li>Lorem, ipsum dolor</li>
					<li>Lorem, ipsum dolor</li>
					<li>Lorem, ipsum dolor</li>
				</ul>
				<FullWidth src={doggie} alt='Running dog, very cute' />
				<footer style={{ paddingBlock: '16px' }}>
					<span>And that's a wrap!</span>
				</footer>
			</ContentWrap>
		</LandingWrap>
	);
}
