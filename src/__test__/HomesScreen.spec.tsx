import { render, screen } from '@testing-library/react';
import HomeScreen from '../pages/Screens/Home/HomeScreen';
import '@testing-library/jest-dom';
import Wrapper from './Wrapper';

test('renders Home Screen', () => {
  render(
    <Wrapper>
      <HomeScreen />
    </Wrapper>
  );

  screen.getByText('Blog Posts');
});
