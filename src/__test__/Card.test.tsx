import { render, screen } from '@testing-library/react';
import Card from '../pages/components/card/card';
import '@testing-library/jest-dom';
import Wrapper from './Wrapper';
import { Blogs } from '../types';

const TestData: Blogs = {
  title: 'title 6',
  description:
    'Sed illo est fugit doloremque corporis cupiditate ex exercitationem dolor. Ut tempore dolorem quis. Consequatur voluptatum beatae dolorem animi vel illo officia dolor. Occaecati et sed reprehenderit sed qui voluptatum voluptatum ea. Rerum nobis amet.',
  createdAt: new Date('2021-04-08T21:01:46.141Z'),
  updatedAt: new Date('2021-09-17T14:43:30.924Z'),
  id: '6',
  authors: [],
  comments: [],
};

test('renders App Root', () => {
  render(<Card blog={TestData}></Card>);
});
