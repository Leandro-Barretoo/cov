import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import Homepage from '../components/Homepage';
import store from '../redux/configureStore';

describe('Components: Homepage', () => {
  it('renders without crashing', () => {
    expect(
      shallow(
        <Provider store={store}>
          <Homepage />
        </Provider>,
      ).length,
    ).toEqual(1);
    expect(
      shallow(
        <Provider store={store}>
          <Homepage />
        </Provider>,
      ).length,
    ).toMatchSnapshot();
  });
});
