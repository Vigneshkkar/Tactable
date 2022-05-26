import { Progress, Text } from '@nextui-org/react';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { pageItems } from '../../../constants';
import { getBlogs, getPaginatedBlogs } from '../../../services/getBlogs';
import { Blogs } from '../../../types';
import Card from '../../components/card/card';
import ErrorPop from '../../components/errorPop/ErrorPop';
import Paginator from '../../components/Paginator/Paginator';

import styles from './Home.module.scss';

const HomeScreen: NextPage = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const [pageItemsData, setpageItemsData] = useState<Blogs[]>([]);
  const { isLoading, isError, isSuccess, data } = useQuery('blogs', getBlogs);

  // console.log(isLoading, isError, isSuccess, data);
  useEffect(() => {
    setpageItemsData(getPaginatedBlogs(data, currentPage, pageItems));

    return () => {
      setpageItemsData([]);
    };
  }, [currentPage, data]);

  return (
    <div className={styles.wrapper}>
      <Text
        color='#fff'
        css={{ margin: '2rem', textShadow: '1px 1px 8px #925847' }}
        h1>
        Blog Posts
      </Text>
      {isLoading ? (
        <div className={styles.ProgCont}>
          <Progress
            indeterminated
            value={50}
            color='secondary'
            status='secondary'
            shadow
          />
          <Text
            h3
            // css={{
            //   textGradient: '45deg, $blue600 -20%, $pink600 50%',
            // }}
            color='secondary'
            weight='bold'>
            Loading Awesome Blogs...
          </Text>
        </div>
      ) : null}
      {isError ? <ErrorPop /> : null}

      {isSuccess && data.length > 0 ? (
        <>
          {pageItemsData &&
            pageItemsData.map((blog: Blogs) => (
              <Card key={`id_${blog.id}`} blog={blog} />
            ))}
          {data && data.length > pageItems && (
            <Paginator
              total={data.length}
              current={(page: number) => {
                setcurrentPage(page);
              }}
            />
          )}
        </>
      ) : (
        <Text h3 color='error'>
          No blogs to show right now please try again later.
        </Text>
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('blogs', getBlogs);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default HomeScreen;
