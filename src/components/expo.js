import { useState, useEffect } from 'react';
import { getInnovators } from 'utils/content';
import styles from 'components/expo.module.css';
import InnovatorGrid from 'components/innovator-grid';


function Expo() {
    const [data, setData] = useState([]);


    useEffect(() => {
        init();
    }, []);

    async function init() {
        const content = await getInnovators();
        setData(content)
    }

    console.log(data);

    return (
        <> 
            {/* <Background /> */}
            <main className={styles.container}>
                <h1 className={styles.header}>
                    Innovation Expo
                </h1>
                <p className={styles.description}>
                    Short Description of what Innovation Expo is
                </p>
                <InnovatorGrid innovators={data}/>
            </main>
        </>
    );
}

export default Expo;
