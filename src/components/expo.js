import { useState, useEffect } from 'react';
import { getInnovators } from 'utils/content';
import styles from 'components/expo.module.css';
// import InnovatorGrid from 'components/innovator-grid';
import InnovatorCard from 'components/InnovatorCard';
// import BG from 'assets/expo_bg.svg';

function Expo() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const content = await getInnovators();
        const innovators = content.map(({ data }) => data);
        // setData(innovators);
        setData(innovators);
        setLoading(false);
    }

    console.log(data);

    return (
        <> 
            {/* <div className={styles.container}> */}
                <div className={styles.background}>
                    <div className="grid">
                        <text className={styles.header}>Innovation Expo</text>
                            {/* <div>
                                <text className={styles.header}>Innovation Expo</text>
                                <text className={styles.description}>a short description</text>
                            </div> */}
                            {loading ? (
                                <text>Loading</text>
                            ) : (
                                data.map((item, id) => <InnovatorCard key={id} innovator={item} />)
                            )}
                    </div>
            </div>
			{/* </div> */}
            {/* <Background /> */}
            {/* <div className={styles.background}>
                <main className={styles.container}>
                    <h1 className={styles.header}>
                        Innovation Expo
                    </h1>
                    <p className={styles.description}>
                        Short Description of what Innovation Expo is
                    </p>
                    {loading ? (
                        <text>Loading</text>
                        ) : (
                            data.map((item, id) => <InnovatorCard key={id} innovator={item} />)
                    )} */}
                    {/* <InnovatorGrid innovators={data}/> */}
                {/* </main> */}
            {/* </div> */}
        </>
    );
}

export default Expo;
