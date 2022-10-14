import Home from "Pages/Home";
import Survey from "Pages/Survey";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import General from "Pages/Survey/General";
import Symptoms from "Pages/Survey/Symptoms";
import LengthAndMeds from "Pages/Survey/LengthAndMeds";
import Experience from "Pages/Survey/Experience";
import FoodWater from "Pages/Survey/FoodWater";
import Misc from "Pages/Survey/Misc";

const WithNav = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<WithNav />}>
          <Route path="general" element={<General />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="survey" element={<Survey />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="symptoms" element={<Symptoms />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="LengthAndMeds" element={<LengthAndMeds />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="Experience" element={<Experience />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="FoodWater" element={<FoodWater />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="Misc" element={<Misc />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
