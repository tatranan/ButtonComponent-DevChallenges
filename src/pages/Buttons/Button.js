import React, { useEffect } from "react";
import { useState } from 'react';
import './Button.css';

export function Button({ variant, disableShadow, disabled }) {
    const styles = {
        width: '80px',
        height: '35px',
        backgroundColor: '#E0E0E0',
        border: 'none',
        color: 'rgb(63,63,63)',
        boxShadow: '0px 2px 3px rgba(51, 51, 51, 0.2)',
        red: 63,
        blue: 63,
        green: 63,
        alpha: .4,
    }
    // const [isActive, setIsActive] = useState(false);
    const [style, setStyle] = useState(styles);
    const [isHover, setIsHover] = useState(true);
    const [color, setColor] = useState(styles);
    // const [isDisableShadow, setIsDisableShadow] = useState(true);
    // const [isDisabled, setIsDisabled] = useState(false);
    const [buttonStyle , setButtonStyle ] = useState(style)
    useEffect(() => {

        // if (disableShadow) {
        //     setIsDisableShadow(true);
        // }
        // if (disabled) {
        //     setIsDisabled(true);
        // }
        setStyleByVariant(variant);

    }, []);

    const isEmptyProp = (prop) => {
        return Object.keys(prop).length === 0 && prop.constructor === Object;
    }
    const setStyleByVariant = (variantStyle) => {
        if (variantStyle && !isEmptyProp(variantStyle)) {
            switch (variantStyle) {
                case 'outline':
                    setStyle({
                        ...style,
                        backgroundColor: 'transparent',
                        border: '1px solid rgb(61, 90, 254)',
                        color: 'rgb(61, 90, 254)',
                    });
                    setColor({
                        red: 61,
                        green: 90,
                        blue: 254,
                        alpha: .2
                    })
                    break;
                case 'text':
                    setStyle(prev => ({
                        ...prev,
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: 'rgb(61, 90, 254)',
                    }))
                    setColor({
                        red: 61,
                        green: 90,
                        blue: 254,
                        alpha: 0.2
                    })
                    break;
                default:
                    setStyle(prev => ({
                        ...prev,
                        backgroundColor: '#E0E0E0',
                        border: 'none',
                        color: 'rgb(63,63,63)',
                    }))
                    setColor({
                        red: 63,
                        blue: 63,
                        green: 63,
                        alpha: 0.4
                    })
            }
        }
    }

    const handleClick = () => {

    };
    const onMouseEnterHandler = () => {
        setIsHover(!isHover);
    }
    // const getColor = ({ red, green, blue, alpha }) => {
    //     return `rgba(${red},${green},${blue},${alpha})`
    // }

    // const isDisabledShadow = {
    //     boxShadow: isDisableShadow ? 'none' : style.boxShadow,
    // }
    // const isDisableButton = {
    //     color: isDisabled ? 'rgb(158, 158, 158)' : style.color,
    //     border: isDisabled ? 'none' : style.border,
    //     backgroundColor: isDisabled ? "#e0e0e0" : style.backgroundColor,
    // }
    // const hoverStyle = {
    //     backgroundColor: isHover ? getColor(color) : style.backgroundColor,
    // };
    
    return (
        <div>
            <button className="btn"
                style={buttonStyle}
                onClick={handleClick}
                onMouseEnter={onMouseEnterHandler}
                onMouseLeave={onMouseEnterHandler}
                disabled={disabled}

            >Click</button>
        </div>
    );
} 