import React from "react";
import { useState } from 'react';
import './Button.css'
export function Button({ variant }) {
    const props = {
        color: '#3F3F3F',
        width: '80px',
        height: '35px',
        backgroundColor: '#E0E0E0',
        border: 'none',
    }
    const [isActive, setIsActive] = useState(false);
    const [property, setProps] = useState(props);
    const isEmptyProp = (prop) => {
        return Object.keys(prop).length === 0 && prop.constructor === Object;
    }
    if (!isEmptyProp(variant)) {
        switch (variant) {
            case 'outline':
                setProps(prev => ({
                    ...prev,
                    border: '1px solid #3D5AFE',
                    backgroundColor: 'transparent',
                    color: '#3D5AFE'
                }))
                break;
            case 'text':
                setProps(prev => ({
                    ...prev,
                    border: 'none',
                    backgroundColor: 'transparent',
                    color: '#3D5AFE'
                }))
                break;
            default:
                setProps(prev => ({
                    ...prev,
                    border: 'none',
                    backgroundColor: 'transparent',
                    color: '#3D5AFE'
                }))
                break;
        }
    }

    const handleClick = () => {
        setProps(prev => ({
            ...prev,
            border: '1px solid red',
            backgroundColor: 'transparent',
            color: '#3D5AFE'
        }))
    };

    return (
        <div>
            <button className="btn"
                style={property}
                onClick={handleClick}
            >
                Click
            </button>
        </div>
    );
} 