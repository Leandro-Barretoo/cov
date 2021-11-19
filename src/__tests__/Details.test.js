import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import Details from '../components/Homepage';
import store from '../redux/configureStore';

describe('Components: Details', () => {
  it('renders without crashing', () => {
    expect(
      shallow(
        <Provider store={store}>
          <Details />
        </Provider>,
      ).length,
    ).toEqual(1);
    expect(
      shallow(
        <Provider store={store}>
          <Details />
        </Provider>,
      ).length,
    ).toMatchSnapshot();
  });
});
