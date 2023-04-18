import React, { useContext } from "react";
import Player from "../../pages/Player";
import { Link as RouterLink } from "react-router-dom";
import { PlaylistContext } from "../../context/PlaylistContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const PlaylistCard = ({
  playlist,
  recentPlaylist = false,
  favPlaylist = false,
}) => {
  const {
    removeFavoritePlaylist,
    removeRecentPlaylist,
    addFavoritePlaylist,
    addRecentPlaylist,
  } = useContext(PlaylistContext);
  console.log(playlist);
  return (
    <Card
      sx={{
        height: {
          sm: 440,
          md: 440,
          lg: 420,
          xl: 420,
        },

        pb: "0.2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardActionArea
        component={RouterLink}
        to={`/playlist/${playlist.playlistId}`}
      >
        <CardMedia
          component="img"
          height="180"
          sx={{
            objectFit: "cover",
          }}
          image={playlist?.playlistThumbnail.url}
          alt={playlist?.playlistTitle}
        />
        <CardContent sx={{ py: "0.5rem" }}>
          <Typography gutterBottom variant="body1" color="text.secondary">
            {playlist?.channelTitle}
          </Typography>
          <Typography gutterBottom variant="h6">
            {playlist?.playlistTitle.length > 30
              ? playlist.playlistTitle.slice(0, 30) + "..."
              : playlist.playlistTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {playlist?.playlistDescription.length > 100
              ? playlist.playlistDescription.slice(0, 100) + "..."
              : playlist.playlistDescription}
          </Typography>
        </CardContent>
      </CardActionArea>

      <Box
        sx={{
          mt: {
            xs: "0.5rem",
            sm: 0,
          },
        }}
      >
        <CardActions
          sx={{
            justifyContent: "space-between",
            py: 0,
          }}
        >
          {favPlaylist && (
            <Button
              fullWidth
              onClick={() => removeFavoritePlaylist(playlist.playlistId)}
              sx={{
                alignItems: "center",
              }}
              size="small"
              color="primary"
              variant="outlined"
            >
              <DeleteOutlineIcon
                sx={{
                  marginRight: "0.3rem",
                }}
              />
              Remove from favorite playlist
            </Button>
          )}

          {recentPlaylist && (
            <Button
              fullWidth
              onClick={() => removeRecentPlaylist(playlist.playlistId)}
              sx={{
                alignItems: "center",
              }}
              size="small"
              color="primary"
              variant="outlined"
            >
              <DeleteOutlineIcon
                sx={{
                  marginRight: "0.3rem",
                }}
              />
              Remove from recent playlist
            </Button>
          )}

          {!favPlaylist && !recentPlaylist && (
            <Button
              onClick={() => addFavoritePlaylist(playlist.playlistId)}
              sx={{
                alignItems: "center",
              }}
              size="small"
              color="primary"
              variant="outlined"
            >
              <AddCircleOutlineIcon
                sx={{
                  marginRight: "0.3rem",
                }}
              />
              Favorite
            </Button>
          )}

          {!recentPlaylist && !favPlaylist && (
            <Button
              onClick={() => addRecentPlaylist(playlist.playlistId)}
              sx={{
                alignItems: "center",
              }}
              size="small"
              color="primary"
              variant="outlined"
            >
              <AddCircleOutlineIcon
                sx={{
                  marginRight: "0.3rem",
                }}
              />
              Recent
            </Button>
          )}
        </CardActions>

        <CardActions sx={{ mt: "0.1rem" }}>
          <Button
            component={RouterLink}
            to={`/playlist/${playlist.playlistId}`}
            fullWidth
            sx={{
              alignItems: "center",
            }}
            size="small"
            color="primary"
            variant="contained"
          >
            <PlayCircleOutlineIcon
              sx={{
                marginRight: "0.3rem",
              }}
            />
            Visit playlist
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default PlaylistCard;
