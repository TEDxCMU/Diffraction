import { useState, useEffect } from 'react';
import { getSchedule } from 'utils/content';

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
                image = {talks.image}
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
            <img width = "25%" src = {props.image.url}></img>
        </div>

    ); 
}

export default Schedule;
