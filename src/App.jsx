import './App.css';
import React from "react";
import Home from './components/home/home';
import Info from './components/info/info';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Dialog from './components/Dialogs/Dialogs';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/dialog" element={<Dialog/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
