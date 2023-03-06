import { useState, useEffect } from "react";
import { getInnovators } from "utils/content";
import { Layout } from 'components/layouts'

function InnovationExpo() {
    const [data, setData] = useState(null);

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const content = await getInnovators();
        setData(content);
    }

    return <div className="title">Innovation Expo</div>;
}

InnovationExpo.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }

export default InnovationExpo;
