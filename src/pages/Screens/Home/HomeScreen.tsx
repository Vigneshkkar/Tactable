/**
 * Landing screen for the Home page where all the blogs are displayed
 */
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

// Home screen with components to render the blogs in card
const HomeScreen: NextPage = () => {
  // pagination pointer
  const [currentPage, setcurrentPage] = useState(1);
  // restricted blogs for each page
  const [pageItemsData, setpageItemsData] = useState<Blogs[]>([]);
  // load the data using React Query
  const { isLoading, isError, isSuccess, data } = useQuery('blogs', getBlogs);

  // Handler to detect page change and update the data
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
      {/* while Loading show loading indicator */}
      {isLoading ? (
        <div className={styles.ProgCont}>
          <Progress
            indeterminated
            value={50}
            color='secondary'
            status='secondary'
            shadow
          />
          <Text h3 color='secondary' weight='bold'>
            Loading Awesome Blogs...
          </Text>
        </div>
      ) : null}
      {/* If error while loading data show error message */}
      {isError ? <ErrorPop /> : null}

      {/* Show data on success */}
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
        // Show no data message when no blog is availabe to show
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
