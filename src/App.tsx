import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Peer } from './components/app/Peer';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export const WrappedApp = () => {
  return (
    <BrowserRouter>
      <Peer />
      <App />
    </BrowserRouter>
  );
};
