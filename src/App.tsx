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
const RegionalNewsDetail = lazy(() => import("./pages/RegionalNewsDetail"));
const NewsTags = lazy(() => import("./pages/NewsTags"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            {/* regional news */}
            <Route path="daerah/:id" element={<RegionalNews />} />
            <Route
              path="detail-berita/daerah/:id/:news_id/:news_title"
              element={<RegionalNewsDetail />}
            />

            {/* province */}
            <Route
              path="daerah/:id/:prov_id/:prov_name"
              element={<ProvinceNews />}
            />
            <Route
              path="detail-berita/daerah/:id/:prov_id/:prov_name/:news_id/:news_title"
              element={<RegionalNewsDetail />}
            />

            {/* city */}
            <Route
              path="daerah/:id/:prov_id/:prov_name/:city_id/:city_name"
              element={<CityNews />}
            />
            <Route
              path="detail-berita/daerah/:id/:prov_id/:prov_name/:city_id/:city_name/:news_id/:news_title"
              element={<RegionalNewsDetail />}
            />

            {/* district */}
            <Route
              path="daerah/:id/:prov_id/:prov_name/:city_id/:city_name/:district_id/:district_name"
              element={<DistrictNews />}
            />
            <Route
              path="detail-berita/daerah/:id/:prov_id/:prov_name/:city_id/:city_name/:district_id/:district_name/:news_id/:news_title"
              element={<RegionalNewsDetail />}
            />

            {/* subdistrict */}
            <Route
              path="daerah/:id/:prov_id/:prov_name/:city_id/:city_name/:district_id/:district_name/:subdistrict_id/:subdistrict_name"
              element={<SubdistrictNews />}
            />
            <Route
              path="detail-berita/daerah/:id/:prov_id/:prov_name/:city_id/:city_name/:district_id/:district_name/:subdistrict_id/:subdistrict_name/:news_id/:news_title"
              element={<RegionalNewsDetail />}
            />

            {/* news tags */}
            <Route path="/tag/:tag_id/:tag_name" element={<NewsTags />} />

            {/* other news category route */}
            <Route path="/berita/:id/:name" element={<OtherNewsCategory />} />

            {/* news detail */}
            <Route path="/detail-berita/:id/:title" element={<NewsDetail />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
