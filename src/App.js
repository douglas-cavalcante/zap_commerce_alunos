import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';

import Routes from './routes';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Routes />
    </Provider>
  );
}

export default App;
