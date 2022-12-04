import { Link } from "react-router-dom";
import "./cards.scss";
import AccommodationData from "../../data/accomodations.json";

export default function Cards() {
  return (
    <section className="cardsContainer">
      {AccommodationData.map((accommodation) => {
        return (
          <Link
            to={`/accommodation/${accommodation.id}`}
            key={accommodation.id}
          >
            <article>
              <img src={accommodation.cover} alt="" />
              <p>{accommodation.title}</p>
            </article>
          </Link>
        );
      })}
    </section>
  );
}
