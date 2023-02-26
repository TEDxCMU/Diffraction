import { useState, useEffect } from 'react';
import { getInnovators } from 'utils/content';
import ExpoComp from 'components/expo';
import styles from 'components/InnovatorCard';

function InnovationExpo() {
    const [data, setData] = useState(null);

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const content = await getInnovators();
        const innovators = content.map(({ data }) => data);
        console.log(innovators);
        setData(content);
    }

    return (
        <ExpoComp />
    );
}

export default InnovationExpo;
