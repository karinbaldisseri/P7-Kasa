import Banner from "../../components/banner";
import HomeBannerImg from "../../assets/home_banner_img.png";

export default function Home() {
  return (
    <div>
      {/* <Banner
        title="Chez vous, partout et ailleurs"
        img={HomeBannerImg}
        alt="paysage"
      /> */}
      <Banner>
        <div>
          <img src={HomeBannerImg} alt="paysage" />
          <h2>Chez vous, partout et ailleurs</h2>
        </div>
      </Banner>
    </div>
  );
}
