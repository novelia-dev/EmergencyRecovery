import React,{useState,useEffect} from 'react';
import image from '../Image/illumination-5173540_1920.jpg';
import moment from 'moment';

function MyPageFeedbackComplete(){

  const [remainingDays , setRemainingDays] = useState(null);
  const [buttonTitle, setButtonTitle] = useState('게시종료');

  window.addEventListener("beforeunload", function(){
    localStorage.removeItem("number");
  });

  useEffect(() => {
    const now = moment();
    const targetDate = moment('2023-03-28');
    const diffInDays = targetDate.diff(now,'days');
    setRemainingDays(diffInDays);

    var num = localStorage.getItem("number"); 

    if(num === '1')
    {
      setButtonTitle('입금 확인중');
    }

  },[])

  function move(){
    alert('피드백 열람을 위해 열람권 구매 페이지로 이동합니다.');
    window.location.href="/buy";
    localStorage.setItem("number",1);
  } 

    return(
        <div>
            <div>
                <h4>피드백 완료된 작품</h4>
                <h5>피드백이 완료된 작품 목록입니다.</h5>
            </div>
            <div>
            <table>
            <td>
            <div className="contanier-fluid">
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card-horizontal" onClick={move}>
                    <div class="img-square-wrapper" style={{marginTop:"25px"}}>
                      <img src ={image} style={{width:"282px", height:"423px"}} alt="사진" />
                    </div>
                      <div class="card-body">
                        <h2 class="card-title">재벌집 막내아들</h2>
                        <p class="card-text">
                          <h4>산경</h4>
                          <h4>현대 판타지</h4>
                          <button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000",marginTop:"-50px" ,marginLeft:"100px"}}>{buttonTitle}</button>
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
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                            </tr>
                            <tr>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                            </tr>
                            <tr>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
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
            <div className="contanier-fluid">
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card-horizontal">
                    <div class="img-square-wrapper" style={{marginTop:"25px"}}>
                      <img src={image} style={{width:"282px", height:"423px"}} alt="사진" />
                    </div>
                      <div class="card-body" onClick={move} >
                        <h2 class="card-title">재벌집 막내아들</h2>
                        <p class="card-text">
                          <h4>산경</h4>
                          <h4>현대 판타지</h4>
                          <button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000",marginTop:"-50px" ,marginLeft:"100px"}}>{buttonTitle}</button>
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
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                            </tr>
                            <tr>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                            </tr>
                            <tr>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
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
            </div>
        </div>
    )
}

export default MyPageFeedbackComplete;