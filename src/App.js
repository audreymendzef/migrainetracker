import Home from "Pages/Home";
import Survey from "Pages/Survey";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Symptoms from "Pages/Survey/Symptoms";
import LengthAndMeds from "Pages/Survey/LengthAndMeds";

const WithNav = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

function App() {
  // return <Home />;
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<WithNav />}>
          <Route path="survey" element={<Survey />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="symptoms" element={<Symptoms />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="LengthAndMeds" element={<LengthAndMeds />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
