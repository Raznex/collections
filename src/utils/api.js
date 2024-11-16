import axios from 'axios';
import { csrftoken } from './csrfToken/csrfToken';

// export const baseURL = 'http://dev.cars.nsspro.ru';
export const baseURL = 'http://localhost:8000/api';

export async function getAllModels(page, perPage) {
  try {
    const res = await axios.get(`${baseURL}/home_json/`, {
      withCredentials: true,
      params: {
        page: page,
        per_page: perPage,
      },
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

export async function getUserFavouriteModels() {
  try {
    const res = await axios.get(`${baseURL}/get_all_favorites/`, {
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
    const res = await fetch(
      `${baseURL}/model_details_json/${elemId}/toggle_favorite/`,
      {
        method: 'POST',
        credentials: 'include',
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

export async function editModel(body, images, elemId) {
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
    images.forEach((image) => {
      formData.append('new_photos', image.file);
    });
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

export async function addModel(body, images) {
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
    images.forEach((image) => {
      formData.append('image', image.file);
    });
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
