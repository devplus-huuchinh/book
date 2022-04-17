import axiosClient from './axiosClient';

const bookApi = {
   getBook: (bookId) => {
      const url = `/book/${bookId}`;
      return axiosClient.get(url);
   },

   getAllBook: () => {
      const url = '/books';
      return axiosClient.get(url);
   },

   getNewBook: () => {
      const url = '/books/new-book';
      return axiosClient.get(url);
   },

   getBookList: () => {
      const url = '/books';
      return axiosClient.get(url);
   },
};

export default bookApi;
