import React from 'react';
import './ControlRadio.css';

const ControlRadio = ({name, options, defaultValue,controlInputData}) => {
    const inputChangedHandler = (event)=>{
        const data = {
            name: event.target.name,
            value: event.target.value
        }
        controlInputData(data);
    }
    return (
        <tr className="table-row">
            <td className="">
                <span>{name}</span>
            </td>
            <td className="">
                {options.map((item,key) => {
                    return (
                        <div key={key} className="control-radio" onChange={inputChangedHandler}>
                            <input className="control-radio__input" type="radio" id={`${item.name}-${key}`} name={item.name} value={item.value}/>
                            <label className="control-radio__span" htmlFor={`${item.name}-${key}`}>{item.label}</label>
                        </div>
                    )
                })}
            </td>

        </tr>
    );
};

export default ControlRadio;