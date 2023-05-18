import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, FavoritesPage } from "./pages";
import Navigation from "./components/ui/navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </>
  );
}

export default App;
