import React from 'react';
import { Form } from "antd";

class Step extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props.form);
        return (<div>
            {this.props.match.params.id == 1 &&
                `这是1的显示`
            }
            {this.props.match.params.id == 2 &&
                `还是2啊`
            }
        </div>)
    }
}

const WrappedStep = Form.create({})(Step);

export default WrappedStep;