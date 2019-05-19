import React from "react";

const DynamicField = ({ field }) => {
    const renderField = (field) => {
        let returnElement = <div />;
        if (field.type === 'text') {
            returnElement = <input
                className="form-input"
                type={field.type}
                value={field.value}
                onChange={(e) => { }}
            />
        } else if (field.type == "select") {
            returnElement = <select value={field.value} onChange={(e) => { }}>
                {
                    field.options.map((option) => {
                        return (
                            <option
                                className="form-input"
                                value={option}
                            >{option}</option>
                        );
                    })
                }
            </select>;
        } else if (field.type == "check") {
            returnElement = <div className="form-group-checkbox">
                <input
                    className="form-input"
                    type="checkbox"
                    checked={field.value}
                    onChange={(e) => { }}
                />
            </div>
        }
        return returnElement;
    }
    return renderField(field);
}
export default DynamicField;