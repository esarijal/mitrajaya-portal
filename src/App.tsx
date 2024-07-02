import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import { lazy, Suspense } from "react";
import Loader from "./components/custom/loader";

const RegionalNews = lazy(() => import("./pages/RegionalNews"));
const OtherNewsCategory = lazy(() => import("./pages/OtherNewsCategory"));
const NewsDetail = lazy(() => import("./pages/NewsDetail"));
const ProvinceNews = lazy(() => import("./pages/ProvinceNews"));
const CityNews = lazy(() => import("./pages/CityNews"));
const DistrictNews = lazy(() => import("./pages/DistrictNews"));
const SubdistrictNews = lazy(() => import("./pages/SubdistrictNews"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            {/* regional news */}
            <Route path="daerah" element={<RegionalNews />} />
            {/* province */}
            <Route
              path="daerah/:prov_id/:prov_name"
              element={<ProvinceNews />}
            />
            {/* city */}
            <Route
              path="daerah/:prov_id/:prov_name/:city_id/:city_name"
              element={<CityNews />}
            />
            {/* district */}
            <Route
              path="daerah/:prov_id/:prov_name/:city_id/:city_name/:district_id/:district_name"
              element={<DistrictNews />}
            />
            {/* subdistrict */}
            <Route
              path="daerah/:prov_id/:prov_name/:city_id/:city_name/:district_id/:district_name/:subdistrict_id/:subdistrict_name"
              element={<SubdistrictNews />}
            />

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
