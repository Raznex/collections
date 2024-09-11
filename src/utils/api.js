import axios from 'axios';

export const baseURL = 'http://dev.cars.nsspro.ru';

export async function getAllModels() {
  try {
    const res = await axios.get(`${baseURL}/home_json/`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
