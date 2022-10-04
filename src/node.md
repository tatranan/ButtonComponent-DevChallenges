const [style, setStyle] = useState(styles);
    const [isHover, setIsHover] = useState(true);
    const [color, setColor] = useState(styles);


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