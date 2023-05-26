import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
