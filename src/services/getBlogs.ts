import { Blogs } from '../types';
import AxiosHelper from './AxiosHelper';

// get all blogs
export const getBlogs = () =>
  AxiosHelper.get('/posts', {
    params: {
      sortBy: 'updatedAt',
      order: 'desc',
    },
  }).then(({ data }) => data);

// restrict content
/**
 *
 * @param state
 * @param currentPage
 * @param pageItems
 * @returns
 *
 * Have placed in services becuse in future this can be changed to load from service instead of local
 */
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

/**
 *
 * @param id
 * @returns
 *
 * get indivudual blogs
 */
export const getBlogsById = (id: string | string[]) =>
  AxiosHelper.get(`/posts/${id}`).then(({ data }) => data);
