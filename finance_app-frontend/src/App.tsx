import './others/App.css';
import MainRouter from './screens/router';
import { Provider } from 'react-redux';
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
