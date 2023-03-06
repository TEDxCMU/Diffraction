import { useState, useEffect } from "react";
import { getSchedule } from "utils/content";
import { Layout } from 'components/layouts'

function Schedule() {
    const [data, setData] = useState(null);

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const content = await getSchedule();
        setData(content);
    }

    return <div className="title">Schedule</div>;
}

Schedule.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }

export default Schedule;
