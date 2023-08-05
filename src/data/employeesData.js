const _apiUrlEmployee = "/employees";

export const getEmployees = () => {
    return fetch(_apiUrlEmployee).then((r) => r.json());
};

export const getEmployeesById = (id) => {
    return fetch(`${_apiUrlEmployee}/${id}`).then((r) => r.json());
};