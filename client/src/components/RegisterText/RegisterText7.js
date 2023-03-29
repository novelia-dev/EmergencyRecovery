import React,{useState} from "react";



function movetosecond(){
    window.location.href="/high";
}

function RegisterText7(){

    const [context, setContext] = useState("");

    const handlecontext = (e) => {
        setContext(e.target.value);
    }

    return(
        <div>
            <div style={{'width':"1200px",'marginLeft':"360px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>
            <div style={{marginBottom:"15px",marginLeft:"15px"}}><h3>5화등록</h3></div>
            <div style={{marginBottom:"15px",marginLeft:"15px"}}>5화 내용을 입력해주세요.</div>
            </div>
            <div style={{'width':"1200px",'marginLeft':"360px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>
            <div style={{'marginLeft':"15px"}}><h5>5화</h5></div>
            <div style={{'marginLeft':"15px"}}><h5>본문 입력 ({context.length})자</h5></div>
            <div style={{'marginLeft':"15px"}}><textarea style={{width:"1169px", height:"619px"}} type="text" onChange={handlecontext}  placeholder="5000자 이내  잠깐! 아직 성인 컨텐츠는 등록할 수 없습니다. 명심해주세요." /></div>
            <br />
            <div><button style={{width: "102px", height:"45px", borderRadius:"4px", backgroundColor:"#FFFFFF",border:"1px solid #AA0140", marginLeft: "600px" }} onClick={movetosecond}>다음</button></div>
            </div>

            </div>
    );
}

export default RegisterText7;