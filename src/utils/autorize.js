import axios from 'axios';
import { baseURL } from './api';
import { csrftoken } from './csrfToken/csrfToken';

export async function register(body) {
  try {
    const res = await axios.post(`${baseURL}/register/`, body);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function login(body) {
  try {
    const res = await axios.post(`${baseURL}/login/`, body);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function sendVerificationCode(body) {
  try {
    const res = await axios.post(`${baseURL}/send_verification_code/`, body, {
      headers: {
        'X-CSRFToken': csrftoken,
      },
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
