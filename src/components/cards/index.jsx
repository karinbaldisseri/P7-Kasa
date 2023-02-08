import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./cards.scss";
import { getAllAccommodations } from "../../api/api";
import Error from "../../pages/error";

export default function Cards() {
  const [accommodations, setAccommodations] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadAccommodations = async () => {
    setIsLoading(true);
    try {
      const accommodationsData = await getAllAccommodations();
      setAccommodations(accommodationsData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAccommodations();
  }, []);

  return (
    <section className="cardsContainer">
      {isLoading && <p className="loader">Loading...</p>}
      {!isLoading && !accommodations && <Error />}
      {!isLoading && accommodations && (
        <>
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
        </>
      )}
    </section>
  );
}
