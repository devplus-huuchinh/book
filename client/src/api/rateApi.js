import axiosClient from './axiosClient';

const rateApi = {
   getRateByBookId: (params) => {
      const url = '/rate';
      return axiosClient.get(url, params);
   },
};

export default rateApi;
