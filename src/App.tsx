import "./App.scss";

import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
