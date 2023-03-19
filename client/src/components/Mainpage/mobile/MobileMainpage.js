import React from 'react';
import MobileNavbar from '../../Navbar/MobileNavbar';
import MobileFooter from '../../Footer/MobileFooter';
import image from "../../Image/모바일 배너.png";
import image1 from "../../Image/illumination-5173540_1920.jpg";
import search from "../../Image/search .png";

function MobileMainpage(){
    return(
        <div>
            <MobileNavbar />
            <div>
                <table>
                    <td><img src={search} alt="search" style={{marginLeft:"15px", marginTop:"10px"}} /></td>
                    <td><input style={{marginLeft:"10px",width:"290px",borderTop:'none',borderLeft:'none',borderRight:'none'}} type="text" /></td>
                </table>
            </div>
            <div>
                <img style={{width:"360px" , height:"250px"}} src={image} alt="배너" />
            </div>
            <hr />
            <div>
              <h4>선호태그 작품</h4>
              <table>
                <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
              </table>
            </div>
            <div>
                <table>
                    <tr>
                        <td><img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" /> &nbsp;</td>
                        <td><img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" /> &nbsp;</td>
                        <td><img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" /> &nbsp;</td>
                        <td><img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" /> &nbsp;</td>
                    </tr>
                    <tr>
                        <td><h5>아빠가 힘을 숨김 &nbsp;</h5></td>
                        <td><h5>변경백 서사는 황제였다 &nbsp;</h5></td>
                        <td><h5>결혼하지 않으면 죽습니다 &nbsp;</h5></td>
                        <td><h5>무림세가 천대받는 손녀딸이 되었다 &nbsp;</h5></td>
                    </tr>
                </table>
            </div>
            <hr />
            <div>
              <h4>스크랩 작품</h4>
             
            </div>
            <div>
                <table>
                    <tr>
                    <td><img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" /> &nbsp;</td>
                    <td><img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" /> &nbsp;</td>
                    <td><img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" /> &nbsp;</td>
                    <td><img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" /> &nbsp;</td>
                    </tr>
                    <tr>
                        <td><h5>아빠가 힘을 숨김 &nbsp;</h5></td>
                        <td><h5>변경백 서사는 황제였다 &nbsp;</h5></td>
                        <td><h5>결혼하지 않으면 죽습니다 &nbsp;</h5></td>
                        <td><h5>무림세가 천대받는 손녀딸이 되었다 &nbsp;</h5></td>
                    </tr>
                </table>
            </div>
            <hr />
            <div>
              <h4>피드백 작품</h4>
             
            </div>
            <div>
                <table>
                    <tr>
                    <td><img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" /> &nbsp;</td>
                    <td><img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" /> &nbsp;</td>
                    <td><img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" /> &nbsp;</td>
                    <td><img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" /> &nbsp;</td>
                    </tr>
                    <tr>
                        <td><h5>아빠가 힘을 숨김 &nbsp;</h5></td>
                        <td><h5>변경백 서사는 황제였다 &nbsp;</h5></td>
                        <td><h5>결혼하지 않으면 죽습니다 &nbsp;</h5></td>
                        <td><h5>무림세가 천대받는 손녀딸이 되었다 &nbsp;</h5></td>
                    </tr>
                </table>
            </div>
            <table>
                <tr><img alt="광고1" /></tr>
                <tr><img alt="광고2" /></tr>
                <tr><img alt="광고3" /></tr>
            </table>
            <div>
                <a href="/privacy">개인정보처리방침 &nbsp;</a>
                <a href="/tos">이용약관 &nbsp;</a>
                <a href="/notice">공지사항 &nbsp;</a>
                <a href="/ask">문의하기</a>
            </div>
            <h5>비지니스 메일 novelier@gmail.com</h5>
            <h3>노벨리에</h3>
            <MobileFooter />
        </div>
    )
}

export default MobileMainpage;