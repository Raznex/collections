import axios from 'axios';
import { csrftoken } from './csrfToken/csrfToken';

// export const baseURL = 'http://dev.cars.nsspro.ru';
export const baseURL = 'http://localhost:8000/api';

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

export async function checkAuth() {
  try {
    const res = await axios.get(`${baseURL}/auth_status/`, {
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

export async function getDetailModelForEdit(elemId) {
  try {
    const res = await axios.get(
      `${baseURL}/model_details_json/${elemId}/edit/`,
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

export async function addModelToFavourite(elemId) {
  try {
    const res = await axios.post(
      `${baseURL}/model_details_json/${elemId}/toggle_favorite/`,
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

export async function getModelBySearch(body) {
  const query = body.searchName;
  try {
    const res = await axios.get(`${baseURL}/api/articles_json/`, {
      withCredentials: true,
      params: { query },
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
      `${baseURL}/edit_model_json/${elemId}/`,
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
    formData.append('collectable_name', body.collectable_name);
    formData.append('Производитель', body.Производитель);
    formData.append('Категория', body.Категория);
    formData.append('article', body.article);
    formData.append('buy_price', body.buy_price);
    formData.append('buy_price_currency', body.currency);
    formData.append('Год', body.Год);
    formData.append('scale', body.scale);
    formData.append('quantity', body.quantity);
    formData.append('Местонахождение', body.Местонахождение);
    formData.append('is_damaged', body.damage);

    formData.append('damage', body.damage);
    const res = await axios.post(`${baseURL}/my_models_json/`, formData, {
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

export async function takePriceAuction(body, elemId) {
  try {
    const formData = new FormData();
    formData.append('price', body.price);

    const res = await axios.post(
      `${baseURL}/model_details_json/${elemId}/`,
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
