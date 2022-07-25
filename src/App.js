import './App.css';
import RoutesContainer from "./routes/routes";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers'
import thunk from "redux-thunk" 
import Login from './pages/login/login';
const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <Provider store={store}>
      <RoutesContainer />
    </Provider>
  );
}

export default App;

