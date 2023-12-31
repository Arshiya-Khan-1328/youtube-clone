import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {Sidebar, Videos} from "../components";
import { fetchFromAPI } from "../utils/fetchFromApi";

const Feed = () => {

  const [selectedCategory, setselectedCategory] = useState('New')
  const [videos, setvideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=> setvideos(data.items))
    
  }, [selectedCategory]);
  return (
    <Stack sx={{flexDirection: {sx: 'column', md: 'row'}}}>
      <Box sx={{height: {sx: 'auto', md: '92vh'},
        borderRadius: '1px solid #3d3d3d',
        px: {sx: 0, md: 2},
    }}>

      <Sidebar
        selectedCategory={selectedCategory}
        setselectedCategory = {setselectedCategory}
      ></Sidebar>
        <Typography className="copyright" variant="body2"
          sx={{mt: 1.5, color: '#000'}}
        >Copyright 	&#169; 2023 </Typography>        
      </Box>

      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4" fontWeight='bold'>
          {selectedCategory}
          <span style={{color: '#F31503'}}>Videos</span>
        </Typography>
        <Videos videos = {videos}/>
      </Box>

    </Stack>
  );
};

export default Feed;
