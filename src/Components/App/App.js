import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import Navbar from "../Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/buttons" />} />
        <Route path="/buttons/*" element={<Wrapper />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
