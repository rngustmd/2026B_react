import { useEffect, useState } from "react"

function MoveBox( props ){

    const [ position , setPosition ] = useState( props.initPosition ); // position 상태/변수에 50 대입
    const [ leftCount , setLeftCount ] = useState( 1 ); // leftCount 상태/변수에 1 대입
    const boxStyle = { // 
        
        backgroundColor : 'red' , position : 'relative' , testAlign : 'center' ,
        width : '100px' , height : '100px' , margin : '10px' , lineHeight : '100px' ,
        left : `${position}px`

    }

    const moveLeft = ( ) => { // 한번 클릭시 position 20씩 차감 , 50 - 20 => 30
        setPosition( ( ) => position - 20 );
        setLeftCount( ( ) => leftCount + 1 );
    }

    const moveRight = ( ) => { // 한번 클릭시 position 20씩 차감 , 50 - 20 => 30
        setPosition( ( ) => position + 20 ); }
    
    // ********** 생명주기 ***********

    useEffect( ( ) => { 
        console.log( 'useEffect 실행 --> 마운트' )
        return ( ) => {
            console.log( 'useEffect 실행 --> 언마운트' )
        }
    } );                    // [1] 의존성 배열 생략
    // } , [ ] );           // [2] 의존성 배열 공백
    // } , [ leftCount ] ); // [3] 의존성 배열 특정 변수
    console.log( 'return 실행 --> 렌더링' )
    return (<>
        <div style={ boxStyle }> {leftCount} </div>
        <button onClick={ moveLeft }> 좌측이동 </button>
        <button onClick={ moveRight }> 우측이동 </button>
    </>)


}

export default function LifeCycle( props ){
    return(<>
    
        <h2> 리액트 훅 = 유즈이펙트 </h2>

        <MoveBox initPosition={50} />
        
    </>)
}