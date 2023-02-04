import { useState, useEffect } from 'react';
import { getSpeakers } from 'utils/content';
import SpeakerCard from 'components/SpeakerCard';

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
			<text className="headingFull">Speakers</text>
			{loading ? (
				<text>Loading</text>
			) : (
				data.map((item) => <SpeakerCard speaker={item} />)
			)}
		</>
	);
}

export default Speakers;
