import Banner from "../../components/banner";
import AboutBannerImg from "../../assets/about_banner_img.png";
import AboutBannerMobile from "../../assets/about_banner_mobile.png";
import Collapse from "../../components/collapse";

export default function About() {
  const aboutData = [
    {
      id: "1",
      header: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      id: "2",
      header: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      id: "3",
      header: "Service",
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      id: "4",
      header: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <main className="aboutPage">
      <Banner>
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={AboutBannerMobile}
            alt="paysage côtier"
          />
          <img src={AboutBannerImg} alt="paysage montagneux" />
        </picture>
      </Banner>
      {aboutData.map((item) => {
        return (
          <Collapse header={item.header} content={item.content} key={item.id} />
        );
      })}
    </main>
  );
}
