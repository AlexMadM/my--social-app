import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Box, IconButton } from "@mui/material";
import { MessageType } from "./Dialog";
import FavoriteIcon from "@mui/icons-material/Favorite";

export type MessagePropsType = {
  message: MessageType

}
export default function MediaCard(props: MessagePropsType) {
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      <Card sx={{ maxWidth: 500 }}>
        <CardContent>
          <Avatar
            alt="Remy Sharp"
            src={`https://material-ui.com/static/images/avatar/${props.message.id >= 5 ? 1 : props.message.id}.jpg`}
          />
          <Typography gutterBottom variant="h5" component="div">
            {props.message.user.name + props.message.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.message.message.text}

          </Typography>

        </CardContent>
        <CardActions>

          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Button size="small">Share</Button>
        </CardActions>
      </Card>
    </Box>
  );
}