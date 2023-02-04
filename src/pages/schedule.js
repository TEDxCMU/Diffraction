import { useState, useEffect } from 'react';
import { getSchedule } from 'utils/content';

function Schedule() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false); 
    const info = [{name: "Loading"}, {name: "Loading"}]
    console.log(data)

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const content = await getSchedule();
        const events = content.map(({ data }) => data);
        console.log(events); 
        setData(events);
        setLoading(false); 
    }

    return (
        <> <div className = "heading">Schedule</div>
            {loading ?  
            <p> Loading</p>
            :( data?.map((talks, idx)=>{
                return <Talks
                key = {idx}
                title = {talks.title}
                speaker = {talks.speaker}
                description = {talks.description}
                time = {talks.time}
                />
            }))}

        </>
    );
}

function Talks(props){
    return(
        <div className = "container">
            <div className = "topLine">
                <h2 className = "subheading">{props.title}</h2>
                <p className = "child"> {props.time}</p>
            </div>
                <p className>{props.speaker.uid}</p>
            <div className = "info">
                <p>{props.description[0].text}</p>
            </div>
        </div>

    ); 
}

export default Schedule;
