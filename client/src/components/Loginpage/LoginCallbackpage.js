import React,{useState,useEffect} from 'react';

function activeButton(){
    alert("확인완료");
    window.location.href="/register2";
}
function cancel(){
    alert("취소");
    window.location.href="/";
}
function tos(){
    window.location.href="/tos"
}
function privacypolicy(){
    window.location.href="/privacy"
}
function LoginCallbackpage(){

    const urlSearchParams = new URLSearchParams(window.location.search);
    const code = urlSearchParams.get('code');

    useEffect(() => {
        localStorage.setItem("code",code);
    },[code]);

    const style={
    'width':"588px",
    'height':"379px",
    'margin-top':"351px",
    'margin-left':"666px",
    'Font-family':"Roboto",
    'Font-style':"Regular",
    'Font-size':"19px",
    'line-height':"22px",
    'text-align':"left",
    'border-width':"1px",
    'border-style':"solid",
    'border-color':"#E5E5E5"
     };
    const style1={
    'box-sizing':"boreder-box",
    'display': "flex",
    'justify-content':"center",
    'align-items': "center",
    'gap':"10px",
    'width':"102px",
    'height':"41.57px",
    'position':"absoulte",
    'borderRadius': "4px",
    'font-family': "Roboto",
    'font-weight': 400,
    'font-size': "16px",
    'color':"#000000",
    'line-height': "18.75px",
   
    
    'marginTop':"210px",
    'marginLeft':"180px",
    'float':"left",
    'border-width':"1px",
    'border-style':"solid",
    'border-color':"#AA0140"
    
};
    const style2={
    'box-sizing':"boreder-box",
    'display': "flex",
    'justify-content':"center",
    'align-items': "center",
    'gap':"10px",
    'width':"102px",
    'height':"41.57px",
    'position':"absoulte",
    'borderRadius': "4px",
    'font-family': "Roboto",
    'font-weight': 400,
    'font-size': "16px",
    'line-height': "18.75px",
    'color': "#FFFFFF",
    'background-color':"#AA0140",
    'margin-left':"22px",
    'float':"left"  
};

    return(
<div>
    {console.log(code)}
  <div style={style}>
    <h3>&nbsp; &nbsp;회원가입</h3>
    <hr style={{'border-width':"1px",
    'border-style':"solid",
    'border-color':"#E5E5E5"}}></hr>
  <div>
  &nbsp; &nbsp;
  <input type="checkbox"/><label style={{'fontSize':"16px",'top':"15px",'left':"15px"}}>전체 약관 동의</label>
    <hr style={{'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}></hr>
  </div>
  <div>
   
  <div style={{position: "absolute",'top':"478px"}}> &nbsp; &nbsp;<input type="checkbox" /><label >이용약관 동의</label></div>
  <div><button style={{position: "absolute",width: "78px",height: "30px",left: "1161px",top: "478px",backgroundColor: "#666666",borderRadius: "4px",'color': "#FFFFFF"}} onClick={tos}>내용보기</button></div>
                  
  <div style={{position: "absolute",'top':"523px"}}>&nbsp; &nbsp;<input type="checkbox"/><label >개인정보 수집 및 이용동의</label></div>
  <div><button style={{position: "absolute",width: "78px",height: "30px",left: "1161px",top: "523px",backgroundColor: "#666666",borderRadius: "4px",'color': "#FFFFFF"}} onClick={privacypolicy}>내용보기</button></div>
  </div>
  <div >
    <botton style={style1} onClick={cancel}> 취소</botton>
  </div>
  <div style={{marginTop:"218px",marginLeft:"22px"}}>
  <botton style={style2} onClick={activeButton}> 확인</botton>
  </div>
  
    </div>
</div>
    );
}
//동욱아 그냥 싹다 갈아
/*
<table style={style}>
                   style={{marginTop:"210px",marginLeft:"180px"}}
                  <div><botton style={style6} onClick={cancel}> 취소</botton></div>
                   <div><botton style={style7} onClick={activeButton}> 다음</botton></div>
                   <tr>
                   <td><input type="checkbox"/><label>이용약관 동의</label></td><td><button>내용보기</button></td>
                   </tr>
                   <tr>
                   <td><input type="checkbox"/><label>개인정보 수집 및 이용동의</label></td><td><button>내용보기</button></td>
                   </tr>
                   <tr>
                   <td></td>
                   <td></td>
                   </tr>
       </table>*/
export default LoginCallbackpage;