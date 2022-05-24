import LayoutBasic from "../layouts/LayoutBasic";
import Home from "../pages/Home";
import NewProject from "../pages/NewProject";


const routes =[
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


