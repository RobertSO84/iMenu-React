import routerAdmin from "./routes.admin";
import routerClient from "./routes.client";
import { BasicLayout } from "../layouts";
import { Error404 } from "../pages";

const routes = [ ...routerAdmin, ...routerClient, {
    path:"*",
    layout: BasicLayout,
    component: Error404,
},
 ];

//Deseamos tener [{},{}] para eso usamos el spread operator

export default routes;
