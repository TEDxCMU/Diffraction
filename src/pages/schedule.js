import { useState, useEffect } from "react";
import { getSchedule } from "utils/content";

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
                console.log(Object.values(talks.description)[0].text)
                return <Talks
                key = {idx}
                title = {talks.title}
                speaker = {talks.speaker}
                description = {Object.values(talks.description)[0].text}
                time = {talks.time}
                image = {talks.image}
                />
            }))}

        </>
    );
}

function Talks(props){
    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (window.innerWidth < 812) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return(      
        ! isMobile ? (
        <div className = "card">
            <p> {props.time} </p>
            <div className = "container">
                <div className = "left">
                    <h2 className = "subheading">{props.title}</h2>
                    <p className>{props.speaker.uid}</p>
                    <p className = "description">{props.description}</p>
                    
                </div>
                <div className = "right">
                    <img width = "100%" src = {props.image.url}></img>
                </div>
            </div>
        </div>
        ) : (
            <div className = "card">
                <div className = "container">
                    <div className = "left">
                        <h2 className = "subheading">{props.title}</h2>
                        <p className>{props.speaker.uid}</p>
                        <p className = "description">{props.description}</p>   
                    </div>
                    <div className = "right">
                        <p> {props.time} </p>
                    </div>
                </div>
            </div>
        )
        
        

    ); 
}

export default Schedule;
