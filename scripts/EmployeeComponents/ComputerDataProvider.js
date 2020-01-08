let computerCollection = [];

export const useComputers = () => computerCollection.slice();

export const getComputers = () => {
  return fetch("http://localhost:3000/computers")
    .then(res => res.json())
    .then(parsedData => (computerCollection = parsedData.slice()));
};
