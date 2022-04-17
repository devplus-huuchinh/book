import axiosClient from './axiosClient';

const rateApi = {
   getRateByBookId: (params) => {
      const url = '/rate';
      return axiosClient.get(url, { params });
   },

   createRateByBookId: (data) => {
      const url = '/rate/new';
      return axiosClient.post(url, data);
   },

   checkUserRate: (params) => {
      const url = '/rate/is-rate';
      return axiosClient.get(url, { params });
   },

   cancelRateByBookId: (params) => {
      const url = '/rate/cancel';
      return axiosClient.delete(url, { params });
   },
};

export default rateApi;
