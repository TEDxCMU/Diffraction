import { useState, useEffect } from 'react';
import { getSpeakers } from 'utils/content';
import SpeakerCard from 'components/SpeakerCard';

import styles from './speakers.module.css';

function Speakers() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		init();
	}, []);

	async function init() {
		const content = await getSpeakers();
		const speakers = content.map(({ data }) => data);
		setData(speakers);
		setLoading(false);
	}

	return (
		<>
			<div className={styles.bg}>
				<div className="grid">
					<text className={styles.headingFull}>Speakers</text>
					<text className={styles.description}>a short description</text>
					{loading ? (
						<text>Loading</text>
					) : (
						data.map((item, id) => <SpeakerCard key={id} speaker={item} />)
					)}
				</div>
			</div>
		</>
	);
}

export default Speakers;
