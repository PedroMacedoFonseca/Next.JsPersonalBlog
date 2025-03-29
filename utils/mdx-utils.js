import { api } from '../services/api';

// Função para pegar todos os posts
export const getPosts = async () => {
  try {
    const { data } = await api.get('/posts');

    return data || [];
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return [];
  }
};

export const getPostBySlug = async (id) => {
  try {
    const { data } = await api.get(`/posts?id=eq.${id}`);

    if (data && data.length > 0) {
      return data[0];
    }

    return null;
  } catch (error) {
    console.error(`Erro ao buscar o post com ID ${id}:`, error);
    return null;
  }
};
