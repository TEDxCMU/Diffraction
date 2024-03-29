import { useState, useEffect } from "react";
import { getInnovators } from "utils/content";
import styles from "components/expo.module.css";
import InnovatorCard from "components/InnovatorCard";

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
        <div className="pageContainer">
            <div>
                <text className={styles.header}>Innovation Expo</text>
                <div className="grid">
                    {loading ? (
                        <text>Loading</text>
                    ) : (
                        data?.map((item, id) => (
                            <InnovatorCard idx={id} innovator={item} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Expo;
