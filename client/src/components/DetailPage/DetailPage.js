import React,{useState} from 'react';
import {useParams} from "react-router-dom";
import image from "../Image/Ellipse 1.png";
import image1 from "../Image/illumination-5173540_1920.jpg";



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


    let {id} = useParams();
    return(
        <div>
            <img src={image} alt="뒤로가기" onClick={movetomain} />
            <table>
                <td>
                    <div className="container-fluid">
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                        <img style={{width:"306px", height:"459px"}} src={image1}alt="작품 사진" />
                                    </div>
                                    <div class="card-body">
                                        <h2 class="card-title">재벌집 막내아들</h2>
                                        <p class="card-text">
                                        <h4>산경</h4>
                                        <h4>현대 판타지 &nbsp; D-14</h4>
                                        <h4>10/30 &nbsp; 10/10</h4>
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
                                        <table>
                                            <td> 
                                                <input type="text" value="『자금이라는 것은 주인인 내가 알지 머슴이 뭘 압니까』" style={{width:"578px", height:"133px"}}/> 
                                            </td>
                                            <td>
                                                <tr><button onClick={movetochoose}>객관식 참여</button></tr>
                                                <tr><button onClick={movetowrite}>주관식 참여</button></tr>    
                                            </td>
                                        </table>
                                         
                                         <button>비슷한 작품</button>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </td>
            </table>

            <br />

            <table>
                <tr>
                  <td>
                  <div className="container-fluid">
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
                                        <h4>10/30 &nbsp; 10/10</h4>
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
                  <div className="container-fluid">
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
                                        <h4>10/30 &nbsp; 10/10</h4>
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
                  <div className="container-fluid">
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
                                        <h4>10/30 &nbsp; 10/10</h4>
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
                  <div className="container-fluid">
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
                                        <h4>10/30 &nbsp; 10/10</h4>
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


        </div>
    )
}

export default DetailPage;