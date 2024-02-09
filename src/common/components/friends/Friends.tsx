import React, { useEffect, useState } from "react";
import { Avatar, Box, IconButton, Pagination, PaginationItem, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import { filterFriends, selectFriends } from "../../../app/selectors";
import { useAppDispatch } from "../../../app/store";
import { getUser } from "../../../app/slice_users";


type props ={
  search:string
}


const Friends = ({search}:props) => {
  const dispatch = useAppDispatch()

  const friends = useSelector(filterFriends(search))
const [currentPage,setCurrentPage]=useState<number>(1)
  const [pageSize,setPageSize]=useState<number>(4)

  useEffect(() => {
    dispatch(getUser({ currentPage, pageSize }))
  }, [currentPage,pageSize]);



  return (
    <Box sx={{ height: "100vh" }} flex={4} p={{ xs: 0, md: 2 }}>
      {friends.map((el, index) => {
        return (

          <Card key={index} sx={{margin:'20px', maxWidth: 500 }}>
            <CardContent>
              <Avatar
                alt="Remy Sharp"
                src={`https://material-ui.com/static/images/avatar/${index+1}.jpg`}
              />
              <Typography variant="body2" color="text.secondary">
                {el.name}

              </Typography>

            </CardContent>
            <CardActions>

              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <Button size="small">Share</Button>
            </CardActions>
          </Card>

        );
      })}
<Stack>
  <Pagination
    count={100}
    page={currentPage}
    onChange={(_, num) => setCurrentPage(num)}
    showFirstButton
    showLastButton

    sx={{ marginY: 3, marginX: "auto" }}

  />
</Stack>
    </Box>


  );
};

export default Friends;