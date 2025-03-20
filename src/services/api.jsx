
import axios from 'axios';

// Base da api: https://api.themoviedb.org/3/
// URL da api: https://api.themoviedb.org/3/movie/now_playing?api_key=594701fd2bf9908b8c93d756a9f30907&language=pt-BR 

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;