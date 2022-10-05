import Home from "Pages/Home";
import Survey from "Pages/Survey";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./NavBar";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
