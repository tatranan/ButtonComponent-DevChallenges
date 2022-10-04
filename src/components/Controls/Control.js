import React from "react";
import './Control.css';
import ControlInput from "./ControlItem/Input/ControlInput";
import ControlRadio from "./ControlItem/Radio/ControlRadio";

const Control = ({ data, controlData }) => {

    return (
        <div className="controls">
            <div className="control">
                <table className="table">
                    <thead>
                        <tr className=" ">
                            <th className="table-row-header">Name</th>
                            <th className="table-row-header">Control</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map((item) => {
                            if (item.type === 'radio') {
                                return (<ControlRadio key={item.code} name={item.name} options={item.options} controlData={controlData} defaultValue={item.default} />)
                            }
                            return (<ControlInput key={item.code} code={item.code} name={item.name} controlData={controlData} defaultValue={item.default} />)
                        })}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default Control;