// import { lazy } from "react";
import { Buttons } from './Buttons'
import { Inputs } from './Inputs'
// const Buttons = lazy(() => import("./Buttons").then((mod) => {
//     console.log(mod)
//     return mod;
// }));
// const Inputs = lazy(() => import("./Inputs"));

const routers = [
    {
        path: '/button',
        exact: true,
        public: true,
        component: Buttons
    },
    {
        path: '/input',
        exact: true,
        public: true,
        component: Inputs
    }
]

export default routers;