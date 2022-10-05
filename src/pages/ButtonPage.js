import React from 'react'
import { useState } from 'react';
import Button from '../components/Buttons/Button';
import ContentHeader from '../layouts/ContentHeader/ContentHeader'
import Control from '../components/Controls/Control';
import TabWrap from '../components/Tabs/TabWrap';
import Tabs from '../components/Tabs/Tabs';
import Docs from '../components/Docs/Docs'
const buttonAttributeDefault = [
    {
        name: 'Children',
        code: 'children',
        type: 'text',
        default: 'Button'
    },
    {
        name: 'Variant',
        code: 'variant',
        type: 'radio',
        default: 'default',
        options: [
            {
                label: 'Default',
                name: 'variant',
                value: 'default'
            },
            {
                label: 'Outline',
                name: 'variant',
                value: 'outline'
            },
            {
                label: 'Text',
                name: 'variant',
                value: 'text'
            }
        ]
    },
    {
        name: 'Shadow',
        code: 'shadow',
        type: 'radio',
        default: '0',
        options: [
            {
                label: 'Disable',
                name: 'shadow',
                value: '0'
            },
            {
                label: 'Enable',
                name: 'shadow',
                value: '1'
            }]
    },
    {
        name: "Disable",
        code: 'disabled',
        type: 'radio',
        default: '0',
        options: [
            {
                label: 'Disable',
                name: 'disable',
                value: '0'
            },
            {
                label: 'Enable',
                name: 'disable',
                value: '1'
            }]
    },
    {
        name: 'Icon Display',
        code: 'display',
        type: 'radio',
        default: '',
        options: [
            {
                label: 'None',
                name: 'display',
                value: ''
            },
            {
                label: 'Start',
                name: 'display',
                value: 'startIcon'
            },
            {
                label: 'End',
                name: 'display',
                value: 'endIcon'
            }
        ]
    },
    {
        name: 'Icons',
        code: 'icons',
        type: 'radio',
        default: '',
        options: [
            {
                label: 'Arrow Forward',
                name: 'icon',
                value: 'arrow_forward'
            },
            {
                label: 'Arrow Back',
                name: 'icon',
                value: 'arrow_back'
            },
            {
                label: 'Add',
                name: 'icon',
                value: 'add'
            },
            {
                label: 'Refresh',
                name: 'icon',
                value: 'refresh'
            },
            {
                label: 'Download',
                name: 'icon',
                value: 'file_download'
            }
        ]
    },
    {
        name: 'Size',
        code: 'size',
        type: 'radio',
        default: 'md',
        options: [
            {
                label: 'Small',
                value: 'sm',
                name: 'size'
            },
            {
                label: 'Medium',
                value: 'md',
                name: 'size'
            },
            {
                label: 'Large',
                value: 'lg',
                name: 'size'
            }
        ]
    },
    {
        name: 'Color',
        code: 'color',
        type: 'radio',
        default: 'primary',
        options: [
            {
                label: 'Default',
                value: 'default',
                name: 'color'
            },
            {
                label: 'Primary',
                value: 'primary',
                name: 'color'
            },
            {
                label: 'Secondary',
                value: 'secondary',
                name: 'color'
            },
            {
                label: 'Danger',
                value: 'danger',
                name: 'color'
            }
        ]
    }
];



const ButtonPage = () => {
    const buttonDefault = {}
    buttonAttributeDefault.map(buttonAttr => {
        return buttonDefault[buttonAttr.code] = buttonAttr.default;
    })
    const [inputData, setInputData] = useState(buttonDefault);

    const inputDataHandler = (data) => {
        let changeData = {};
        changeData[data.name] = data.value;
        if ((inputData.display && changeData.icon)) {
            changeData[inputData.display] = changeData.icon;
        } else if ((inputData.icon && changeData.display)) {
            changeData[changeData.display] = inputData.icon;
        } else if (inputData.icon && inputData.display) {
            changeData[inputData.display] = inputData.icon;
        }

        let dataInput = { ...inputData, ...changeData };

        if (changeData.display === '') {
            let { endIcon, startIcon, ...cloneInputData } = dataInput;
            dataInput = { ...cloneInputData }
        }

        if (inputData.endIcon && changeData.startIcon) {
            let { endIcon, ...cloneInputData } = dataInput;
            dataInput = { ...cloneInputData }
        }
        if (inputData.endIcon && changeData.endIcon) {
            let { startIcon, ...cloneInputData } = dataInput;
            dataInput = { ...cloneInputData }
        }
        if (inputData.startIcon && changeData.endIcon) {
            let { startIcon, ...cloneInputData } = dataInput;
            dataInput = { ...cloneInputData }
        }
        if (inputData.startIcon && changeData.startIcon) {
            let { endIcon, ...cloneInputData } = dataInput;
            dataInput = { ...cloneInputData }
        }
        setInputData(dataInput);
    }
    const tabs = [
        {
            id: 'tab-1',
            title: 'Controls',
            content: <Control data={buttonAttributeDefault} controlData={inputDataHandler} />
        },
        {
            id: 'tab-2',
            title: 'Actions',
            content: 'Actions'
        },
        {
            id: 'tab-3',
            title: 'Document',
            content: <Docs/>
        },
    ];
    return (
        <>
            <ContentHeader header="Buttons" />
            <div className='main-content'>
                <Button
                    text={inputData.children}
                    variant={inputData.variant}
                    disabled={!!parseInt(inputData.disable)}
                    disableShadow={!!parseInt(inputData.shadow)}
                    endIcon={inputData.endIcon}
                    startIcon={inputData.startIcon}
                    size={inputData.size}
                    color={inputData.color}
                />
            </div>
            <TabWrap>
                <Tabs tabs={tabs} />
            </TabWrap>

        </>

    )
}

export default ButtonPage;