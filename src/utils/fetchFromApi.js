import axios from 'axios';

const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '692edf2727mshbee558ac824a581p16ef15jsn534831d5650f',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


  export const fetchFromAPI = async (url) => {
    const {data} =  await axios.get(`${BASE_URL}/${url}`,options)

    return data;
    
  }