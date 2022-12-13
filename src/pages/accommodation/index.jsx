import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAccommodationById } from "../../api/api";
import Slideshow from "../../components/slideshow";
import Stars from "../../components/stars";
import Tags from "../../components/tags";
import Collapse from "../../components/collapse";
import Error from "../error";
import "./accommodation.scss";

function Accommodation() {
  const [acc, setAcc] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const loadAcc = async (paramsId) => {
    setIsLoading(true);
    try {
      const accData = await getAccommodationById(paramsId);
      setAcc(accData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAcc(id);
  }, [id]);

  return (
    <main>
      {isLoading && <p className="loader">Loading...</p>}
      {!isLoading && !acc && <Error />}
      {!isLoading && acc && (
        <>
          <Slideshow images={acc.pictures} />
          <section className="infoSection">
            <div>
              <h1>{acc.title}</h1>
              <p>{acc.location}</p>
              <Tags tagItems={acc.tags} />
            </div>
            <div>
              <div className="profileInfo">
                <p>{acc.host.name}</p>
                <img src={acc.host.picture} alt="Profile" />
              </div>
              <Stars rating={acc.rating} />
            </div>
          </section>
          <section className="collapseSection">
            <Collapse header="Description" content={acc.description} />
            <Collapse
              header="Équipements"
              content={acc.equipments.map((item) => {
                return (
                  <div className="equipments" key={item}>
                    <p>{item}</p>
                  </div>
                );
              })}
            />
          </section>
        </>
      )}
    </main>
  );
}

export default Accommodation;
