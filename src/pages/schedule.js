import { useState, useEffect } from "react";
import { getSchedule } from "utils/content";
import { Layout } from "components/layouts";

import styles from "./schedule.module.css";

function sortByTime(a, b) {
    console.log(new Date(b.start_time) - new Date(a.start_time));
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.start_time) - new Date(b.start_time);
}

function Schedule() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const content = await getSchedule();
        const events = content.map(({ data }) => data).sort(sortByTime);
        console.log(events);
        setData(events);
        setLoading(false);
    }

    return (
        <div className="pageContainer">
            <div className="title">Schedule</div>
            {loading ? (
                <p> Loading</p>
            ) : (
                data?.map((talks, idx) => {
                    return <Talks key={idx} {...talks} />;
                })
            )}
        </div>
    );
}

function Talks({ start_time, title, speaker, description, image, recording }) {
    const time = new Date(start_time).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
    });

    return (
        <div className={styles.card}>
            <p className={styles.about}>{time}</p>
            <div className={styles.container}>
                <div className={image?.url ? styles.left : styles.full}>
                    <h2 className="subheading titleCase">{title}</h2>
                    {speaker?.data && (
                        <p className={styles.about}>
                            {Object.values(speaker.data)[0]}
                        </p>
                    )} 
                    {description && (
                        <div className={styles.info}>
                            <p className={styles.about}>{description}</p>
                        </div>
                    )}
                    {recording.url ? (<div className={styles.links}><a
                        className={styles.button}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={recording.url}
                    >
                        Watch the talk!
                    </a></div>):<></>}
                </div>
                {image?.url && (
                    <div className={styles.right}>
                        <img width="100%" src={image.url}></img>
                    </div>
                )}
            </div>
        </div>
    );
}

Schedule.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default Schedule;
