

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

function MyCoupon(){
    return(
        <div>
            <Navbar/>
            <div style={{marginLeft:"360px",width:"1200px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",backgroundColor:"#D9D9D9" }}>
                <div style={{marginLeft:"15px"}}>
                <h4>쿠폰함</h4>
                <h5>현재 가지고 있는 쿠폰목록 입니다.</h5>
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
                        <h4 style={{marginTop:"150px"}}>사용 가능 쿠폰 수 : 5개 &nbsp; &nbsp;</h4>
                        
                        </div>
                    </p>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
            <div style={{marginLeft:"360px",width:"1200px",height:"120px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",backgroundColor:"#EEEEEE"  }}></div>
            <div style={{marginLeft:"360px",width:"1200px",height:"332px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",backgroundColor:"#EEEEEE"  }}>
            <div style={{marginLeft:"15px"}}>
            <h4>사용가능한 쿠폰 목록</h4>
            <div style={{ display: "flex", justifyContent: "space-between" }}> 
            쿠폰명
            <div>쿠폰내용</div>
            <div style={{ marginLeft: "900px" }}>유효기간</div>
             </div>
             
            </div>
            <hr/>
            </div>
            <Footer/>
        </div>
    )
}


export default MyCoupon;