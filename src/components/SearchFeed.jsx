import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import {Videos} from "../components";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";


const SearchFeed = () => {

  const [videos, setvideos] = useState([])
  const {searchTerm} = useParams();


  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)

    .then((data)=> setvideos(data.items))
    
  }, [searchTerm]);
  return (
    <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
    <Typography variant="h4" fontWeight='bold' marginBottom="15px">
      Search results for:  
      <span style={{color: '#F31503'}}> {searchTerm}</span> videos
    </Typography>
    <Videos videos = {videos}/>
  </Box>
  );
}

export default SearchFeed;
