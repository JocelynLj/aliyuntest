import React from "react";
import { HashRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { Step } from '@bone/bone-web-ui';
import StepOne from '../steps/StepOne';
import StepTwo from '../steps/StepTwo';
import StepThree from '../steps/StepThree';
// 以CSS Modules方式引入Home页样式
import style from "./index.css";
// 导出Home页组件
export default class Home extends React.Component {
    // Item = Step.Item;
    constructor() {
        // super(props);
        super();
    }


    render() {
        return <Router>
            {/* <Step current={1} animation="false" type="circle"> */}
            <div>
                <Link to="/step1">
                    第一步
                {/* <Step.Item key={1} title="第一步"></Step.Item> */}
                </Link>

                <Link to="/step2">
                    第二步
                </Link>

                <Link to="/step3">
                    第三步
                </Link>
            </div>
            {/* <Step.Item key={2} title="第二步"><Link to="/step2"></Link></Step.Item>
                <Step.Item key={3} title="第三步"><Link to="/step2"></Link></Step.Item> */}
            {/* </Step> */}
            <div>
                <Switch>
                    <Route path="/step1" exact Component={StepOne}></Route>
                    <Route path="/step2" exact Component={StepTwo}></Route>
                    <Route path="/step3" exact Component={StepThree}></Route>
                    {/* <Redirect to="/"></Redirect> */}
                </Switch>
            </div>
        </Router>
    }
}