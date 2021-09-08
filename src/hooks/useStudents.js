import axios from 'axios';

const studentsAPI = axios.create({});

studentsAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const useStudents = () => {

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await studentsAPI.post(`/students/search`, { searchPhrase });
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  return {
    findStudents,
  };
};
