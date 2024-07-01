import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import { lazy, Suspense } from "react";

const RegionalNews = lazy(() => import("./pages/RegionalNews"));
const OtherNewsCategory = lazy(() => import("./pages/OtherNewsCategory"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="daerah" element={<RegionalNews />} />

            {/* other news category route */}
            <Route path="/berita/:id/:name" element={<OtherNewsCategory />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
