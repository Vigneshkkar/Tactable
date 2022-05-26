import { Avatar, Text } from '@nextui-org/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getBlogs, getBlogsById } from '../../../services/getBlogs';
import { Blogs } from '../../../types';
import { formatDate } from '../../../utils/Helper';
import Comments from '../../components/comment/Comment';
import styles from './Blog.module.scss';

/**
 *
 * @param Blogs
 * @returns React Node
 *
 * Dynamic Route for each indivudual blog
 */
const BlogScreen: NextPage<{ blog: Blogs }> = ({ blog }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Text
            color='#fff'
            css={{
              margin: '2rem',
              textShadow: '1px 1px 8px #925847',
              textAlign: 'center',
              textTransform: 'capitalize',
            }}
            h1>
            {blog.title}
          </Text>
          <div className={styles.detailsCont}>
            <div className={styles.authors}>
              <Text h4 color='white'>
                Authors:
              </Text>
              {blog.authors.map((author) => (
                <div className={styles.authHolder}>
                  <Avatar
                    color={'gradient'}
                    size={'lg'}
                    textColor='white'
                    text={author.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  />
                  <Text color='#fff'>{author.name}</Text>
                </div>
              ))}
            </div>
            <div>
              <Text color='white'>
                Created On: {formatDate(blog.createdAt)}
              </Text>
              <Text color='white'>
                Last Updated On: {formatDate(blog.updatedAt)}
              </Text>
            </div>
          </div>
          <div className={styles.blogContent}>
            <Text size={'1.5rem'} color='white'>
              {blog.description}
            </Text>
          </div>
          <div className={styles.commentsCont}>
            <Text color='white' h3>
              Comments:
            </Text>
            {blog.comments.map((comment) => (
              <Comments {...comment} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

type Params = {
  params: {
    id: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const blog = await getBlogsById(params.id);
  return {
    props: {
      blog,
    },
  };
}

export async function getStaticPaths() {
  const data = await getBlogs();
  return {
    paths: data.map((blog: Blogs) => {
      return {
        params: {
          id: String(blog.id),
        },
      };
    }),
    fallback: false,
  };
}

export default BlogScreen;
