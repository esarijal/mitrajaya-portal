import CityTags from "@/components/custom/city-tags";
import DistrictTags from "@/components/custom/district-tags";
import NewsCard from "@/components/custom/news-card";
import ProvinceTags from "@/components/custom/province-tags";
import RegionalBreadcrumb from "@/components/custom/regional-breadcrumb";
import SubDistrictTags from "@/components/custom/subdistrict-tags";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Share2, User } from "lucide-react";
import { useParams } from "react-router-dom";

function RegionalNewsDetail() {
  const news = {
    id: 0,
    title:
      "Pemuda Desa Ciptakan Inovasi Energi Terbarukan, Raup Dukungan Nasional",
    content:
      '<p>Sebuah inovasi dari seorang pemuda desa di Kabupaten Wonosobo, Jawa Tengah, berhasil menarik perhatian nasional. Bayu Santoso, seorang pemuda berusia 24 tahun, menciptakan sebuah alat yang mampu mengubah limbah organik menjadi energi listrik. Alat ini diharapkan dapat menjadi solusi bagi masalah energi di daerah terpencil.</p><p><br></p><p>Bayu, yang merupakan lulusan Teknik Elektro dari Universitas Gadjah Mada, terinspirasi dari banyaknya limbah organik di desanya yang tidak termanfaatkan dengan baik. Melalui penelitian selama dua tahun, ia berhasil menciptakan sebuah prototipe alat pengolah limbah organik menjadi listrik yang efisien dan ramah lingkungan.</p><p><br></p><p>Inovasi ini mendapatkan perhatian dari berbagai kalangan, termasuk pemerintah daerah dan beberapa perusahaan swasta yang tertarik untuk mengembangkan teknologi ini lebih lanjut. Bupati Wonosobo, Agus Subagyo, dalam sambutannya saat peluncuran alat tersebut, menyatakan bahwa inovasi ini dapat memberikan dampak positif yang signifikan bagi masyarakat desa yang selama ini mengalami kesulitan akses listrik.</p><p><br></p><p>"Saya sangat bangga dengan pencapaian Bayu. Inovasi ini tidak hanya menunjukkan kecerdasannya, tetapi juga kepeduliannya terhadap lingkungan dan masyarakat sekitar. Kami akan mendukung sepenuhnya pengembangan teknologi ini," ujar Agus Subagyo.</p><p><br></p><p>Selain pemerintah daerah, beberapa perusahaan swasta juga telah menunjukkan minat untuk berinvestasi dalam proyek ini. PT Energi Hijau Nusantara, sebuah perusahaan yang bergerak di bidang energi terbarukan, telah menyatakan kesiapannya untuk bekerja sama dengan Bayu dalam produksi massal alat ini.</p><p><br></p><p>Bayu berharap inovasinya dapat menjadi solusi bagi masalah energi di daerah terpencil dan menginspirasi pemuda lainnya untuk berinovasi demi kemajuan bangsa. "Saya ingin alat ini bisa bermanfaat bagi banyak orang dan membantu meningkatkan kualitas hidup masyarakat di daerah terpencil," ujar Bayu.</p>',
    image_url:
      "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg",
    status: "published",
    author_id: 0,
    category_id: 0,
    created_at: "2024-07-01T08:11:20.194Z",
    updated_at: "2024-07-01T08:11:20.194Z",
    prov_id: 0,
    kota_id: 0,
    kec_id: 0,
    kel_id: 0,
    published_at: "2024-07-01T08:11:20.194Z",
  };

  const relatedTags = [
    {
      id: 1,
      name: "Tag 1",
      article_count: 1,
    },
    {
      id: 2,
      name: "Tag 2",
      article_count: 1,
    },
    {
      id: 3,
      name: "Tag 3",
      article_count: 1,
    },
    {
      id: 4,
      name: "Tag 4",
      article_count: 1,
    },
    {
      id: 5,
      name: "Tag 5",
      article_count: 1,
    },
  ];

  const relatedArticles = [
    {
      id: 1,
      title:
        "Pemuda Desa Ciptakan Inovasi Energi Terbarukan, Raup Dukungan Nasional",
      image_url:
        "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg",
      published_at: "2021-01-01",
      updated_at: "2021-01-01",
    },
    {
      id: 2,
      title:
        "Pemuda Desa Ciptakan Inovasi Energi Terbarukan, Raup Dukungan Nasional",
      image_url:
        "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg",
      published_at: "2021-01-01",
      updated_at: "2021-01-01",
    },
    {
      id: 3,
      title:
        "Pemuda Desa Ciptakan Inovasi Energi Terbarukan, Raup Dukungan Nasional",
      image_url:
        "https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg",
      published_at: "2021-01-01",
      updated_at: "2021-01-01",
    },
  ];

  const { prov_name, city_name, district_name, subdistrict_name } = useParams();

  const renderRegionNewsTags = () => {
    if (subdistrict_name) {
      return <SubDistrictTags color="secondary" />;
    } else if (district_name) {
      return <DistrictTags color="secondary" />;
    } else if (city_name) {
      return <CityTags color="secondary" />;
    } else if (prov_name) {
      return <ProvinceTags color="secondary" />;
    } else {
      return null;
    }
  };

  const handleRenderContent = (content: string) => {
    return {
      __html: content,
    };
  };

  return (
    <div className="pt-5 space-y-6 md:pt-20 md:space-y-10">
      <div>
        <RegionalBreadcrumb color="secondary" />
      </div>
      <article className="space-y-6 md:space-y-10">
        {/* title */}
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-xl font-semibold md:text-4xl">{news.title}</h1>
          <div className="flex items-center justify-between px-2 py-4 border-y border-[#DDE2EE] md:py-5 md:px-5">
            <time
              className="text-xs font-normal md:text-base text-primary-foreground"
              dateTime={
                news.updated_at > news.published_at
                  ? news.updated_at
                  : news.published_at
              }
            >
              {new Date(
                news.updated_at > news.published_at
                  ? news.updated_at
                  : news.published_at
              ).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <button className="flex gap-2 text-xs font-normal text-primary-foreground md:text-base">
              Share{" "}
              <Share2
                fill="#667697"
                className="h-[14px] aspect-square md:h-6"
              />
            </button>
          </div>
        </div>

        {/* image cover */}
        <img
          src={news.image_url}
          alt="image"
          className="w-full rounded-[8px] h-[450px] object-cover"
        />
      </article>
      <div className="flex flex-row-reverse lg:gap-16">
        {/* region news tags */}
        <div className="hidden lg:block">{renderRegionNewsTags()}</div>

        <div className="space-y-6 md:space-y-8">
          {/* content */}
          <article>
            <div
              className="text-base md:text-lg"
              dangerouslySetInnerHTML={handleRenderContent(news?.content)}
            />
          </article>

          {/* region news tags */}
          <div className="block lg:hidden">{renderRegionNewsTags()}</div>
          {/* related tags */}
          {relatedTags && (
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-secondary-foreground">Tag Terkait</h2>
              <div className="flex flex-wrap gap-2 md:gap-4">
                {relatedTags.map((tag) => (
                  <Badge variant={"secondary"} className="h-10 cursor-pointer">
                    {tag.name}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* comments */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-secondary-foreground">Komentar</h2>
            <form
              action=""
              className="flex items-center gap-5 py-5 border-b border-[#DDE2EE]"
            >
              <div className="p-[10px] md:p-5 bg-secondary rounded-full">
                <User fill="#6C7EA5" stroke="#6C7EA5" />
              </div>
              <input
                type="text"
                className="w-full focus:outline-none"
                placeholder="Tambahkan komentar..."
              />
              <Button
                className="bg-[#151D2E] hover:bg-[#151D2E]/80 text-active"
                variant={"secondary"}
              >
                Kirim
              </Button>
            </form>
          </div>

          {/* related articles */}
          {relatedArticles && (
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-secondary-foreground">Berita terkait</h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {relatedArticles.map((article) => (
                  <NewsCard
                    size="regular"
                    color="secondary"
                    key={article.id}
                    id={article.id}
                    title={article.title}
                    image={article.image_url}
                    publishDate={article.published_at}
                    updateDate={article.updated_at}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RegionalNewsDetail;
