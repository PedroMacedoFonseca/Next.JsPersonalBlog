import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SUP, 
  headers: {
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, 
  },
  timeout: 5000,
});

api
  .get('/posts')
  .then((response) => {
    console.log('Posts:', response.data);
  })
  .catch((error) => {
    console.error('Erro ao buscar posts:', error);
  });
