import { Link } from "react-router-dom";
import "./cards.scss";
import { useEffect, useState } from "react";
import { getAllAccommodations } from "../../api/api";

export default function Cards() {
  const [accommodations, setAccommodations] = useState([]);

  const loadAccommodations = async () => {
    const AccommodationsData = await getAllAccommodations();
    setAccommodations(AccommodationsData);
  };

  useEffect(() => {
    loadAccommodations();
  }, []);

  return (
    <section className="cardsContainer">
      {accommodations.map((accommodation) => {
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
