import { Route, Routes } from "react-router-dom";
import TopNavi from "./TopNavi";
import LifeCycle from "./LifeCycle";
import ExternalApiFetcher from "./ExternalApiFetcher";


export default function App( props ){
    return( <> 
    
        <TopNavi> </TopNavi>

        <Routes>

            <Route path="/" element={ <LifeCycle /> } />
            <Route path="/external" element={ <ExternalApiFetcher/> } />

        </Routes>
    
    </>)

}