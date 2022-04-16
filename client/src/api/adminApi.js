import axiosClient from './axiosClient';

const adminApi = {
   getUsers: () => {
      const url = '/user/users';
      return axiosClient.get(url);
   },

   blockUser: (params) => {
      const url = '/user/lock';
      return axiosClient.patch(url, params);
   },
};

export default adminApi;
