import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './components/styles/Global';

import MainPage from './components/MainPage';
import CreatePage from './components/CreatePage';
// import Step2Page from './components/Step2Page';
// import Step3Page from './components/Step3Page';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/create' element={<CreatePage />} />
          {/* <Route path='/step2' element={<Step2Page />} />
          <Route path='/step3' element={<Step3Page />} /> */}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
