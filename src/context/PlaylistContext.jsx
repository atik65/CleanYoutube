import React, { createContext } from "react";
import usePlayList from "../hooks/usePlayList";

export const PlaylistContext = createContext();

const PlaylistContextProvider = (props) => {
  const {
    playlists,
    favoritePlayList,
    recentPlaylists,
    addNote,
    getNote,

    removeFavoritePlaylist,
    removeRecentPlaylist,
    addFavoritePlaylist,
    addRecentPlaylist,
    addPlaylist,
  } = usePlayList();

  return (
    <PlaylistContext.Provider
      value={{
        playlists,
        favoritePlayList,
        recentPlaylists,
        addNote,
        getNote,

        removeFavoritePlaylist,
        removeRecentPlaylist,
        addFavoritePlaylist,
        addRecentPlaylist,
        addPlaylist,
      }}
    >
      {props.children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistContextProvider;
