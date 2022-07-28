import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/react_movie/movie/:id" element={<Detail />}></Route>
        <Route path="/react_movie/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
