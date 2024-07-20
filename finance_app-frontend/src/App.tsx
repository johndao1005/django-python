import { configureStore } from '@reduxjs/toolkit';
import './others/App.css';
import MainRouter from './screens/router';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducers from './store/reducers/index';

function App() {
  const store = configureStore({ reducer: rootReducers });
  //TODO Add Token and check if token is valid 
  //TODO Check Theme and set it
  //TODO refresh token if needed
  //   // Get account details
  //   useEffect(() => {
  //     // Authentication
  //     axios.get(AppAPIList.Account)
  //         .then(response => {
  //             console.log(response)
  //         })
  //         .catch(error => {
  //             console.error(error);
  //         });
  // }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <MainRouter />
      </div>
    </Provider>
  );
}

export default App;
