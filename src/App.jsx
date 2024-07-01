import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./components/Applayout";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
