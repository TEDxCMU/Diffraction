import { Background } from "components/background";
import { useState, useEffect } from "react";
import { getInnovators } from "utils/content";

function InnovationExpo() {
    const [data, setData] = useState(null);

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const content = await getInnovators();
        setData(content);
    }

    return (
        <>
            <Background />
            <div className="title">Innovation Expo</div>
        </>
    );
}

export default InnovationExpo;
