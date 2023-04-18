import axios from "axios";
const API_KEY = import.meta.env.VITE_api_key;

const getPlaylistItem = async (playListId, pageToken = "", result = []) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=50&pageToken=${pageToken}&playlistId=${playListId}&key=${API_KEY}`;

  const { data } = await axios.get(URL);

  result = [...result, ...data.items];

  if (data.nextPageToken) {
    result = getPlaylistItem(playListId, data.nextPageToken, result);
  }

  return result;
};

const getPlaylist = async (playListId) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playListId}&key=${API_KEY}`;

  const { data } = await axios.get(URL);

  const {
    channelId,
    channelTitle,
    description: playlistDescription,
    title: playlistTitle,
    thumbnails,
  } = data?.items[0]?.snippet;

  let result = await getPlaylistItem(playListId);

  result = result.map((item) => {
    const {
      title,
      description,

      thumbnails: { medium },
    } = item.snippet;

    return {
      title,
      description,
      thumbnail: medium,
      contentDetails: item.contentDetails,
    };
  });

  return {
    channelId,
    channelTitle,
    playlistDescription,
    playlistTitle,
    playlistThumbnail: thumbnails.default,
    items: [...result],
    playlistId: playListId,
  };
};
export { getPlaylist };
