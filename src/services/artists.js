export const fetchArtist = (artist) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=25`)
    .then(res => res.json())
    .then(res => ({
      artists: res.artists
    }));

};

export const fetchRelease = (artistId) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(res => res.json)
    .then(res => res.releases.map(release => ({
      id: release.id,
      title: release.title,
      date: release.date
    })));
};
