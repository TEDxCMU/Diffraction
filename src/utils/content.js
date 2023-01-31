import * as prismic from '@prismicio/client';

const accessToken = 'MC5Zall3NVJFQUFDRUFKQVRr.agjvv73vv71XUu-_ve-_ve-_vWDvv71977-977-9bO-_ve-_ve-_vUjvv73vv73vv73vv73vv70U77-977-9CXBpKe-_vQ';

const endpoint = prismic.getEndpoint('tedxcmu-momentum');
const client = prismic.createClient(endpoint, { accessToken });

export async function getSpeakers() {
    return client.getAllByType('speaker');
}

export async function getInnovators() {
    return client.getAllByType('innovator');
}

export async function getSchedule() {
    const events = await client.getAllByType('event');
    const speakers = await getSpeakers();

    for (const event of events) {
        if (event.data && event.data.speaker && event.data.speaker.id) {
            const id = event.data.speaker.id;
            const speaker = speakers.find((s) => s.id === id);
            event.data.speaker = speaker;
        }
    }

    return events;
}
