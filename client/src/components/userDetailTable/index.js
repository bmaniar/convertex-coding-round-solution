import React, { useState } from 'react';
import DynamicField from '../dynamicField';

const UserDetailTable = ({ userData, onChange }) => {
    return (
        <table>
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
        </table>
    );
}
export default UserDetailTable;