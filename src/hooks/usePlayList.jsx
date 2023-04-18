import { useEffect, useState } from "react";
import { getPlaylist } from "../api";
import { getFromLocalStorage, setToLocalStorage } from "../utils";
import { ToastContainer, toast } from "react-toastify";
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

    let playlist = await getPlaylist(playlistId);

    setState({
      ...state,
      playlists: {
        ...state.playlists,
        [playlistId]: {
          ...playlist,
        },
      },
    });

    setToLocalStorage("playlists", {
      ...state,
      playlists: {
        ...state.playlists,
        [playlistId]: {
          ...playlist,
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

    toast.info("Added to recent playlist", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
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
    toast.dark("Removed from recent playlist", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
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
    toast.info("Added to favorite playlist", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
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

    toast.dark("Removed from favorite playlist", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
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
