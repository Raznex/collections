import axios from 'axios';
import { csrftoken } from './csrfToken/csrfToken';

export const baseURL = 'http://dev.cars.nsspro.ru';

export async function getAllModels() {
  try {
    const res = await axios.get(`${baseURL}/home_json/`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getUserModels() {
  try {
    const res = await axios.get(`${baseURL}/my_models_json/`);
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

export async function addModelToFavourite(elemId) {
  try {
    const formData = new FormData();
    formData.append('model_id', elemId);
    formData.append('csrfmiddlewaretoken', csrftoken);
    const res = await axios.post(
      `${baseURL}/toggle_favorite_json/${elemId}`,
      formData
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getModelBySearch(body) {
  const formData = new FormData();
  formData.append('query', body.searchName);
  formData.append('csrfmiddlewaretoken', csrftoken);
  try {
    const res = await axios.get(`${baseURL}/articles_json`, formData);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function editModel(body, elemId) {
  try {
    const formData = new FormData();
    formData.append('modelName', body.modelName);
    formData.append('manufacturer', body.manufacturer);
    formData.append('price', body.price);
    formData.append('modelCode', body.modelCode);
    formData.append('category', body.category);
    formData.append('year', body.year);
    formData.append('location', body.location);
    formData.append('damage', body.damage);
    formData.append('csrfmiddlewaretoken', csrftoken);
    const res = await axios.post(
      `${baseURL}/toggle_favorite_json/${elemId}`,
      formData
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function addModel(body, elemId) {
  try {
    const formData = new FormData();
    formData.append('modelName', body.modelName);
    formData.append('manufacturer', body.manufacturer);
    formData.append('price', body.price);
    formData.append('modelCode', body.modelCode);
    formData.append('category', body.category);
    formData.append('year', body.year);
    formData.append('location', body.location);
    formData.append('damage', body.damage);
    formData.append('csrfmiddlewaretoken', csrftoken);
    const res = await axios.post(
      `${baseURL}/toggle_favorite_json/${elemId}`,
      formData
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
