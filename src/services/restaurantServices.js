import axios from 'axios';

const restaurantServices = async () =>
  await axios.get('/api/restaurants').then(res => res.data.search);

export default restaurantServices;
