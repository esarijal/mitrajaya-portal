import NewsCard from "@/components/custom/news-card";
import NewsCategoryNav from "@/components/custom/news-category-nav";
import RecommendedTags from "@/components/custom/recommended-tags";
import SubDistrictTags from "@/components/custom/subdistrict-tags";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";

function DistrictNews() {
  const districtNews = [
    {
      id: 1,
      title:
        "Pemuda Desa Ciptakan Inovasi Energi Terbarukan, Raup Dukungan Nasional",
      subHeading:
        "Sebuah inovasi dari seorang pemuda desa di Kabupaten Wonosobo, Jawa Tengah, berhasil menarik perhatian nasional. Bayu Santoso, seorang pemuda berusia 24 tahun, menciptakan sebuah alat yang mampu mengubah limbah organik menjadi energi listrik. Alat ini diharapkan dapat menjadi solusi bagi masalah energi di daerah terpencil.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg",
      publishDate: "2021-01-01",
      updateDate: "2021-01-01",
    },
    {
      id: 2,
      title:
        "Pemuda Desa Ciptakan Inovasi Energi Terbarukan, Raup Dukungan Nasional",
      subHeading:
        "Sebuah inovasi dari seorang pemuda desa di Kabupaten Wonosobo, Jawa Tengah, berhasil menarik perhatian nasional. Bayu Santoso, seorang pemuda berusia 24 tahun, menciptakan sebuah alat yang mampu mengubah limbah organik menjadi energi listrik. Alat ini diharapkan dapat menjadi solusi bagi masalah energi di daerah terpencil.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg",
      publishDate: "2021-01-01",
      updateDate: "2021-01-01",
    },
    {
      id: 3,
      title:
        "Pemuda Desa Ciptakan Inovasi Energi Terbarukan, Raup Dukungan Nasional",
      subHeading:
        "Sebuah inovasi dari seorang pemuda desa di Kabupaten Wonosobo, Jawa Tengah, berhasil menarik perhatian nasional. Bayu Santoso, seorang pemuda berusia 24 tahun, menciptakan sebuah alat yang mampu mengubah limbah organik menjadi energi listrik. Alat ini diharapkan dapat menjadi solusi bagi masalah energi di daerah terpencil.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg",
      publishDate: "2021-01-01",
      updateDate: "2021-01-01",
    },
    {
      id: 4,
      title:
        "Pemuda Desa Ciptakan Inovasi Energi Terbarukan, Raup Dukungan Nasional",
      subHeading:
        "Sebuah inovasi dari seorang pemuda desa di Kabupaten Wonosobo, Jawa Tengah, berhasil menarik perhatian nasional. Bayu Santoso, seorang pemuda berusia 24 tahun, menciptakan sebuah alat yang mampu mengubah limbah organik menjadi energi listrik. Alat ini diharapkan dapat menjadi solusi bagi masalah energi di daerah terpencil.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg",
      publishDate: "2021-01-01",
      updateDate: "2021-01-01",
    },
  ];

  const { district_name } = useParams();

  return (
    <div className="space-y-[52px] md:space-y-[72px]">
      <div>
        <NewsCategoryNav />
        <hgroup className="regional-news-title">
          <h1>{district_name}</h1>
          <p>Menampilkan berita di {district_name}</p>
        </hgroup>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {districtNews && districtNews.length > 0 && (
          <div className="flex flex-col items-center gap-4 md:gap-8">
            <div className="space-y-4 md:space-y-8">
              {districtNews.map((article) => (
                <div key={article.id}>
                  <NewsCard
                    id={article.id}
                    size="small"
                    title={article.title}
                    subHeading={article.subHeading}
                    image={article.image}
                    publishDate={article.publishDate}
                    updateDate={article.updateDate}
                  />
                </div>
              ))}
            </div>

            <Button className="w-full md:w-fit" variant={"outline"}>
              Tampilkan Berita Lainnya
            </Button>
          </div>
        )}
        <div className="flex flex-col gap-8">
          <RecommendedTags />
          <SubDistrictTags />
        </div>
      </div>
    </div>
  );
}

export default DistrictNews;
