import React from "react";
import {useState} from 'react';
import './Button.css';

const Button = ({variant, disableShadow, disabled}) => {
    let styles = {
        width: '80px',
        height: '35px',
        backgroundColor: '#E0E0E0',
        border: 'none',
        color: 'rgb(63,63,63)',
        boxShadow: '0px 2px 3px rgba(51, 51, 51, 0.2)',
    }
    let alphaColor = .4;
    const isEmptyProp = (prop) => {
        return Object.keys(prop).length === 0 && prop.constructor === Object;
    }

    if (variant && !isEmptyProp(variant)) {
        switch (variant) {
            case 'outline':
                styles = {
                    ...styles,
                    backgroundColor: 'transparent',
                    border: "1px solid rgb(61, 90, 254)",
                    color: "rgba(61, 90, 254,1)",
                }
                alphaColor = 0.1;
                break;
            case 'text':
                styles = {
                    ...styles,
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'rgba(61, 90, 254,1)',
                }
                alphaColor = 0.1;
                break;
            default:
                styles = {
                    ...styles,
                    backgroundColor: '#E0E0E0',
                    border: 'none',
                    color: 'rgba(63,63,63,1)',
                }
        }
    }
    const [hoverBgColor, setHoverBgColor] = useState(styles.backgroundColor);
    const [isHover, setIsHover] = useState(false);


    if (disabled) {
        styles = {
            "color": "rgba(158, 158, 158,1)",
            "border": "none",
            "backgroundColor": "#e0e0e0",
        }
    }
    const onMouseEnterHandler = (e) => {
        setIsHover(!isHover);
        const rgbColor = getRGBAColor(e.target.style.color)
        const alpha = e.target.getAttribute('alphacolor');
        const bgColor = setAlphaRGBA(rgbColor, alpha);
        setHoverBgColor(bgColor)
        console.log()
    }
    const getRGBAColor = (colorRGBA) => {
        if (colorRGBA.substring(0, 3) === 'rgb' || colorRGBA.substring(0, 4) === 'rgba') {
            let [red, green, blue, alpha] = colorRGBA.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
            return {red, green, blue, alpha};
        }
        return {red: 63, green: 63, blue: 63, alpha: 1};
    }
    const setAlphaRGBA = (rgb, alpha) => {
        const {red, green, blue} = rgb;
        return `rgba(${red},${green},${blue},${alpha})`;
    }
    if (disableShadow) {
        styles = {...styles, boxShadow: 'none'}
    }

// const isDisableButton = {
//     color: isDisabled ? 'rgb(158, 158, 158)' : style.color,
//     border: isDisabled ? 'none' : style.border,
//     backgroundColor: isDisabled ? "#e0e0e0" : style.backgroundColor,
// }

    return (
        <div>
            <button className="btn"
                    onMouseEnter={onMouseEnterHandler}
                    onMouseLeave={onMouseEnterHandler}
                    style={{...styles, backgroundColor: isHover ? hoverBgColor : styles.backgroundColor}}
                    disabled={disabled}
                    {...{"alphacolor": alphaColor}}
            >Click
            </button>
        </div>
    );
}

export default Button;