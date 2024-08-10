import axios from 'axios';

const baseURL = 'http://80.249.147.48';

export async function getAllModels() {
  try {
    const res = await axios.get(`${baseURL}/json`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
