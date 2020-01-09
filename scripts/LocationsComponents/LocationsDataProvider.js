let locationsCollection = [];

export const useLocations = () => locationsCollection.slice();

export const getLocations = () => {
  return fetch("http://localhost:3000/locations")
    .then(res => res.json())
    .then(parsedData => (locationsCollection = parsedData.slice()));
};
