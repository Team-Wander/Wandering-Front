import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages';
import InputPage from 'pages/InputPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/input"
        element={<InputPage />}
      />
    </Routes>
  );
}

export default App;
