import axios from 'axios';

const API_URL = 'https://inicio-banner-server-51647ce90258.herokuapp.com/games';

export const getGameOdds = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data[0].db;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
