import Banner from "../../components/banner";
import HomeBannerImg from "../../assets/home_banner_img.png";
import HomeBannerMobile from "../../assets/home_banner_mobile.png";
import Cards from "../../components/cards";
import "./home.scss";

export default function Home() {
  return (
    <main className="homePage">
      <Banner>
        <>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet={HomeBannerMobile}
              alt="paysage côtier"
            />
            <img src={HomeBannerImg} alt="paysage côtier" />
          </picture>
          <h2>Chez vous, partout et ailleurs</h2>
        </>
      </Banner>
      <Cards />
    </main>
  );
}
