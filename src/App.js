import './App.css';
import RoutesContainer from "./routes/routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers'
import thunk from "redux-thunk" 
const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <RoutesContainer />
    </Provider>
  );
}

export default App;

