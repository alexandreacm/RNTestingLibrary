import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Should render all tests in App', () => {
  const tree = renderer.create(<App />);

  test('renders correctly App component', () => {
    renderer.create(<App />);
  });

  test('renders correctly snapshot', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
