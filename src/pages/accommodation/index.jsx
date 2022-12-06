import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAccommodationById } from "../../api/api";

export default function Accommodation() {
  const [accommodation, setAccommodation] = useState([]);
  const { id } = useParams();

  const loadAccommodation = async () => {
    const accommodationData = await getAccommodationById(id);
    setAccommodation(accommodationData);
  };

  useEffect(() => {
    loadAccommodation();
  }, []);

  return (
    <main>
      <h1>{accommodation.title}</h1>
    </main>
  );
}
