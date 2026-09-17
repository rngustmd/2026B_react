import { useLocation, useSearchParams } from "react-router-dom"

export default function RouterHooks( props ){

        const location = useLocation();
        const [ searchParams , setSearchParams ] = useSearchParams();
        const mode = searchParams.get('mode');
        const pageNum = searchParams.get('pageNum');

        const changeMode = () => {
            const nextMode = ( mode === 'list' ) ? 'view' : 'list';
            setSearchParams({
                mode : nextMode,
                pageNum
            });
        }

        const nextPage = () => {
            let pageTemp = (pageNum === null || isNaN(pageNum))
                            ? 1 : parseInt(pageNum) + 1;
            setSearchParams( { mode, pageNum : pageTemp } );
        }

        const prevPage = () => { 
            let pageTemp = (pageNum === null || isNaN(pageNum))
                            ? 1 : parseInt(pageNum) - 1;
            setSearchParams( { mode, pageNum : pageTemp } );
        }
    
    return(<>
        <h2> 라우터관련훅 </h2>
        <div>
            <ul>
                <li> URL : {location.pathname} </li>
                <li> 쿼리스트링 : {location.search} </li>
                <li> mode : {mode} </li>
                <li> pageNum : {pageNum} </li>
            </ul>
            <button onClick={changeMode}> 모드변경 </button>
            <button onClick={prevPage}> 이전페이지 </button>
            <button onClick={nextPage}> 다음페이지 </button>
        </div>
    </>)

}

/* 
    쿼리스트링 : http url 경로 뒤에 ? 변수명 = 값 & 변수명 = 값 으로 표현
                -> 경로 변경 / 요청 간에 상태/값 이동 목적
    예] http://localhost:8080/member?name=유재석&age=10
        REACT : useSearchParams
    경로변수 : http url 경로상에 / 구분하여 변수값 표현
    -> 경로 변경 / 요청 간에 상태 / 값 이동 목적
    예] http://localhost:8080/member/유재석/10
*/