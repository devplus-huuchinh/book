import axiosClient from './axiosClient';

const userApi = {
   getUsers: (params) => {
      const url = '/users';
      return axiosClient.get(url, { params });
   },
};

export default userApi;
