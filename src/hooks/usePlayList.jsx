import { useEffect, useState } from "react";
import { getPlaylist } from "../api";
import { getFromLocalStorage, setToLocalStorage } from "../utils";

// const demoPlayListID = "PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl";
const demoPlayListID = "PLaBWg5TZtBgCvvsit84tTO-dZlrcWNidi";

const usePlayList = () => {
  const [state, setState] = useState(
    getFromLocalStorage("playlists") || {
      playlists: {},
      recentPlaylists: [],
      favoritePlayList: [],
      notes: {},
    }
  );

  useEffect(() => {
    if (!getFromLocalStorage("playlists")) addPlaylist(demoPlayListID);
  }, []);

  const addPlaylist = async (playlistId, force = false) => {
    //TODO: have to add refresh feature (need new data when user want to refresh forcefully )

    if (state[playlistId] && !force) {
      return;
    }

    let channelID, channelTITLE;

    let playlist = await getPlaylist(playlistId);

    playlist = playlist.map((item) => {
      const {
        title,
        description,
        channelId,
        channelTitle,
        thumbnails: { medium },
      } = item.snippet;

      if (!channelID) channelID = channelId;
      if (!channelTITLE) channelTITLE = channelTitle;

      return {
        title,
        description,
        thumbnail: medium,
        contentDetails: item.contentDetails,
      };
    });

    setState({
      ...state,
      playlists: {
        ...state.playlists,
        [playlistId]: {
          items: playlist,
          channelId: channelID,
          channelTitle: channelTITLE,
          playlistId,
        },
      },
    });

    setToLocalStorage("playlists", {
      ...state,
      playlists: {
        ...state.playlists,
        [playlistId]: {
          items: playlist,
          channelId: channelID,
          channelTitle: channelTITLE,
          playlistId,
        },
      },
    });
  };

  const addRecentPlaylist = (playlistId) => {
    for (let i = 0; i < state.recentPlaylists.length; i++) {
      if (state.recentPlaylists[i] == playlistId) {
        return;
      }
    }

    setState({
      ...state,
      recentPlaylists: [...state.recentPlaylists, playlistId],
    });
    setToLocalStorage("playlists", {
      ...state,
      recentPlaylists: [...state.recentPlaylists, playlistId],
    });
  };

  const removeRecentPlaylist = (playlistId) => {
    const find = state.recentPlaylists.find((id) => (id = playlistId));

    if (!find) {
      return;
    }

    setState({
      ...state,
      recentPlaylists: [
        ...state.recentPlaylists.filter((id) => id != playlistId),
      ],
    });

    setToLocalStorage("playlists", {
      ...state,
      recentPlaylists: [
        ...state.recentPlaylists.filter((id) => id != playlistId),
      ],
    });
  };

  const addFavoritePlaylist = (playlistId) => {
    for (let i = 0; i < state.favoritePlayList.length; i++) {
      if (state.favoritePlayList[i] == playlistId) {
        return;
      }
    }

    setState({
      ...state,
      favoritePlayList: [...state.favoritePlayList, playlistId],
    });

    setToLocalStorage("playlists", {
      ...state,
      favoritePlayList: [...state.favoritePlayList, playlistId],
    });
  };

  const removeFavoritePlaylist = (playlistId) => {
    const find = state.favoritePlayList.find((id) => (id = playlistId));

    if (!find) {
      return;
    }

    setState({
      ...state,
      favoritePlayList: [
        ...state.favoritePlayList.filter((id) => id != playlistId),
      ],
    });

    setToLocalStorage("playlists", {
      ...state,
      favoritePlayList: [
        ...state.favoritePlayList.filter((id) => id != playlistId),
      ],
    });
  };

  const getPlaylistByIDs = (ids) => {
    return ids.map((id) => state.playlists[id]);
  };

  const addNote = (videoId, note) => {
    setState({
      ...state,
      notes: {
        ...state.notes,
        [videoId]: note,
      },
    });

    setToLocalStorage("playlists", {
      ...state,
      notes: {
        ...state.notes,
        [videoId]: note,
      },
    });
  };

  const getNote = (videoId) => {
    return state.notes[videoId];
  };

  return {
    addPlaylist,
    addRecentPlaylist,
    removeRecentPlaylist,
    addFavoritePlaylist,
    removeFavoritePlaylist,
    addNote,
    getNote,

    playlists: state.playlists,
    recentPlaylists: getPlaylistByIDs(state.recentPlaylists),
    favoritePlayList: getPlaylistByIDs(state.favoritePlayList),
  };
};

export default usePlayList;
