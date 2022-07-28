import toJson from 'enzyme-to-json';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Login, mapDispatchToProps, mapStateToProps } from './login';
let wrapper;

configure({ adapter: new Adapter() });
const defaultProps = {
  appAction: {
    loginUser: jest.fn().mockImplementation(() => Promise.resolve()),
  },
  navigate: jest.fn().mockImplementation('/register')

}
beforeEach(() => {
  wrapper = shallow(<Login {...defaultProps} />);
});

describe('<Login />', () => {
  it('should render App component without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('<AdaptiveTaskInstructions /> Snapshot Test', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('username test', () => {
    const component = wrapper.instance();
    const uName = wrapper.find({testID:'userNameTestId'}).props();
    uName.onChangeEvent({target: {value: 'satish@gmail.com'}});
    expect(component.state.username).toEqual('satish@gmail.com');
  });

  it('username test not equal', () => {
    const component = wrapper.instance();
    const uName = wrapper.find({testID:'userNameTestId'}).props();
    uName.onChangeEvent({target: {value: 'satish@gmail.com'}});
    expect(component.state.username).not.toBe('aparna@gmail.com');
  });

  it('password test', () => {
    const component = wrapper.instance();
    const uName = wrapper.find({testID:'passwordTestId'}).props();
    uName.onChangeEvent({target: {value: 'attada'}});
    expect(component.state.password).toEqual('attada');
  });

  it('submit button test', () => {
    const uName = wrapper.find({testID:'submitTestID'}).props();
    uName.onSubmitBtn();
  });

  
  it('register button test', () => {
    const uName = wrapper.find({testID:'registerTestID'}).props();
    uName.onSubmitBtn();
  });

  it('validate form test', () => {
    const component = wrapper.instance();
    wrapper.setState({username: 'satish', password: 'attada'});

    const result = component.validateForm();
    expect(result).toBeTruthy();
    // expect(component.state.password).toEqual('attada');
  });

  it('validate form test with username empty', () => {
    const component = wrapper.instance();
    wrapper.setState({username: '', password: 'attada'});

    const result = component.validateForm();
    expect(result).toBeFalsy();
    // expect(component.state.password).toEqual('attada');
  });

  it('validate form test with password empty', () => {
    const component = wrapper.instance();
    wrapper.setState({username: 'satisg', password: ''});

    const result = component.validateForm();
    expect(result).toBeFalsy();
    // expect(component.state.password).toEqual('attada');
  });

  it('should call mapState', () => {
    const mockedState = {
      user: {
        userData: {
        name: 'aaaa',
        email: 'xxx@gmail.com',
      }}
    };
    const state = mapStateToProps(mockedState);
    expect(state.userData).toBeDefined();
  });

  it('should call mapDispatchToProps', () => {
    const mockedState = {};
    const state = mapDispatchToProps(mockedState);
    expect(state.appAction).toBeDefined();
  });


});    