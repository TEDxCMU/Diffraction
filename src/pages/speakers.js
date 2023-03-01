import { useState, useEffect } from "react";
import { getSpeakers } from "utils/content";
import { Layout } from "components/layouts";

function Speakers() {
    const [data, setData] = useState(null);

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const content = await getSpeakers();
        const speakers = content.map(({ data }) => data);
        console.log(speakers);
        setData(content);
    }

    return <div className="title">Speakers</div>;
}

Speakers.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }

export default Speakers;
