import Banner from "../../components/banner";
import AboutBannerImg from "../../assets/about_banner_img.png";

export default function About() {
  return (
    <>
      <Banner>
        <img src={AboutBannerImg} alt="paysage montagneux" />
      </Banner>
      <div> Collapse section</div>
    </>
  );
}
