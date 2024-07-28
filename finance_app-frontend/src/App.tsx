import { configureStore } from '@reduxjs/toolkit';
import './others/App.css';
import MainRouter from './screens/router';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducers from './store/reducers/index';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainRouter />
      </div>
    </Provider>
  );
}

export default App;
