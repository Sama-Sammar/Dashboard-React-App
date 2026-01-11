import { RouterProvider } from "react-router-dom";// v6.4
import router from "./configs/router-config";

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
