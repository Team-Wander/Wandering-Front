import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, InputPage, Card } from 'pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/input"
        element={<InputPage />}
      />
      <Route path="/card" element={<Card />} />
    </Routes>
  );
}

export default App;
