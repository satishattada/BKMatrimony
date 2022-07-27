import { render, screen } from '@testing-library/react';
import App from './App';
// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useSelector: jest.fn()
// }));
describe("App", () => {

  // beforeEach(() => {
  //   useSelector.mockImplementation(callback => {
  //     return callback(mockAppState);
  //   });
  // });
  // afterEach(() => {
  //   useSelector.mockClear();
  // });

test('renders learn react link', () => {
  const { id } = render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
});