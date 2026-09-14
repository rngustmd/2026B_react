import BackComp from "./BackComp";
import FrontComp from "./FrontComp";
function Component1( props ){
    return(<>
        <h2> 리액트 모듈 </h2>
        <ol>    
            <FrontComp onMyEvent={ () => { alert('프론트 클릭됨')} } />
            <BackComp onMyEvent2={ (msg) => { alert(msg)} } />
        </ol>
    </>)
}
export default Component1;