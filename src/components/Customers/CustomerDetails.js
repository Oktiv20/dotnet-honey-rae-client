import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getCustomersById } from "../../data/customersData";

export default function CustomerDetails() {
  const { id } = useParams();

  const [customer, setCustomer] = useState(null);

  //add useEffect here to get the customer details from the API

  const getCustomer = () => {
    getCustomersById(id).then(setCustomer);
  }

  useEffect(() => {
    getCustomer();
  });

  if (!customer) {
    return null;
  }

  return (
    <Table>
      <tbody>
      <tr>
          <th scope="row">Customer</th>
          <td>{customer.customer?.Id}</td>
        </tr>
        <tr>
          <th scope="row">Name</th>
          <td>{customer.name}</td>
        </tr>
        <tr>
          <th scope="row">Address</th>
          <td>{customer.address}</td>
        </tr>
      </tbody>
    </Table>
  );
}
