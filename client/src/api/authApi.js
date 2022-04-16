import axiosClient from './axiosClient';

const authApi = {
   login: (data) => {
      const url = '/user/login';
      return axiosClient.post(url, data);
   },

   logout: () => {
      const url = '/user/logout';
      return axiosClient.post(url);
   },

   register: (data) => {
      const url = '/user/register';
      return axiosClient.post(url, data);
   },

   csrfCookie: (data) => {
      const baseURL = 'http://localhost/sanctum/csrf-cookie';
      return axiosClient.get(baseURL, data);
   },

   useProfile: (data) => {
      const url = '/user';
      return axiosClient.get(url, data);
   },

   testAuth: () => {
      const url = '/user/test';
      return axiosClient.get(url);
   },
};

export default authApi;
