import { useState, useEffect } from "react";
import { getSchedule } from "utils/content";
import { Layout } from "components/layouts";

import styles from "./schedule.module.css";

function Schedule() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const content = await getSchedule();
        const events = content.map(({ data }) => data);
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
                    return (
                        <Talks
                            key={idx}
                            title={talks.title}
                            speaker={talks.speaker}
                            description={
                                Object.values(talks.description)[0].text
                            }
                            time={talks.time}
                            image={talks.image}
                        />
                    );
                })
            )}
        </div>
    );
}

function Talks(props) {
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 812) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize);
    });

    return !isMobile ? (
        <div className={styles.card}>
            <p className={styles.about}> {props.time} </p>
            <div className={styles.container}>
                <div className={styles.left}>
                    <h2 className="subheading">{props.title}</h2>
                    <p className={styles.about}>
                        {Object.values(props.speaker.data)[0]}
                    </p>
                    <div className={styles.info}>
                        <p className={styles.about}>{props.description}</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <img width="100%" src={props.image.url}></img>
                </div>
            </div>
        </div>
    ) : (
        <div className={styles.card}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <h2 className="subheading">{props.title}</h2>
                        <p className={styles.about}>
                            {Object.values(props.speaker.data)[0]}
                        </p>
                    </div>
                    <div className={styles.right}>
                        <p> {props.time} </p>
                    </div>
                </div>
                <div className={styles.desMobile}>
                    <p className={styles.about}>{props.description}</p>
                </div>
            </div>
        </div>
    );
}

Schedule.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default Schedule;
