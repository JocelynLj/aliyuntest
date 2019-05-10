import React, { Component } from 'react';
// import { render } from 'react-dom';
import { Select } from 'antd';
export default class StepTwo extends Component {
    constructor() {
        super();
    }

    handleSubmit = (e) => {
        e.preventDefault();

    }

    render() {
        // const FormItem = Form.Item;
        // const { TextArea } = Input;
        // const { getFieldDecorator } = this.props.form;
        // const { Option } = Select;
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
            //     <FormItem {...formItemLayout} label="应用模板：">
            //         {getFieldDecorator('apptemplate', {
            //             rules: [{
            //                 required: true,
            //                 message: '请输入应用模板'
            //             }],
            //             initialValue: ''
            //         })
            //             (<Select placeholder="请输入应用模板">
            //                 <Option value={1}>模板1</Option>
            //                 <Option value={1}>模板2</Option>
            //                 <Option value={1}>模板3</Option>
            //             </Select>)
            //         }
            //     </FormItem>
            //     <Button type="primary" htmlType="submit">确定</Button>
            // </Form>
            <div>step2</div>
        );
    }
}