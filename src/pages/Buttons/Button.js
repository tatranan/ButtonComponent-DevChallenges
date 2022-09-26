import React from "react";
import {useState} from 'react';
import './Button.css';

const Button = ({text, variant, disableShadow, disabled, startIcon, endIcon, size, color}) => {

    let styles = {
        minWidth: '80px',
        backgroundColor: '#E0E0E0',
        border: 'none',
        color: '#3F3F3F',
        boxShadow: '0px 2px 3px rgba(51, 51, 51, 0.2)',
    }

    const colors = [
        {name: 'default', bgColor: '#E0E0E0', hoverBgColor: '#AEAEAE', color: '#3F3F3F', hoverColor: ''},
        {name: 'primary', bgColor: 'rgba(41,98,255,1)', hoverBgColor: '#0039CB', color: '#fff', hoverColor: '#fff'},
        {name: 'secondary', bgColor: 'rgba(69,90,100,1)', hoverBgColor: '#1C313A', color: '#fff', hoverColor: '#fff'},
        {name: 'danger', bgColor: 'rgba(211,47,47,1)', hoverBgColor: '#9A0007', color: '#fff', hoverColor: '#fff'},
    ];

    const [hoverBgColor, setHoverBgColor] = useState(styles.backgroundColor);
    const [hoverColor, setHoverColor] = useState(styles.color);
    const [isHover, setIsHover] = useState(false);

    const findColor = (color) => {
        const foundColor = colors.find(clr => clr.name === color);
        return foundColor ? foundColor : colors.find(clr => clr.name === 'default');
    }

    const onMouseEnterHandler = (e) => {
        setIsHover(!isHover);

        const foundColor = findColor(color);
        if (variant !== 'default' && foundColor.name !== 'default') {
            setHoverBgColor(setAlphaRGBA(foundColor.bgColor, 0.1));
            setHoverColor(foundColor.bgColor);
        } else {
            setHoverBgColor(foundColor.hoverBgColor);
            setHoverColor(foundColor.hoverColor);
        }
    }

    const getRGBAColor = (colorRGBA) => {
        if (colorRGBA.substring(0, 3) === 'rgb' || colorRGBA.substring(0, 4) === 'rgba') {
            let [red, green, blue, alpha] = colorRGBA.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
            return {red, green, blue, alpha};
        }
        return {red: 63, green: 63, blue: 63, alpha: 1};
    }

    const setAlphaRGBA = (colorString, alpha) => {
        const rgba = getRGBAColor(colorString);
        const {red, green, blue} = rgba;
        return `rgba(${red},${green},${blue},${alpha})`;
    }

    const foundColor = findColor(color);

    switch (variant) {
        case 'outline':
            styles = {
                ...styles,
                backgroundColor: 'transparent',
                border: `1px solid ${foundColor.bgColor}`,
                color: `${foundColor.name === 'default' ? foundColor.color : foundColor.bgColor}`,
            }
            break;
        case 'text':
            styles = {
                ...styles,
                backgroundColor: 'transparent',
                border: 'none',
                color: `${foundColor.name === 'default' ? foundColor.color : foundColor.bgColor}`,
            }
            break;
        default:
            styles = {
                ...styles,
                backgroundColor: `${foundColor.bgColor}`,
                border: 'none',
                color: `${foundColor.color}`,
            }
    }

    if (disabled) {
        styles = {
            "color": "rgba(158, 158, 158,1)",
            "border": "none",
            "backgroundColor": "#e0e0e0",
            "cursor": 'default',
        }
    }

    if (disableShadow) {
        styles = {...styles, boxShadow: 'none'}
    }

    if (size) {
        switch (size) {
            case 'sm':
                styles = {...styles, padding: '6px 12px'}
                break;
            case 'md':
                styles = {...styles, padding: '8px 16px'}
                break;
            case 'lg':
                styles = {...styles, padding: '11px 22px'}
                break;
            default:
                styles = {...styles, padding: '8px 16px'}
        }
    }

    return (
        <div>
            <button
                className={`btn ${(startIcon || endIcon) ? 'btn-has-icon' : ''} ${endIcon ? 'btn-end-icon' : ''}`}
                onMouseEnter={onMouseEnterHandler}
                onMouseLeave={onMouseEnterHandler}
                style={{
                    ...styles,
                    backgroundColor: isHover ? hoverBgColor : styles.backgroundColor,
                    color: isHover ? hoverColor : styles.color
                }}
                disabled={disabled}
            ><span className="material-icons">{startIcon ? startIcon : endIcon}</span><span>{text}</span>
            </button>
        </div>
    );
}

export default Button;