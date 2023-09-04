import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import {Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromApi';

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null)
  const [Clips, setClips] = useState([])
  const { id } = useParams();

  useEffect(() =>{
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=> setchannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setClips(data?.items));
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(7,0,120,1) 0%, rgba(162,8,110,1) 40%, rgba(161,0,255,1) 100%)', zIndex: 10,
            height: '300px'}}/>
            <ChannelCard channelDetail={channelDetail}  marginTop='-110px'/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr: {sm: '100px'}}}/>
          <Videos videos={Clips} />
      </Box>
    </Box>
  )
}

export default ChannelDetail