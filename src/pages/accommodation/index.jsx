import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAccommodationById } from "../../api/api";
import Slideshow from "../../components/slideshow";
import Stars from "../../components/stars";
import Tags from "../../components/tags";
import Collapse from "../../components/collapse";
import "./accommodation.scss";

function Accommodation() {
  const [acc, setAcc] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const loadAcc = async (paramsId) => {
    setIsLoading(true);
    try {
      const accData = await getAccommodationById(paramsId);
      setAcc(accData);
    } catch (error) {
      navigate("/error");
      throw new Error(error); // ou pas nécessaire ???
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAcc(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <main>
      {isLoading && <p className="loader">Chargement en cours...</p>}
      {!isLoading && acc && (
        <>
          <Slideshow images={acc.pictures} />
          <section className="infoSection">
            <div>
              <h1>{acc.title}</h1>
              <p>{acc.location}</p>
              <Tags tagItems={acc.tags} />
            </div>
            <div className="profileContainer">
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
