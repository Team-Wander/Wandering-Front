import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Write, InputPage, Temp, NoPage } from 'pages';
import Post from 'pages/post';
import My from 'pages/my';
import Edit from 'pages/my/edit';
import Cancle from 'pages/my/cancle';

function App() {
  return (
    <Routes>
      <Route path="*" element={<NoPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/write" element={<Write />} />
      <Route path="/input" element={<InputPage />} />
      <Route path="/temp" element={<Temp />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/my" element={<My />} />
      <Route path="/my/edit/:id" element={<Edit />} />
      <Route path="/my/cancle/:id" element={<Cancle />} />
    </Routes>
  );
}

export default App;
