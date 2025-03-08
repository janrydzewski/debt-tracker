import { root } from '@lynx-js/react';

import { App } from './App.js';
import { MemoryRouter, Route, Routes } from 'react-router';
import Home from './pages/Home.jsx';
import DebtDetails from './features/DebtDetails/index.jsx';

// root.render(<App />)

root.render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/debt/:id" element={<DebtDetails />} />
    </Routes>
  </MemoryRouter>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
