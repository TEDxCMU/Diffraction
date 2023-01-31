import { useState, useEffect } from 'react';
import { getSpeakers } from 'utils/content';

function Speakers() {
  const [data, setData] = useState(null);

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const content = await getSpeakers();
    const speakers = content.map(({ data }) => data);
    console.log(speakers);
    setData(content);
  }

  return <div>Speakers</div>;
}

export default Speakers;
