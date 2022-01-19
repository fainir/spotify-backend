import React, { useEffect, useState } from 'react';
import network from '../services/network';

export default () => {
  const [artists, setArtists] = useState([])
  useEffect(() => {
    const loadArtists = async () => {
      const {data:artistsFromServer} = await network.get('/api/artists');
      setArtists(artistsFromServer);
    };
    loadArtists();
    const artistInterval = setInterval(loadArtists, 5000);

    return () => clearInterval(artistInterval);
  }, []);
  return <div>
    Home page
    {artists.map(artist => <div>{artist.name}</div>)}  
  </div>
}