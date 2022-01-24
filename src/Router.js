import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';

import FirstCalculator from './pages/FirstCalculator/FirstCalculator';
import SecondCalculator from './pages/SecondCalculator/SecondCalculator';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/firstcalculator" element={<FirstCalculator />} />
        <Route path="/secondcalculator" element={<SecondCalculator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
