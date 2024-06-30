import NewsCard from "@/components/custom/news-card";
import NewsCategoryNav from "@/components/custom/news-category-nav";
import ProvinceTags from "@/components/custom/province-tags";
import RecommendedTags from "@/components/custom/recommended-tags";
import ViralNews from "@/components/custom/viral-news";
import { Button } from "@/components/ui/button";

function Home() {
  const topLatestArticles = [
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

  const latestArticles = topLatestArticles;

  const trendingNews = [
    {
      id: 1,
      title: "Breaking News: Market Hits Record High",
      content:
        "The stock market reached an all-time high today, driven by strong earnings reports from major companies.",
      image_url: "https://example.com/image1.jpg",
      status: "published",
      author_id: 101,
      category_id: 5,
      created_at: "2024-01-01T10:00:00Z",
      updated_at: "2024-01-01T12:00:00Z",
      prov_id: 1,
      kota_id: 10,
      kec_id: 100,
      kel_id: 1000,
      published_at: "2024-01-01T12:00:00Z",
      total_interactions: 1500,
    },
    {
      id: 2,
      title: "Local Hero Saves Child from Burning Building",
      content:
        "A local firefighter heroically rescued a child from a burning building, earning praise from the community.",
      image_url: "https://example.com/image2.jpg",
      status: "published",
      author_id: 102,
      category_id: 2,
      created_at: "2024-01-02T09:30:00Z",
      updated_at: "2024-01-02T10:30:00Z",
      prov_id: 2,
      kota_id: 20,
      kec_id: 200,
      kel_id: 2000,
      published_at: "2024-01-02T10:30:00Z",
      total_interactions: 800,
    },
    {
      id: 3,
      title: "Tech Giant Announces New Smartphone",
      content:
        "The latest smartphone from a major tech company boasts cutting-edge features and impressive performance.",
      image_url: "https://example.com/image3.jpg",
      status: "published",
      author_id: 103,
      category_id: 1,
      created_at: "2024-01-03T11:00:00Z",
      updated_at: "2024-01-03T11:30:00Z",
      prov_id: 3,
      kota_id: 30,
      kec_id: 300,
      kel_id: 3000,
      published_at: "2024-01-03T11:30:00Z",
      total_interactions: 1200,
    },
    {
      id: 4,
      title: "Sports Update: Championship Game Results",
      content:
        "The championship game concluded with a thrilling finish, with the underdog team emerging victorious.",
      image_url: "https://example.com/image4.jpg",
      status: "published",
      author_id: 104,
      category_id: 3,
      created_at: "2024-01-04T14:00:00Z",
      updated_at: "2024-01-04T15:00:00Z",
      prov_id: 4,
      kota_id: 40,
      kec_id: 400,
      kel_id: 4000,
      published_at: "2024-01-04T15:00:00Z",
      total_interactions: 2000,
    },
    {
      id: 5,
      title: "Health Alert: New Virus Outbreak",
      content:
        "Health officials are warning about a new virus outbreak in several regions. Precautionary measures are advised.",
      image_url: "https://example.com/image5.jpg",
      status: "published",
      author_id: 105,
      category_id: 4,
      created_at: "2024-01-05T08:00:00Z",
      updated_at: "2024-01-05T09:00:00Z",
      prov_id: 5,
      kota_id: 50,
      kec_id: 500,
      kel_id: 5000,
      published_at: "2024-01-05T09:00:00Z",
      total_interactions: 3000,
    },
  ];

  return (
    <div className="space-y-[52px] md:space-y-[72px]">
      <NewsCategoryNav />
      <div className="flex flex-col gap-8 lg:flex-row">
        {topLatestArticles && topLatestArticles.length > 0 && (
          <div className="grid gap-4 md:grid-cols-3">
            {topLatestArticles.map((article, index) => (
              <div
                className={index === 0 ? "md:col-span-3" : "col-span-1"}
                key={article.id}
              >
                <NewsCard
                  key={article.id}
                  id={article.id}
                  size={index === 0 ? "large" : "regular"}
                  title={article.title}
                  subHeading={article.subHeading}
                  image={article.image}
                  publishDate={article.publishDate}
                  updateDate={article.updateDate}
                />
              </div>
            ))}
          </div>
        )}
        <ViralNews news={trendingNews} />
      </div>

      <div>
        <h2 className="pb-5 border-b my-7 md:my-16">Berita lainnya</h2>
        <div className="flex flex-col gap-8 lg:flex-row">
          {latestArticles && latestArticles.length > 0 && (
            <div className="flex flex-col items-center gap-4 md:gap-8">
              <div className="space-y-4 md:space-y-8">
                {latestArticles.slice(0, 7).map((article) => (
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

              {latestArticles.length > 7 && (
                <Button asChild className="w-full md:w-fit" variant={"outline"}>
                  Tampilkan Berita Lainnya
                </Button>
              )}
            </div>
          )}
          <div className="flex flex-col gap-8">
            <RecommendedTags />
            <ProvinceTags />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
