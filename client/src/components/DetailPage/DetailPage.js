import React,{useState} from 'react';
import {useParams} from "react-router-dom";

import image1 from "../Image/illumination-5173540_1920.jpg";
import backimage from "../Image/뒤로가기.png";
import Navbar from "../Navbar/Navbar";
import Checkbox from "../Image/객관식체크박스.png";
import NewText from '../Image/pen.png';
import Group from '../Image/Group.png';
function DetailPage(props){

   

    function moveto(){
        window.location.href=`/${id}`;
    }
    function movetomain(){
        window.location.href="/";
    }
    
    function movetochoose(e){
        
        localStorage.setItem("Istype",1);
        window.location.href=`/${id}/read1`;
    }
    
    function movetowrite(e){
        
        localStorage.setItem("Istype",2);
        window.location.href=`/${id}/read1`;
    }
    const buttonstyle={
            'box-sizing':"boreder-box",
            'display': "float",
            'justify-content':"center",
            'align-items': "center",
            'gap':"10px",
            'width':"150px",
            'height':"45px",
            'borderRadius': "4px",
            'font-family': "Roboto",
            'font-weight': 700,
            'font-size': "16px",
            'line-height': "18.75px",
            'color': "#FFFFFF",
            'background-color':"#AA0140",
            'border-width':"0",
            'marginTop':"15px"
            

    }
    const buttonstyle2 ={
        
            'box-sizing':"boreder-box",
            'display': "flex",
            'justify-content':"center",
            'align-items': "center",
            'gap':"10px",
            'width':"180px",
            'height':"60px",
            'borderRadius': "4px",
            'font-family': "Roboto",
            'font-weight': 700,
            'font-size': "22px",
            'line-height': "18.75px",
            'color': "#FFFFFF",
            'background-color':"#AA0140",
            'margin-left':"870px",
            'margin-top':"52px",
            'border-width':"0",
            'line-height': "26px"

    };

    let {id} = useParams();
    return(
        <div>
            <Navbar/>
            <img src={backimage} style={{float:"left",marginLeft:"360px",width:"78px",height:"78px"}} alt="뒤로가기" onClick={movetomain} />
            <table style={{'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",'border-spacing': "0",'border-collapse' : 'collapse'}}>
                <td>
                    <div className="container-fluid">
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                        <img style={{width:"306px", height:"459px"}} src={image1}alt="작품 사진" />
                                    </div>
                                    <div class="card-body" style ={{marginLeft:"15px"}}>
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
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선택태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선택태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선택태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선택태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선택태그</button></td>
                                            </tr>
                                            <tr>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                                            </tr>
                                        </table>
                                        <table style={{float:"left"}}>
                                            <td > 
                                                <input type="text" value="『자금이라는 것은 주인인 내가 알지 머슴이 뭘 압니까』" style={{width:"578px", height:"133px"}}/> 
                                            </td>
                                            <td style={{marginTop:"20%"}}>
                                            
                                            </td>
                                        </table>
                                        
                                        <button style={buttonstyle} onClick={movetochoose}>객관식 참여</button>
                                        <br/>
                                        <br/>
                                        
                                        <button style={buttonstyle} onClick={movetowrite}>주관식 참여</button>
                                         

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </td>
            </table>
            <button style={buttonstyle2}>비슷한 작품</button>
            <br />

            <img  style={{marginLeft:"597px"}}src={Group} alt="비슷한 작품이 없습니다" />

        </div>
    )
}

//비슷한 작품이 있을 때 넣으면 될듯
/* <table>
                <tr>
                  <td>
                  <div className="container-fluid" style={{marginLeft:"360px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",'border-spacing': "0",'border-collapse' : 'collapse'}}>
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                    <img style={{width:"306px", height:"459px"}} src={image1}alt="작품 사진" />
                                    </div>
                                    <div class="card-body" onClick={moveto}>
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
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                                            </tr>
                                            <tr>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                                            </tr>
                                            <tr>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                                            </tr>
                                        </table>
                                        

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </td>
                  <td>
                  <div className="container-fluid" style={{marginLeft:"24px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",'border-spacing': "0",'border-collapse' : 'collapse'}}>
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                    <img style={{width:"306px", height:"459px"}} src={image1}alt="작품 사진" />
                                    </div>
                                    <div class="card-body" onClick={moveto}>
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
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                                            </tr>
                                            <tr>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                                            </tr>
                                            <tr>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                                            </tr>
                                        </table>
                                        

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                  <div className="container-fluid" style={{marginLeft:"360px",marginTop:"15px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",'border-spacing': "0",'border-collapse' : 'collapse'}}>
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                    <img style={{width:"306px", height:"459px"}} src={image1}alt="작품 사진" />
                                    </div>
                                    <div class="card-body" onClick={moveto}>
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
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                                            </tr>
                                            <tr>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                                            </tr>
                                            <tr>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                                            </tr>
                                        </table>
                                        

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </td>
                  <td>
                  <div className="container-fluid" style={{marginLeft:"24px",marginTop:"15px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",'border-spacing': "0",'border-collapse' : 'collapse'}}>
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                    <img style={{width:"306px", height:"459px"}} src={image1}alt="작품 사진" />
                                    </div>
                                    <div class="card-body" onClick={moveto}>
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
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                                            </tr>
                                            <tr>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                                            </tr>
                                            <tr>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                                            </tr>
                                        </table>
                                        

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </td>
                </tr>
            </table>
*/
export default DetailPage;