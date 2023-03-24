import React from "react";
import Navbar from '../Navbar/SimpleNavbar';
import Footer from '../Footer/Footer';
import image1 from '../Image/Biguser.png';
function movetoInput(){
    window.location.href="/myinput";
}
function movetoGift(){
    window.location.href="/mygift";
  }
  function movetoStats(){
    window.location.href="/mypointstats";
  }
function MyPointStats(){
    return(
        <div>
            <Navbar/>
            <div style={{marginLeft:"360px",width:"1200px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",backgroundColor:"#D9D9D9" }}>
                <div style={{marginLeft:"15px"}}>
                <h4>포인트 획득/사용내역</h4>
                <h5>지금까지 모은 포인트와 사용한 포인트 내역입니다.</h5>
                </div>
            </div>
            <div className="container-fluid" style={{marginLeft:"360px",width:"1200px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5" }}>
               <div class = "row">
                <div class="col-12 mt-3">
                  <div class="card-horizontal">
                    <div class="img-square-wrapper">
                    <img src={image1} alt="사용자사진" />
                    </div>
                    <div class="card-body" style={{marginLeft:"15px"}}>
                      <p class="card-text">
                        <div style={{float:"left"}}>
                        <h4 style={{marginTop:"150px"}}>획득 포인트 : 8000 &nbsp; &nbsp;</h4>
                        <h4>사용 포인트 : 8000</h4>
                        <h4 >잔여 포인트 : 8000</h4>
                        </div>
                        <button style={{marginLeft:"53px",marginTop:"209px",width:"252px",height:"45px",fontSize:"16px",fontWeight:"700",alignItems:"center",textAlign:"center",backgroundColor:"#FFFFFF",color:"#000000", border:"1px solid #AA0140"}} onClick={movetoStats}>포인트 획득/사용내역</button>   
                    </p>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
            <div style={{marginLeft:"360px",width:"1200px",height:"120px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",backgroundColor:"#EEEEEE"  }}></div>
            <div style={{marginLeft:"360px",width:"1200px",height:"332px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",backgroundColor:"#EEEEEE"  }}>
            <div style={{marginLeft:"15px"}}>
            <h4>포인트 획득/사용내역</h4>
            <div style={{ display: "flex", justifyContent: "space-between" }}> 
            내용
            <div style={{ marginLeft: "900px" }}>획득/사용내역</div>
             </div>
             
            </div>
            <hr/>
            </div>
            <Footer/>
        </div>
    )
}

export default MyPointStats;