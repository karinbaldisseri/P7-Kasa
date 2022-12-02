import Banner from "../../components/banner";
import HomeBannerImg from "../../assets/home_banner_img.png";

export default function Home() {
  return (
    <>
      {/* <Banner
        title="Chez vous, partout et ailleurs"
        img={HomeBannerImg}
        alt="paysage"
      /> */}
      <Banner>
        <>
          <img src={HomeBannerImg} alt="paysage" />
          <h2>Chez vous, partout et ailleurs</h2>
        </>
      </Banner>
    </>
  );
}
