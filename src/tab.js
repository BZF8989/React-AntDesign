import React from 'react';
import { Tabs } from 'antd';
import Form from './form';

const TabPane = Tabs.TabPane;


export default class Tab extends React.Component {


    render(){
        return(
            <Tabs defaultActiveKey="1">
                <TabPane tab="Username Login" key = "1"><Form /></TabPane>
                <TabPane tab="Phone Login" key = "2"><Form /></TabPane>
            </Tabs>
        )
    }
} 

