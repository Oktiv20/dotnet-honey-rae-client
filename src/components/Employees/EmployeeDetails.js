import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getEmployeesById } from "../../data/employeesData";

export default function EmployeeDetails() {
  const { id } = useParams();

  const [employee, setEmployee] = useState(null);

  //add useEffect here to get the customer details from the API

  const getEmployee = () => {
    getEmployeesById(id).then(setEmployee);
  }

  useEffect(() => {
    getEmployee();
  });

  if (!employee) {
    return null;
  }

  return (
    <Table>
      <tbody>
      <tr>
          <th scope="row">Employee</th>
          <td>{employee.employee?.Id}</td>
        </tr>
        <tr>
          <th scope="row">Name</th>
          <td>{employee.name}</td>
        </tr>
        <tr>
          <th scope="row">Specialty</th>
          <td>{employee.specialty}</td>
        </tr>
      </tbody>
    </Table>
  );
}
