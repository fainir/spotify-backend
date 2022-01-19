const request = require('supertest');
const app = require('../app');
const { Artist } = require('../models');

const artistMock = {
  name: 'new artist name'
}

describe('api v1', () => {
  beforeEach(async () => {
    await Artist.destroy({ truncate: true, force: true });
  });

  it('Can create artist', async () => {
    console.log('process.env.NODE_ENV', process.env.NODE_ENV)
    const { body } = await request(app).post('/api/artists').send(artistMock);
    console.log('aaa', body);
    expect(body.name).toBe(artistMock.name)
  })

  it('Can get single artist', async () => {
    const { body: newArtist } = await request(app).post('/api/artists').send(artistMock);
    const { body: getSingleArtistResponseBody } = await request(app).get(`/api/artists/${newArtist.id}`);

    expect(getSingleArtistResponseBody.name).toBe(artistMock.name)
    expect(getSingleArtistResponseBody.id).toBe(newArtist.id)
  })
})