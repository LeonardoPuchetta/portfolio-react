import LayoutBasic from "../layouts/LayoutBasic";
import Home from "../pages/Home";
import NewProject from "../pages/NewProject";
import Inicio from "../pages/Inicio";


const routes =[
    {
        path: "/",
        layout : LayoutBasic,
        component : Inicio
    },
    {
        path: "/home",
        layout : LayoutBasic,
        component : Home
    },
    {
        path: "/new-project",
        layout : LayoutBasic,
        component : NewProject
    }


]

export default routes ;


