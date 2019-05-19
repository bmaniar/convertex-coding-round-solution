import React from "react";

const DynamicField = ({ fieldData, onChange }) => {
    const renderField = (fieldData) => {
        const target = fieldData.key;
        let returnElement = <div />;
        if (fieldData.type === 'text') {
            returnElement = <input
                className="form-input"
                type={fieldData.type}
                value={fieldData.value}
                onChange={(e) => { onChange(e, target) }}
            />
        } else if (fieldData.type == "select") {
            returnElement = <select value={fieldData.value} onChange={(e) => { onChange(e, target) }}>
                {
                    fieldData.options.map((option) => {
                        return (
                            <option
                                className="form-input"
                                value={option}
                            >{option}</option>
                        );
                    })
                }
            </select>;
        } else if (fieldData.type == "check") {
            returnElement = <div className="form-group-checkbox">
                <input
                    className="form-input"
                    type="checkbox"
                    checked={fieldData.value}
                    onChange={(e) => { onChange(e, target) }}
                />
            </div>
        }
        return returnElement;
    }
    return renderField(fieldData);
}
export default DynamicField;