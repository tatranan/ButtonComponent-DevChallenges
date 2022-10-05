import React from 'react'
import ContentHeader from '../layouts/ContentHeader/ContentHeader';
import Control from '../components/Controls/Control';
import TabWrap from '../components/Tabs/TabWrap';
import Tabs from '../components/Tabs/Tabs';
import Docs from '../components/Docs/Docs';
import Input from '../components/Inputs/Input';
const InputPage = () => {
    return (
        <>
            <ContentHeader header="Inputs" />
            <div className='main-content'>
                <Input/>
            </div>

            <TabWrap>
                <Tabs/>
            </TabWrap>
        </>
    )
}

export default InputPage;