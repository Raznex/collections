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

export async function getDetailModel(elemId) {
  try {
    const res = await axios.get(`${baseURL}/model_details_json/${elemId}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
