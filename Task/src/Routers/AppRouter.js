import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Component/HomePage";
import ShowMore from "../Component/ShowMore";

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/showmore" element={<ShowMore />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
