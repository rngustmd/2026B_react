import { useState } from "react";
import FrontComp3 from "./FrontComp3";
import BackComp3 from "./BackComp3";


function Component3( props ){
    const [ mode , setMode ] = useState( 'both' );
    const handleSetMode = (mode) => {
        setMode(mode);
    };

    let contents = '';
    if( mode == 'front' ){
        contents = <>
            <FrontComp3 onSetMode={(mode)=>{
                setMode(mode);
            }}></FrontComp3>
        </>
    }
    else if( mode == 'back' ){
        contents = <>
            <BackComp3 setMode={setMode} />
        </>
    }
    else{
        contents = <>
            <FrontComp3 onSetMode={(mode)=>{
                handleSetMode(mode);
            }}></FrontComp3>
            <BackComp3 setMode={handleSetMode} />
        </>
    }
    return(<>
        <h2><a href="/" onClick={(event) => {
            event.preventDefault();
            setMode('both');
        }}>리액트 상태</a></h2>
        <ol>
            {contents}
        </ol>
    </>)
}
export default Component3
