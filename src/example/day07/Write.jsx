import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export default function Write( props ){
    const navigate = useNavigate(); // [1] 화면 이동하기 위한 훅
    // html : <a href=""> ,     REACT : <Link to="">
    // js : location.href="" ,  REACT : navigate("")
    // * html/js 코드는 깜빡거림. *
    const write = async ( event ) => {
        event.preventDefault();
        console.log( event.target )
        const obj = {
            name : event.target.writer.value , 
            subject : event.target.title.value ,
            content : event.target.contents.value
        }
        // axios
        const response = await axios.post( "http://localhost:8080/api" , obj )
        const data = response.data;
        if( data == true ){ navigate("/list") }
    }

    return (<>
        <div>
            <Link to="/list"> 목록 </Link>
            <form onSubmit={ (event) => { write(event)}}>
                작성자 : <input name="writer" /> <br />
                제목 : <input name="title" /> <br />
                내용 : <textarea name="contents" rows="3"> </textarea> <br />
                <input type="submit" value="작성" />
            </form>
        </div>
    </>)
}