import axiosClient from './axiosClient';

const commentApi = {
   createCommentInBook: (data) => {
      const url = '/comment';
      return axiosClient.post(url, data);
   },

   getCommentInBook: (params) => {
      const url = '/comment';
      return axiosClient.get(url, { params });
   },
};

export default commentApi;
