import { createApp } from "@bone/web";
// 引入各个页面组件
import Home from "./app/pages/home";
import NotFound from "./app/pages/not-found";
// import StepOne from "./app/pages/steps/StepOne";
// import StepTwo from "./app/pages/steps/StepTwo";
// import StepThree from "./app/pages/steps/StepThree";

// 创建App实例
export default createApp({
    // 配置路由信息
    appName: 'apptest',
    router: {
        routes: [{
            path: "/",
            page: Home
        }],
        // routes中路由无法匹配时显示的404页面
        notFound: NotFound
    }
})