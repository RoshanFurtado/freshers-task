import React from 'react';

const List = ({ data }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>S.No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Sex</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
           <tr >
                <td>1</td>
                <td>John</td>
                <td>Doe</td>
                <td>john.doe@example.com</td>
                <td>1990-01-01</td>
                <td>Male</td>
                <td>
                  <button>Edit</button>
                  <button style={{ marginLeft: "5px" }}>Delete</button>
                </td>
              </tr>
        </tbody>
      </table>
    </div>
  );
};

export default List;
