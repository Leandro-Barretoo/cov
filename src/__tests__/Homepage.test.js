import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import Homepage from '../components/Homepage';
import store from '../redux/configureStore';
import { BrowserRouter } from 'react-router-dom';

const server = setupServer(
  rest.get('https://corona-api.com/countries', (req, res, ctx) => {
    return res(ctx.json(
     { data: [
        {
          code: 'PT',
          name: 'Portugal',
          population: 10203040,
        },
        {
          code: 'US',
          name: 'United States',
          population: 50607080,
        }
      ]}
    ))
  }),
)

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

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

  it('shows the countries on the page', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Homepage />
        </Provider>
      </BrowserRouter>
    )
    await waitFor(() => expect(screen.getByText('Portugal')).toBeTruthy());
    await waitFor(() => expect(screen.getByText('United States')).toBeTruthy());
  });

  it('goes to a details page when a user clicks a country', async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Homepage />
        </Provider>
      </BrowserRouter>
    )

    await waitFor(() => userEvent.click(screen.getByText('Portugal')));

    await waitFor(() => expect(window.location.pathname).toEqual('/PT'));
  })
});
