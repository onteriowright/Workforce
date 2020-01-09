let customerCollection = [];

export const UseCustomers = () => customerCollection.slice();

export const getCustomers = () => {
  return fetch("http://localhost:3000/customers")
    .then(res => res.json())
    .then(parsedCustomers => (customerCollection = parsedCustomers.slice()));
};
