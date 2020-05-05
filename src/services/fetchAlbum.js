export const fetchRelease = (artistId) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(res => res.json)
    .then(res => res.releases.map(release => ({
      id: release.id,
      title: release.title,
      date: release.date
    })));
};

