import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';

import HomeScreen from './Screens/Home/HomeScreen';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blogs</title>
        <meta name='description' content='Simple Blogs App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeScreen />
    </div>
  );
};

export default Home;
