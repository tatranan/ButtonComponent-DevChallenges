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
    // const defaultText = data.find(item => item.code === 'children');


    // const [text, setText] = useState(defaultText.default);
    const [inputData, setInputData] = useState({});
    const inputDataHandler = (data) => {
        const changeData = {};
        changeData[data.name] = data.value;


        if((inputData.display && changeData.icon) ){
            changeData[inputData.display] = changeData.icon;
        } if( (inputData.icon && changeData.display)){
            changeData[changeData.display] = inputData.icon;
        } if(inputData.icon && inputData.display){
            changeData[inputData.display] = inputData.icon;
        }
        //
        console.log(inputData,changeData);
        let dataInput = {...inputData, ...changeData};

        if( inputData.endIcon && changeData.startIcon){
            let {endIcon,...cloneInputData} = dataInput;
            dataInput = {...cloneInputData}
        }
        if(inputData.endIcon && changeData.endIcon){
            let {startIcon,...cloneInputData} = dataInput;
            dataInput = {...cloneInputData}
        }
        console.log(changeData);
        if( inputData.startIcon && changeData.endIcon){
            let {startIcon,...cloneInputData} = dataInput;
            dataInput = {...cloneInputData}
        }
        if(inputData.startIcon && changeData.startIcon){
            let {endIcon,...cloneInputData} = dataInput;
            dataInput = {...cloneInputData}
        }
        console.log(dataInput)
        setInputData(dataInput);
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
                                            text={inputData.children ?  inputData.children :'text'}
                                            variant={inputData.variant ?  inputData.variant :'text'}
                                            disabled={!!parseInt(inputData.disable)    }
                                            disableShadow={!!parseInt(inputData.shadow) }
                                            endIcon={inputData.endIcon}
                                            startIcon={inputData.startIcon}
                                            size={inputData.size ? inputData.size : 'md'}
                                            color={inputData.color ? inputData.color : 'default'}
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