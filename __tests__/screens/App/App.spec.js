import React from 'react';
import App from '../../../App';

import renderer from 'react-test-renderer';

describe('Should render all tests in App', () => {
  const tree = renderer.create(<App />).toJSON();

  test('renders correctly App component', () => {
    renderer.create(<App />);
  });

  test('renders correctly snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
