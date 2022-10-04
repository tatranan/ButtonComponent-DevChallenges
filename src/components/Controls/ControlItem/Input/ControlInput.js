import React from 'react';
import './ControlInput.css';

const ControlInput = ({ name, defaultValue, controlData, code }) => {
    const inputHandler = (e) => {
        const data = {
            name: e.target.name,
            value: e.target.value
        }
        controlData(data);
    }
    return (
        <tr className="table-row ">
            <td className="">
                <span>{name}</span>
            </td>
            <td className="">
                <div>
                    <input className="control-input" name={code} onChange={inputHandler} type="text" defaultValue={defaultValue} />
                </div>
            </td>

        </tr>
    );
};

export default ControlInput;