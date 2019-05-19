import React from 'react';
import DynamicField from '../dynamicField';

const UserDetailTable = ({ userData }) => {
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
                    const field = {
                        value: data.value,
                        type: data.type,
                        options: data.options
                    }
                    return (
                        <tr key={key}>
                            <td>{data.label}</td>
                            <td>
                                <DynamicField field={field} />
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