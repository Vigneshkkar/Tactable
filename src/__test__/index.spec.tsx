import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
import Wrapper from './Wrapper';

test('renders App Root', () => {
  render(
    <Wrapper>
      <Home />
    </Wrapper>
  );
});
