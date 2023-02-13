import accommodations from "./mocks/accomodations.json";

const getAllAccommodations = async () => accommodations;

const getAccommodationById = async (id) => {
  const accById = accommodations.find((item) => item.id === id);
  if (accById) {
    return accById;
  }
  throw new Error("Resource not found");
};

export { getAllAccommodations, getAccommodationById };
