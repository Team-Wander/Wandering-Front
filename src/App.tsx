import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Home,
  Write,
  InputPage,
  Temp,
  NoPage,
} from 'pages';

function App() {
  return (
    <Routes>
      <Route path="*" element={<NoPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/write" element={<Write />} />
      <Route
        path="/input"
        element={<InputPage />}
      />
      <Route path="/temp" element={<Temp />} />
    </Routes>
  );
}

export default App;
