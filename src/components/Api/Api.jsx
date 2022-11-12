import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const API_key = '24125132-03a45b117457a16fcdb616627';

export const fetchImages = async (query, currentPage) => {
    console.log('fetch images');
    const { data } = await axios.get(
      `/?q=${query}&page=${currentPage}&key=${API_key}&image_type=photo&orientation=horizontal&per_page=12`,
    );
  
    return data;
  };

  
// Example https://pixabay.com/api/ 
// ? key=24125132-03a45b117457a16fcdb616627 
// & q=yellow 
// + flowers 
// & image_type=photo 
// & pretty=true