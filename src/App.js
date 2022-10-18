import Home from "Pages/Home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { React, useState } from "react";
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
  const [store, setStore] = useState({
    Age: "",
    dateOfMigraine: "",
    timeOfMigraine: "",
    locationOfMigraine: "",
    painOrigin: "",
    painSeverity: "",
    altSymptoms: "",
    otherSymptoms: "",
    lengthOfMigraine: "",
    medsForMigraine: "",
    didMedsHelp: "",
    recoveryTime: "",
  });
  console.log(store);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<WithNav />}>
          <Route
            path="general"
            element={<General setStore={setStore} store={store} />}
          />
        </Route>
        <Route element={<WithNav />}>
          <Route
            path="symptoms"
            element={<Symptoms setStore={setStore} store={store} />}
          />
        </Route>
        <Route element={<WithNav />}>
          <Route
            path="LengthAndMeds"
            element={<LengthAndMeds setStore={setStore} store={store} />}
          />
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
