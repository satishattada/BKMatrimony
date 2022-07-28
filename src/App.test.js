import { render } from '@testing-library/react';
import * as Redux from "react-redux";
import { App } from './App';
jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
}));

jest.mock('./routes/routes.js', () => () => {
    return <mock-modal data-testid="modal" />;
});

const rrd = require('react-router-dom');

jest.spyOn(rrd, 'BrowserRouter').mockImplementation(({ children }) => children);
jest.mock('react-router-dom', () => {
    // Require the original module to not be mocked...
    const originalModule = jest.requireActual('react-router-dom');

    return {
        __esModule: true,
        ...originalModule,
        // add your noops here
        useParams: jest.fn(),
        useHistory: jest.fn(),
    };
});

describe("App", () => {
    let mockedState = {
        accessToken: undefined,
    };

    beforeEach(() => {
        Redux.useSelector.mockImplementation((callback) => {
            return callback(mockedState);
        });
    });


    it("app with login", () => {
        const { queryByTestId } = render(<App />);
        expect(queryByTestId("login")).toBeDefined;

    });


    const useSelectorMock = jest.spyOn(Redux, 'useSelector')
    beforeEach(() => {
        useSelectorMock.mockClear();
    });

    beforeEach(() => {
        Redux.useSelector.mockImplementation((callback) => {
            return callback(mockedState);
        });
    });

    it("app with login and mock selector", () => {
        useSelectorMock.mockReturnValue(undefined)

        const { queryByTestId } = render(<App />);
        expect(queryByTestId("modal")).toBeDefined;
        expect(queryByTestId("login")).toBeDefined;

    });

    beforeEach(() => {
        useSelectorMock.mockClear();
    });


    it("app with route", () => {
        useSelectorMock.mockReturnValue('xxxx')
        const { queryByTestId } = render(<App />);
        expect(queryByTestId("modal")).toBeDefined;
        expect(queryByTestId("login")).toBeDefined;

    });


});