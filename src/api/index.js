import axios from "axios";
const API_KEY = import.meta.env.VITE_api_key;

const getPlaylist = async (playListId, pageToken = "", result = []) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=50&pageToken=${pageToken}&playlistId=${playListId}&key=${API_KEY}`;

  const { data } = await axios.get(URL);

  result = [...result, ...data.items];

  if (data.nextPageToken) {
    result = getPlaylist(playListId, data.nextPageToken, result);
  }

  return result;
};

export { getPlaylist };
