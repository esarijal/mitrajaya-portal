import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="daerah" element={<p>comming soon</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
