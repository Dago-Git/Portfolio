import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/*mandea fona le path "*" ra mtaper gegy2 ny utilisateur /       <Route path='/tongasoa' element={<Tongasoa />} ></Route>/*/}
        <Route path='*' element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;