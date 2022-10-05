import React, { useState } from 'react';
import './ControlRadio.css';

const ControlRadio = ({ name, options, controlData, defaultValue }) => {
    const [buttonState, setButtonState] = useState(defaultValue);

    const inputChangedHandler = (event) => {
        const data = {
            name: event.target.name,
            value: event.target.value
        }
        setButtonState(event.target.value);
        controlData(data);
    }
    return (
        <tr className="table-row">
            <td className="">
                <span>{name}</span>
            </td>
            <td className="">
                {options.map((item, key) => {
                    return (
                        <div key={key} className="control-radio" >
                            <input
                                className="control-radio__input"
                                type="radio"
                                id={`${item.name}-${key}`}
                                name={item.name}
                                value={item.value}
                                checked={buttonState === item.value && 'checked'}
                                onChange={inputChangedHandler}
                            />
                            <label className="control-radio__span" htmlFor={`${item.name}-${key}`}>{item.label}</label>
                        </div>
                    )
                })}
            </td>

        </tr>
    );
};

export default ControlRadio;