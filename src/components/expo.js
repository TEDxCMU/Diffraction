import { useState, useEffect } from 'react';
import { getInnovators } from 'utils/content';
import styles from 'components/expo.module.css';
import InnovatorCard from 'components/InnovatorCard';

function Expo() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const content = await getInnovators();
        const innovators = content.map(({ data }) => data);
        setData(innovators);
        console.log(data);
        setLoading(false);
    }

    return (
        <> 
            <div className={styles.container}>
            <div className={styles.background}>
                <text className={styles.header}>Innovation Expo</text>
                <text className={styles.description}>Short description of what innovation expo is</text>
                    <div className="grid">
                            {loading ? (
                                <text>Loading</text>
                            ) : (
                                data?.map((item, id) => <InnovatorCard idx={id} innovator={item}/>)
                            )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Expo;
