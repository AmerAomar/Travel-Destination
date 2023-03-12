import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import ToursDetails from "./components/TourDetails/TourDetails";
import data from "./data/db.json";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route
        path="/tours/:id"
        element={<ToursDetails tours={data} />}
      />
    </Routes>
  );
}

export default App;
