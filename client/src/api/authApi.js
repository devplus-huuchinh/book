import axiosClient from './axiosClient';

const authApi = {
   login: (data) => {
      const url = '/user/login';
      return axiosClient.post(url, data);
   },

   csrfCookie: (data) => {
      const baseURL = 'http://localhost/sanctum/csrf-cookie';
      return axiosClient.get(baseURL, data);
   },
};

export default authApi;
