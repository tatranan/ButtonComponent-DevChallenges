import React, {useState} from "react";
import './Main.css';
import Sidebar from "../Sidebar/Sidebar";
import ContentHeader from '../ContentHeader/ContentHeader'
import Tab from "../../components/Tabs/Tab";
import Control from "../../components/Controls/Control";
import Button from "../../pages/Buttons/Button";

const Main = ({header, content}) => {
    const data = [
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

            default: 0,
            options: [
                {
                    label: 'Disable',
                    name: 'shadow',
                    value: 0
                },
                {
                    label: 'Enable',
                    name: 'shadow',
                    value: 1
                }]
        },
        {
            name: "Disable",
            code: 'disabled',
            type: 'radio',
            default: 0,
            options: [
                {
                    label: 'Disable',
                    name: 'disable',
                    value: 0
                },
                {
                    label: 'Enable',
                    name: 'disable',
                    value: 1
                }]
        },
        {
            name: 'Icon Display',
            code: 'icon_display',
            type: 'radio',
            default: '',
            options: [
                {
                    label: 'None',
                    name: 'display',
                    value: 'none'
                },
                {
                    label: 'Start',
                    name: 'display',
                    value: 'start'
                },
                {
                    label: 'End',
                    name: 'display',
                    value: 'end'
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
            default: '',
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
            default: 'default',
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
    const defaultText = data.find(item => item.code === 'children');


    const [text, setText] = useState(defaultText.default);
    const [inputData, setInputData] = useState([]);
    const inputDataHandler = (data) => {
        setInputData(data)
    }
    const foundAttribute = (attributes,keyword)=>{
        return attributes.find(attribute => attribute.name === keyword);
    }
    return (
        <div className="container">
            <div className="container-wrapper">
                <Sidebar/>
                <div className="content">
                    <div className="content-wrap">
                        <ContentHeader header={header}/>
                        <div className="main-content">
                            <div className="components">
                                <div className="component-item">
                                    <div className="component-show">
                                        <Button
                                            text={text}
                                            variant={inputData ?  inputData.value :'text'}
                                            disabled={false}
                                            disableShadow={true}
                                            endIcon={'face'}
                                            size={'lg'}
                                            color={'danger'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-footer">
                        <Tab/>
                        <Control data={data} controlInputData={inputDataHandler}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;