import React, { Component } from 'react';
// import { render } from 'react-dom';
// import { Input, Form } from 'antd';
export default class StepOne extends Component {
    constructor(props) {
        super(props);
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();
        
    // }


    render() {
        // const FormItem = Form.Item;
        // const { TextArea } = Input;
        // const { getFieldDecorator } = this.props.form;
        // const formItemLayout = {
        //     labelCol: {
        //         xs: { span: 24 },
        //         sm: { span: 8 },
        //     },
        //     wrapperCol: {
        //         xs: { span: 24 },
        //         sm: { span: 16 },
        //     },
        // };

        return (
        // <Form onSubmit={this.handleSubmit}>
        //     <FormItem {...formItemLayout} label="应用名称：">
        //         {getFieldDecorator('appname', {
        //             rules: [{
        //                 required: true,
        //                 message: '请输入应用名称'
        //             }],
        //             initialValue: ''
        //         })
        //             (<Input placeholder="请输入应用名称"></Input>)
        //         }
        //     </FormItem>
        //     <FormItem {...formItemLayout} label="应用简介：">
        //         {getFieldDecorator('appintroduction', {
        //             rules: [{
        //                 required: true,
        //                 message: '请输入应用简介'
        //             }],
        //             initialValue: ''
        //         })
        //             (<TextArea placeholder="请输入应用简介" rows={4} />)
        //         }
        //     </FormItem>
        //     <Button type="primary" htmlType="submit">确定</Button>
        // </Form>
            <div>step1</div>
        );
    }
}