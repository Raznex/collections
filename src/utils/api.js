import axios from 'axios';
import { csrftoken } from './csrfToken/csrfToken';

// export const baseURL = 'http://dev.cars.nsspro.ru';
export const baseURL = 'http://localhost:8000';

export async function getAllModels() {
  try {
    const res = await axios.get(`${baseURL}/home_json/`, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    if (err.response) {
      throw new Error(err.response.status);
    } else {
      throw new Error('Request failed');
    }
  }
}

export async function getUserModels() {
  try {
    const res = await axios.get(`${baseURL}/my_models_json/`, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    if (err.response) {
      throw new Error(err.response.status);
    } else {
      throw new Error('Request failed');
    }
  }
}

export async function getDetailModel(elemId) {
  try {
    const res = await axios.get(`${baseURL}/model_details_json/${elemId}/`, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    if (err.response) {
      throw new Error(err.response.status);
    } else {
      throw new Error('Request failed');
    }
  }
}

export async function addModelToFavourite(elemId) {
  try {
    const res = await axios.get(`${baseURL}/toggle_favorite_json/${elemId}/`, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    if (err.response) {
      throw new Error(err.response.status);
    } else {
      throw new Error('Request failed');
    }
  }
}

export async function getModelBySearch(body) {
  const formData = new FormData();
  formData.append('query', body.searchName);
  try {
    const res = await axios.get(`${baseURL}/articles_json`, formData, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    if (err.response) {
      throw new Error(err.response.status);
    } else {
      throw new Error('Request failed');
    }
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
      `${baseURL}/edit_model_json/${elemId}`,
      formData,
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (err) {
    if (err.response) {
      throw new Error(err.response.status);
    } else {
      throw new Error('Request failed');
    }
  }
}

export async function addModel(body) {
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
    const res = await axios.post(`${baseURL}/add_model_json/`, formData, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    if (err.response) {
      throw new Error(err.response.status);
    } else {
      throw new Error('Request failed');
    }
  }
}
