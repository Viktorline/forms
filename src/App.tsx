import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './components/styles/Global';
import { Helmet } from 'react-helmet';

import MainPage from './components/MainPage';
import CreatePage from './components/CreatePage';

const App = () => {
  return (
    <React.Fragment>
      <Helmet>
        <link
          href='//db.onlinewebfonts.com/c/37086b994764dba84b2ee0f1083bfeed?family=SB+Sans+Interface'
          rel='stylesheet'
          type='text/css'
        />
      </Helmet>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/create' element={<CreatePage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
