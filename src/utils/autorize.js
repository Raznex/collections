import axios from 'axios';
import { useState } from 'react';
import { baseURL } from './api';
import { csrftoken } from './csrfToken/csrfToken';

export async function register(body) {
  try {
    const formData = new FormData();
    formData.append('email', body.email);
    formData.append('password', body.password);
    formData.append('confirm_password', body.controllPassword);
    formData.append('code', body.code || '');
    formData.append('csrfmiddlewaretoken', csrftoken);

    const res = await axios.post(`${baseURL}/register/`, formData, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function login(body) {
  try {
    const formData = new FormData();
    formData.append('email', body.email);
    formData.append('password', body.password);
    formData.append('csrfmiddlewaretoken', csrftoken);
    const res = await axios.post(`${baseURL}/login/`, formData, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export async function sendVerificationCode(body) {
  try {
    const formData = new FormData();
    formData.append('email', body.email);
    formData.append('password', body.password);
    formData.append('confirm_password', body.controllPassword);
    formData.append('code', body.code || '');

    formData.append('csrfmiddlewaretoken', csrftoken);

    const res = await axios.post(
      `${baseURL}/send_verification_code/`,
      formData,
      {
        headers: {
          'X-CSRFToken': csrftoken,
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );

    return res.data;
  } catch (err) {
    console.log(err);
  }
}
