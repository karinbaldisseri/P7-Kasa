import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "./cards.scss";
import { getAllAccommodations } from "../../api/api";

export default function Cards() {
  const [accommodations, setAccommodations] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef();

  const loadAccommodations = async () => {
    setIsLoading(true);
    try {
      const accommodationsData = await getAllAccommodations();
      setAccommodations(accommodationsData);
    } catch (error) {
      setErrMsg(
        `Erreur de chargement des hébergements, veuillez réessayer svp !`
      );
      throw new Error(error);
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
      {!isLoading && !accommodations && (
        <p
          ref={errRef}
          className={errMsg && "errMsg"}
          aria-live="assertive" // if focus on this ref element, it will be announced with the screen reader
        >
          {errMsg}
        </p>
      )}
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
