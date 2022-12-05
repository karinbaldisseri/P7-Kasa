import Banner from "../../components/banner";
import AboutBannerImg from "../../assets/about_banner_img.png";
import Collapse from "../../components/collapse";

export default function About() {
  return (
    <main>
      <Banner>
        <img src={AboutBannerImg} alt="paysage montagneux" />
      </Banner>
      <Collapse
        header="Title"
        content="Collapse element text : Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed eu iaculis lacus. Quisque diam nibh, finibus ac
          neque vel, sollicitudin interdum urna. Nullam id convallis est. Proin
          gravida sapien eu imperdiet posuere. Nullam sed massa at sapien
          bibendum accumsan."
      />
    </main>
  );
}
