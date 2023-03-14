import { useState, useEffect } from "react";
import { getSchedule } from "utils/content";
import { Layout } from "components/layouts";

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
        <div className="card">
            <p className="about"> {props.time} </p>
            <div className="container">
                <div className="left">
                    <h2 className="subheading">{props.title}</h2>
                    <p className="about">
                        {Object.values(props.speaker.data)[0]}
                    </p>
                    <div className="info">
                        <p className="about">{props.description}</p>
                    </div>
                </div>
                <div className="right">
                    <img width="100%" src={props.image.url}></img>
                </div>
            </div>
        </div>
    ) : (
        <div className="card">
            <div className="container">
                <div className="top">
                    <div className="left">
                        <h2 className="subheading">{props.title}</h2>
                        <p className="about">
                            {Object.values(props.speaker.data)[0]}
                        </p>
                    </div>
                    <div className="right">
                        <p> {props.time} </p>
                    </div>
                </div>
                <div className="desMobile">
                    <p className="about">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

Schedule.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

export default Schedule;
