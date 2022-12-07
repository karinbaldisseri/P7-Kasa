import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAccommodationById } from "../../api/api";
import Slideshow from "../../components/slideshow";
import Error from "../error";

function Accommodation() {
  const [acc, setAcc] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const loadAcc = async () => {
      const accData = await getAccommodationById(id);
      setAcc(accData);
    };
    loadAcc().catch(console.error);
  }, [id]);

  console.log(acc);

  return (
    <main>
      {acc ? (
        <>
          {/* <Slideshow images={acc.pictures} /> */}
          <Slideshow />
          <h1>{acc.title}</h1>
        </>
      ) : (
        <Error />
      )}
    </main>
  );
}

export default Accommodation;
