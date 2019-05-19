import React from 'react';
import DynamicField from '../dynamicField';
import { Table } from 'reactstrap';
import './_userDetailTable.scss';
const UserDetailTable = ({ userData, onChange }) => {
    return (
        <Table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {userData.map((data, key) => {
                    return (
                        <tr key={key}>
                            <td>{data.label}</td>
                            <td>
                                <DynamicField fieldData={data} onChange={onChange} />
                            </td>
                            <td>{data.description}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
}
export default UserDetailTable;