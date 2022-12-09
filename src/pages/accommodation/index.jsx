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
  const [acc, setAcc] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const loadAcc = async () => {
      try {
        const accData = await getAccommodationById(id);
        console.log(acc);
        /*  if (acc === undefined || []) {
          return;
        } */
        setAcc(accData);
      } catch (error) {
        console.error(error);
      }
    };
    loadAcc();
  }, [id, acc]);

  return (
    <main>
      {acc === [] || undefined || null ? (
        <Error />
      ) : (
        <>
          <Slideshow images={acc.pictures} />
          {console.log(acc.pictures)}
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
                  <p className="equipment" key={item}>
                    {item}
                  </p>
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
