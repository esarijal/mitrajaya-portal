import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import { lazy, Suspense } from "react";
import Loader from "./components/custom/loader";

const RegionalNews = lazy(() => import("./pages/RegionalNews"));
const OtherNewsCategory = lazy(() => import("./pages/OtherNewsCategory"));
const NewsDetail = lazy(() => import("./pages/NewsDetail"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="daerah" element={<RegionalNews />} />

            {/* other news category route */}
            <Route path="/berita/:id/:name" element={<OtherNewsCategory />} />

            {/* news detail */}
            <Route path="/detail-berita/:id" element={<NewsDetail />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
