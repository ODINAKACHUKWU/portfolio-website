import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Provider } from './utils/chakra-ui/provider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BaseRoute } from './routes/BaseRoute';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/*" element={<BaseRoute />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
