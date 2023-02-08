import accommodations from "./mocks/accomodations.json";

const getAllAccommodations = async () => accommodations;

const getAccommodationById = async (id) =>
  accommodations.find((item) => item.id === id);

export { getAllAccommodations, getAccommodationById };
