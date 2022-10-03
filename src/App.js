import Home from "Pages/Home";
import Survey from "Pages/Survey";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // return <Home />;
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="survey" element={<Survey />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
