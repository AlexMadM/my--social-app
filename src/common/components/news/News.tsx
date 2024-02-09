import React, { useEffect, useState } from "react";
import { Avatar, Box, CardHeader, CardMedia, Checkbox, IconButton, Pagination, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { useAppDispatch } from "../../../app/store";
import { fetchData } from "../../../app/slice_data";
import { useSelector } from "react-redux";

import { newsAct } from "../../../app/selectors";


const News = () => {

  const mynews = useSelector(newsAct);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());

  }, []);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [size, setSize] = useState<number>(4);


  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      <Stack><Pagination
        count={size}
        page={currentPage}
        onChange={(_, num) => setCurrentPage(num)}
        showFirstButton
        showLastButton
        siblingCount={4}
        sx={{ marginY: 3, marginX: "auto" }}
      /></Stack>

      {mynews.slice(currentPage * size, currentPage * size + size).map((el, i) => {
        return (

          <Card key={i} sx={{ margin: 5 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  {el.source.name}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVert />
                </IconButton>
              }
              title={el.author}
              subheader={el.publishedAt}
            />
            <CardMedia
              component="img"
              height="20%"
              image={el.urlToImage}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {el.content}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
              </IconButton>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </CardActions>
          </Card>);
      })}
    </Box>
  );
};

export default News;