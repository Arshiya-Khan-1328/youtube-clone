import React from 'react'
import {Link} from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelUrl, demoChannelTitle} from '../utils/constants';

const VideoCard = ({ video: {id: {videoId}, snippet}}) => {
    // console.log(videoId)
  return (
    <Card sx={{width: {xs: '100%', sm: "358px" ,md:'320px'}, borderRadius: 0}}>
        <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
        <CardMedia 
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}

        alt={snippet?.title}
        sx={{width: {xs: '100%', sm: '358px', md:'320px'}, height: 180}}
        ></CardMedia>
        </Link>
        <CardContent sx={{ backgroundColor: '#FFFAFA', height: '106px', width: 358}}>
          <Link to={videoId? `/video/${videoId}`: demoVideoUrl}>
            <Typography variant='subtitle1' fontWeight="bold">
              {snippet?.title || demoVideoTitle.slice(0,60)}
            </Typography>
          </Link>
          <Link to={snippet.channelId? `/video/${snippet?.channelId}`: demoChannelUrl}>
            <Typography variant='subtitle2' fontWeight="bold" color='gray'>
              {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
              <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px'}}></CheckCircle>
            </Typography>
          </Link>

        </CardContent>
    </Card>
  )
}

export default VideoCard