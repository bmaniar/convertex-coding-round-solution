import React from "react";
import { Input, Label, FormGroup } from 'reactstrap';
const DynamicField = ({ fieldData, onChange }) => {
    const renderField = (fieldData) => {
        const target = fieldData.key;
        let returnElement = <div />;
        if (fieldData.type === 'text') {
            returnElement = <Input
                className="form-input"
                type={fieldData.type}
                value={fieldData.value}
                onChange={(e) => { onChange(e, target) }}
            />
        } else if (fieldData.type == "select") {
            returnElement = <Input type="select" value={fieldData.value} onChange={(e) => { onChange(e, target) }}>
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
            </Input>;
        } else if (fieldData.type == "check") {
            returnElement = <div className="form-group-checkbox">
                <Label check>
                    <Input
                        type="checkbox"
                        checked={fieldData.value}
                        onChange={(e) => { onChange(e, target) }}
                    />
                </Label>
            </div>
        }
        return returnElement;
    }
    return (
        <FormGroup>
            {renderField(fieldData)}
        </FormGroup>)
}
export default DynamicField;