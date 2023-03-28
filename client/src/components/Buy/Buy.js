import React from "react";
import Navbar from '../Navbar/SimpleNavbar';
function Click(){
    alert('정상입금 확인 후 열람권한이 부여됩니다. 1일 안에 처리됩니다.');
    window.location.href="/myfeedback";
}

function Buy(){
    return(
        <div>
            <Navbar/>
  
            <div style={{marginLeft:"360px",width:"1200px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",backgroundColor:"#D9D9D9" }}>
                <div style={{marginLeft:"15px"}}>
                  <h3>열람권 구매</h3>
                  <h5>피드백을 열람하기 위해 열람권을 구매하세요.</h5>
                 </div>
            </div>
        
            <div style={{float:"left",marginLeft:"360px",width:"792px",height:"157px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>
                <div style={{marginLeft:"15px"}}>
                <h4>상품명</h4>
                <h5>"제목제목제목제목"에 대한 "노벨리에1+1세트"</h5>
                <h4 style={{marginTop:"-10px"}}>쿠폰</h4>
                <h5 style={{float:"left",marginTop:"0px"}}>쿠폰명</h5>
                <h5 style={{marginLeft:"246px"}}>내용</h5>
                </div>
            </div>
            <div style={{width:"408px",height:"383px",backgroundColor:"#333333",marginLeft:"1153px",position:"absolute"}}>
            <div style={{marginLeft:"15px"}}>
            <h3 style={{color:"white"}}>입금계좌</h3>
            <h4 style={{color:"white"}}>@@@@@@@@@@@@@@@@@@@@@</h4>
            </div>
           
          <button style={{color:"white",borderRadius:"4px",marginLeft:"270px",marginTop:"210px",width:"131px",height:"45px",backgroundColor:"#AA0140"}}onClick={Click}>입금완료</button>
            </div>
            <div style={{float:"left",marginLeft:"360px",width:"792px",height:"126px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>
                <div style={{marginLeft:"15px"}}>
                <h4>최종결제금액</h4>
                <h5 style={{float:"left",marginTop:"0px"}}>상품가격</h5>
                <h5 style={{marginTop:"0px",position:"absolute",float:"left",marginLeft:"246px"}}>할인가</h5>
                <h5 style={{marginLeft:"500px"}}>최종가격</h5>
                <h6 style={{float:"left",marginTop:"0px"}}>55,000</h6>
                <h6 style={{marginTop:"0px",position:"absolute",float:"left",marginLeft:"246px"}}>1,000</h6>
                <h6 style={{marginLeft:"500px"}}>54,000</h6>
                </div>
            </div>
          <div style={{float:"left",marginLeft:"360px",width:"792px",height:"97px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>
            <div style={{marginLeft:"15px"}}>
            <h4>입금자 명</h4>
           <input type="text" placeholder="플레이스 홀더" />
            </div>
          </div>
            </div>
         

    )
}

export default Buy;