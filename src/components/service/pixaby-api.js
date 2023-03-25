import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '32928736-f14b72ba40513289fec4fb952',
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export const searchImg = async (nameImg, page) => {
  const { data } = await instance.get('/', {
    params: {
      q: nameImg,
      page,
      per_page: 12,
    },
  });
  return data;
};
