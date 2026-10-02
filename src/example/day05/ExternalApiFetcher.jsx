import axios from "axios";
import { useEffect, useState } from "react";

function RandomUser( props ){
    const [ myJSON , setMyJSON ] = useState( { results : [ ] } );

    // AXIOS 이용하여 API 통신 하고 응답결과 상태변수에 저장
    useEffect( async function ( ){
        const response = await axios("https://api.randomuser.me?results=10");
        const data = response.data;
        setMyJSON(data); // 통신 응답결과 상태변수
    } , []);

    // 현재 상태변수에 존재하는 리스트들을 tr 구성하여 하나씩 html 만들기
    let trTag = myJSON.results.map( (data) => {
        return(
            <tr key={data.login.md5}>
                <td> <img src={data.picture.thumbnail} alt={data.login.username} /> </td>
                <td> <a href="/" onClick={ (e) => {
                    e.preventDefault( );
                    props.onProfile( data );
                }}> { data.login.username } </a> 
                </td>
                <td> {data.name.title} {data.name.first} {data.name.last} </td>
                <td> {data.nat} </td>
                <td> {data.email} </td>
            </tr>
        );
    });
    return(
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th> 사진 </th> <th> 로그인 </th> <th> 이름 </th>
                        <th> 국가 </th> <th> Email </th>
                    </tr>
                </thead>
                <tbody> 
                    {trTag} 
                </tbody>
            </table>
        </div>
    );
}

export default function ExternalApiFetcher( props ){
    return(<>
        <h2> 외부 서버 통신 </h2>
        <RandomUser onProfile={ (sData) => {
            console.log( sData );
            let info = `전화번호 : ${sData.cell} 
성별 : ${sData.gender}
username : ${sData.login.username} 
assword : ${sData.login.password}`;

            alert(info);
        }}> </RandomUser>
    </>);
}