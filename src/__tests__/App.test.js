import { shallow } from 'enzyme';
import App from '../App';

describe('App Component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
