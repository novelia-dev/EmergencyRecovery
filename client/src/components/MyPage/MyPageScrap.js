import React,{useState} from 'react';
import image from '../Image/illumination-5173540_1920.jpg';
import Navbar from '../Navbar/SimpleNavbar';
import Pagination from "../Mainpage/Pagination";
import Checkbox from "../Image/객관식체크박스.png";
import NewText from '../Image/pen.png';


import Footer from '../Footer/Footer';



function movetodetail(){
  window.location.href="/myscrap/:id"
}

 
function MyPageScrap(){
 


//버튼 누를떄 마다 스크랩 피드백완료된작품 변함

const [selected, setSelected] = useState("button1");
  const handleClick1 = () => {
    setSelected("button1");
  };

  const handleClick2 = () => {
    setSelected("button2");
  };
   const style1={
    width:"125px",
    height:"45px",
    marginLeft:"1307px",
    marginTop:"23px",
    border:"none",
    borderBottom: `4px solid ${selected === "button1" ? "#AA0140" : "#000"}`,
    backgroundColor:"white",
    fontSize:"16px",
    fontWeight:"400"
   };
   const style2={
    width:"125px",
    height:"45px",
    marginTop:"23px",
    border:"none",
    borderBottom: `4px solid ${selected === "button2" ? "#AA0140" : "#000"}`,
    backgroundColor:"white",
    fontSize:"16px",
    fontWeight:"400"
   };
   
    return(
        <div>
          <Navbar/>
          {selected === "button1" && <div style={{ marginTop:"60px",marginLeft:"360px",width:"1200px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",backgroundColor:"#D9D9D9" }}>
          <div style={{marginLeft:"15px"}}> 
            <h4 style={{fontSize:"19px"}}>스크랩 작품</h4>
            <h5>스크랩된 작품 목록입니다.</h5></div>
            </div>
            }
             {selected === "button2"  && <div style={{ marginTop:"60px",marginLeft:"360px",width:"1200px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",backgroundColor:"#D9D9D9" }}>
             <div style={{marginLeft:"15px"}}> 
            <h4 style={{fontSize:"19px"}}>피드백참여 작품</h4>
            <h5>피드백에 참여한 작품 목록입니다.</h5></div>
            </div>
            }
            <div><button style={style1} onClick={handleClick1}>스크랩</button><button style={style2} onClick={handleClick2}>피드백 참여</button></div>
            <div>
            {selected === "button1" && <div style={{marginLeft:"360px",marginTop:"22px"}}>
            <table>
            <td>
            <div className="contanier-fluid" style={{'border-width':"3px",'border-style':"solid",'border-color':"#E5E5E5",'border-spacing': "0",'border-collapse' : 'collapse'}} >
            <div class="row">
              <div class="col-12 mt-3">
                  <div class="card-horizontal" onClick={movetodetail}>
                    <div class="img-square-wrapper" >
                      <img style={{width:"282px", height:"423px"}} src={image} alt="사진" />
                    </div>
                      <div class="card-body" >
                        <h2 class="card-title">재벌집 막내아들</h2>
                        <p class="card-text">
                          <h4>산경</h4>
                          <h4>현대 판타지 &nbsp; D-14</h4>
                          <img src={Checkbox} style ={{width:"30px",height:"30px",float:"left"}} alt="객관식체크박스"/> <h4>&nbsp;10/30 &nbsp;<img className="NewText" alt="NewText" style={{width:"24px", height:"23px"}}src={NewText}/>&nbsp; 10/10</h4>
                          <h4>태그</h4>
                          <table>
                            <tr>
                              <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                              <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                              <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                            </tr>
                            <tr>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            </tr>
                            <tr>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            </tr>
                            <tr>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            </tr>
                          </table>
                        </p>
                      </div>
                 </div>
              </div>
            </div>
          </div>
            </td>
            <td></td>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <td>
            <div className="contanier-fluid" style={{marginLeft:"24px",'border-width':"3px",'border-style':"solid",'border-color':"#E5E5E5",'border-spacing': "0",'border-collapse' : 'collapse'}}>
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card-horizontal" onClick={movetodetail}>
                    <div class="img-square-wrapper">
                      <img style={{width:"282px", height:"423px"}} src={image} alt="사진" />
                    </div>
                      <div class="card-body" >
                        <h2 class="card-title">재벌집 막내아들</h2>
                        <p class="card-text">
                          <h4>산경</h4>
                          <h4>현대 판타지 &nbsp; D-14</h4>
                          <img src={Checkbox} style ={{width:"30px",height:"30px",float:"left"}} alt="객관식체크박스"/> <h4>&nbsp;10/30 &nbsp;<img className="NewText" alt="NewText" style={{width:"24px", height:"23px"}}src={NewText}/>&nbsp; 10/10</h4>
                          <h4>태그</h4>
                          <table>
                            <tr>
                              <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                              <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                              <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                            </tr>
                            <tr>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            </tr>
                            <tr>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            </tr>
                            <tr>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            </tr>
                          </table>
                        </p>
                      </div>
                 </div>
              </div>
            </div>
          </div>
            </td>
          </table>
          
              </div>}

            {selected === "button2" && <div style={{marginLeft:"360px",marginTop:"22px"}}>
            <table>
            <td>
            <div className="contanier-fluid" style={{'border-width':"3px",'border-style':"solid",'border-color':"#E5E5E5",'border-spacing': "0",'border-collapse' : 'collapse'}}  >
            <div class="row">
              <div class="col-12 mt-3">
                  <div class="card-horizontal" onClick={movetodetail}>
                    <div class="img-square-wrapper" >
                      <img style={{width:"282px", height:"423px"}} src={image} alt="사진" />
                    </div>
                      <div class="card-body" >
                        <h2 class="card-title">전지적 작가 시점</h2>
                        <p class="card-text">
                          <h4>산경</h4>
                          <h4>현대 판타지 &nbsp; D-14</h4>
                          <img src={Checkbox} style ={{width:"30px",height:"30px",float:"left"}} alt="객관식체크박스"/> <h4>&nbsp;10/30 &nbsp;<img className="NewText" alt="NewText" style={{width:"24px", height:"23px"}}src={NewText}/>&nbsp; 10/10</h4>
                          <h4>태그</h4>
                          <table>
                            <tr>
                              <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                              <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                              <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                            </tr>
                            <tr>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            </tr>
                            <tr>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            </tr>
                            <tr>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            </tr>
                          </table>
                        </p>
                      </div>
                 </div>
              </div>
            </div>
          </div>
            </td>
            <td></td>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <td>
            <div className="contanier-fluid" style={{marginLeft:"24px",'border-width':"3px",'border-style':"solid",'border-color':"#E5E5E5",'border-spacing': "0",'border-collapse' : 'collapse'}}>
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card-horizontal" onClick={movetodetail}>
                    <div class="img-square-wrapper">
                      <img style={{width:"282px", height:"423px"}} src={image} alt="사진" />
                    </div>
                      <div class="card-body" >
                        <h2 class="card-title">전지적 작가 시점</h2>
                        <p class="card-text">
                          <h4>산경</h4>
                          <h4>현대 판타지 &nbsp; D-14</h4>
                          <img src={Checkbox} style ={{width:"30px",height:"30px",float:"left"}} alt="객관식체크박스"/> <h4>&nbsp;10/30 &nbsp;<img className="NewText" alt="NewText" style={{width:"24px", height:"23px"}}src={NewText}/>&nbsp; 10/10</h4>
                          <h4>태그</h4>
                          <table>
                            <tr>
                              <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                              <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                              <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                            </tr>
                            <tr>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            </tr>
                            <tr>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            </tr>
                            <tr>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            </tr>
                          </table>
                        </p>
                      </div>
                 </div>
              </div>
            </div>
          </div>
            </td>
          </table>
              </div>}
            </div>
            <div style={{marginLeft:"309px"}}>
            <Pagination></Pagination>
            </div>
            
      <div style={{marginTop:"119px"}}>
      <Footer/>
      </div>
      
        </div>
    )
}


export default MyPageScrap;