//                 {/* <Step current={1} animation="false" type="circle"> */}
//                 {/* <Step.Item key={1} title="第一步"></Step.Item> */}
//                 {/* <Step.Item key={2} title="第二步"><Link to="/step2"></Link></Step.Item>
//                 <Step.Item key={3} title="第三步"><Link to="/step2"></Link></Step.Item> */}
//                 {/* </Step> */}

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Step } from '@bone/bone-web-ui';
// import StepOne from '../steps/StepOne';
// import StepTwo from '../steps/StepTwo';
// import StepThree from '../steps/StepThree';
import Steps from '../steps/Steps';

export default class Home extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/steps">Steps</Link>
                            </li>
                            {/* <li>
                                <Link to="/step2/">About</Link>
                            </li>
                            <li>
                                <Link to="/step3/">Users</Link>
                            </li> */}
                        </ul>
                    </nav>

                    <Route path="/steps" exact component={Steps} />
                    {/* <Route path="/step2/" component={StepTwo} />
                    <Route path="/step3/" component={StepThree} /> */}
                </div>
            </Router>
        );
    }
}

// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// function App() {
//     return (
//         <Router>
//             <div>
//                 <Header />

//                 <Route exact path="/" component={Home} />
//                 <Route path="/about" component={About} />
//                 <Route path="/topics" component={Topics} />
//             </div>
//         </Router>
//     );
// }

// function Home() {
//     return <h2>Home</h2>;
// }

// function About() {
//     return <h2>About</h2>;
// }

// function Topic({ match }) {
//     return <h3>Requested Param: {match.params.id}</h3>;
// }

// function Topics({ match }) {
//     return (
//         <div>
//             <h2>Topics</h2>

//             <ul>
//                 <li>
//                     <Link to={`${match.url}/components`}>Components</Link>
//                 </li>
//                 <li>
//                     <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//                 </li>
//             </ul>

//             <Route path={`${match.path}/:id`} component={Topic} />
//             <Route
//                 exact
//                 path={match.path}
//                 render={() => <h3>Please select a topic.</h3>}
//             />
//         </div>
//     );
// }

// function Header() {
//     return (
//         <ul>
//             <li>
//                 <Link to="/">Home</Link>
//             </li>
//             <li>
//                 <Link to="/about">About</Link>
//             </li>
//             <li>
//                 <Link to="/topics">Topics</Link>
//             </li>
//         </ul>
//     );
// }

// export default App;
