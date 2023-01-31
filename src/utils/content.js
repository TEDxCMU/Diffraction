import * as prismic from '@prismicio/client';

const accessToken =
  'MC5ZOWgzblJBQUFDSUFuU2Fi.IO-_vRIh77-9b--_ve-_ve-_ve-_ve-_ve-_ve-_ve-_ve-_vXpKQz5-Au-_ve-_ve-_ve-_ve-_vRnvv70h77-977-9Ew';

const endpoint = prismic.getRepositoryEndpoint('tedxcmu-diffraction');
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
