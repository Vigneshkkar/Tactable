import { Blogs } from '../types';
import AxiosHelper from './AxiosHelper';

export const getBlogs = () =>
  AxiosHelper.get('/posts', {
    params: {
      sortBy: 'updatedAt',
      order: 'desc',
    },
  }).then(({ data }) => data);

export const getPaginatedBlogs = (
  state: Blogs[],
  currentPage: number,
  pageItems: number
) => {
  console.log(state, currentPage, pageItems);
  if (state && state.length > 0)
    return [...state].splice((currentPage - 1) * pageItems, pageItems);
  else return [];
};

export const getBlogsById = (id: string | string[]) =>
  AxiosHelper.get(`/posts/${id}`).then(({ data }) => data);
