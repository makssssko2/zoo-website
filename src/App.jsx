import '/src/styles/base/main.scss';
import AppInitComponent from "./hoc/app/AppInitComponent.jsx";
import {BrowserRouter} from "react-router-dom";
const App = () => {
    return (
        <BrowserRouter>
            <AppInitComponent />
        </BrowserRouter>
    )
}

export default App;
