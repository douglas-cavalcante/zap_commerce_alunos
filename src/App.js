import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import './App.css';

import Header from './components/Header';

import Routes from './routes';
import { store, persistor} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
