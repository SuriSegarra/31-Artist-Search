export const fetchRecording = (albumId) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${albumId}&fmt=json`)
    .then(res => res.json())
    .then(res => res.songs.map(song => ({
      id: song.id,
      title: song.title,
      date: song.title
    }
    )));
};
