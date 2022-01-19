const { Router } = require('express');
const { Artist } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const allArtists = await Artist.findAll({
    attributes: ['name', 'phoneNumber'],
    include:['songs'],
    where: {
      city: 'telaviv'
    }
  });
  console.log('The first phone', allArtists[0].phoneNumber)
  return res.json(allArtists);
});

router.post('/', async (req, res) => {
  const newArtist = await Artist.create(req.body);
  return res.json(newArtist);
});

router.get('/:artistId', async (req, res) => {
  const artist = await Artist.findByPk(req.params.artistId);

  return res.json(artist);
});

router.get('/:artistId/songs', async (req, res) => {
  const artist = await Artist.findByPk(req.params.artistId);
  const songs = await artist.getSongs();
  // console.log('The first phone', allArtists[0].phoneNumber)
  return res.json(songs);
});

module.exports = router;
