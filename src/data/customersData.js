const _apiUrlCustomer = "/customers";

export const getCustomers = () => {
    return fetch(_apiUrlCustomer).then((r) => r.json());
};

export const getCustomersById = (id) => {
    return fetch(`${_apiUrlCustomer}/${id}`).then((r) => r.json());
};