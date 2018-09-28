import axios from 'axios'
import Vue from 'vue';
import Cookies from 'js.cookie';
import {router} from '@/router'

let util = {}

util.ajax = axios.create({
  baseURL: 'http://f1b07f31.ngrok.io/api/',
})

util.ajax.interceptors.request.use(config => {
  if (Cookies.get('token')) {
    config.headers.Authorization = `Bearer ${Cookies.get('token')}`;
  }
  return config
})

util.ajax.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response.status === 401 && !error.config._retry) {
    error.config._retry = true;
    router.push({
      path: '/login'
    });
    return
  }
  if (error.response.status === 403 && !error.config._retry) {
    Cookies.remove('token')
    error.config._retry = true;
    router.push({
      path: '/403'
    });
    return
  }
  return Promise.reject(error.response ? error.response : error)
});

Vue.prototype.$axios = util.ajax

util.checkUpdate = () => {
}

export default util
