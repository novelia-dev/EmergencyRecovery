import React,{useState, useEffect} from "react";
import image from "../Image/illumination-5173540_1920.jpg";
import './Posts.css';
import Checkbox from "../Image/객관식체크박스.png";
import NewText from '../Image/pen.png';
import moment from 'moment';

function movetodetail(){
  window.location.href="/:id"
}



const Posts = ({ posts, loading }) => {

  const [remainingDays, setRemainingDays] = useState(null);

  useEffect(() => {
  const now = moment();
  const targetDate = moment('2023-03-28');

  const diffInDays = targetDate.diff(now,'days');
  setRemainingDays(diffInDays);
  },[])
  
  const [num, setNum] = useState(0);

  const handleChange = (e) => {
    setNum(e);
  }

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  function movetoscrap(){
    window.location.href="/myscrap"
  }

  return (
    <>
      {loading && <div> loading... </div>}
        {posts.slice(0,4).map((post) => (
          <table>
            <td>
            <div className="contanier-fluid" style={{'border-width':"3px",'border-style':"solid",'border-color':"#E5E5E5",'border-spacing': "0",'border-collapse' : 'collapse'}} key={post.id} >
            <div class="row">
              <div class="col-12 mt-3">
                  <div class="card-horizontal">
                  <div className="img-square-wrapper"onMouseEnter={handleMouseEnter}onMouseLeave={handleMouseLeave}>
      <img style={{ width: '282px', height: '423px' }} src={image} alt="사진" />
      {isHovering && (
        <div style={{position: 'absolute',top: 0,left: 0,width: '100%',height: '100%',backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
          <button onClick={movetoscrap} style={{position:"absolute",borderRadius: "50px",marginLeft:"204px",Top:"25px",width:"78px",height:"51px",backgroundColor:"#AA0140",color:"white"}}>스크랩</button>
          <div onClick={movetodetail} style={{display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100%'}}>
            <h6 style={{ color: 'white',width:"282px",height:"289px",backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>이미지 위에 표시할 텍스트</h6>
          </div>
        </div>)}
        </div>
                      <div class="card-body" onClick={movetodetail} style={{marginLeft:"10px"}} >
                        <h2 class="card-title">재벌집 막내아들</h2>
                        <p class="card-text">
                          <h4>산경</h4>
                          {remainingDays !== null && (
                            <p><b>현대 판타지 &nbsp; D-{remainingDays}</b></p>
                          )}
                          <img src={Checkbox} style ={{width:"30px",height:"30px",float:"left"}} alt="객관식체크박스"/> <h4>&nbsp;10/30 &nbsp;<img className="NewText" alt="NewText" style={{width:"24px", height:"23px"}}src={NewText}/>&nbsp; 10/10</h4>
                          <h4>태그</h4>
                          <table>
                            <tr>
                              <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                              <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                              <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                            </tr>
                            <tr>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            </tr>
                            <tr>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            </tr>
                            <tr>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
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
            <div className="contanier-fluid" key={post.id} style={{marginLeft:"24px",'border-width':"3px",'border-style':"solid",'border-color':"#E5E5E5",'border-spacing': "0",'border-collapse' : 'collapse'}}>
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card-horizontal">
                 <div className="img-square-wrapper"onMouseEnter={handleMouseEnter}onMouseLeave={handleMouseLeave}>
      <img style={{ width: '282px', height: '423px' }} src={image} alt="사진" />
      {isHovering && (
        <div style={{position: 'absolute',top: 0,left: 0,width: '100%',height: '100%',backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
          <button onClick={movetoscrap} style={{position:"absolute",borderRadius: "50px",marginLeft:"204px",Top:"25px",width:"78px",height:"51px",backgroundColor:"#AA0140",color:"white"}}>스크랩</button>
          <div onClick={movetodetail} style={{display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100%'}}>
            <h6 style={{ color: 'white',width:"282px",height:"289px",backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>이미지 위에 표시할 텍스트</h6>
          </div>
        </div>)}
        </div>
                      <div class="card-body" style={{marginLeft:"10px"}} onClick={movetodetail} >
                        <h2 class="card-title">재벌집 막내아들</h2>
                        <p class="card-text">
                          <h4>산경</h4>
                          {remainingDays !== null && (
                            <p><b>현대 판타지 &nbsp; D-{remainingDays}</b></p>
                          )}
                          <img src={Checkbox} style ={{width:"30px",height:"30px",float:"left"}} alt="객관식체크박스"/> <h4>&nbsp;10/30 &nbsp;<img className="NewText" alt="NewText" style={{width:"24px", height:"23px"}}src={NewText}/>&nbsp; 10/10</h4>
                          <h4>태그</h4>
                          <table>
                            <tr>
                              <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                              <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                              <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                            </tr>
                            <tr>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            </tr>
                            <tr>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            </tr>
                            <tr>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",border:"none",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
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
        ))}
   
    </>
  );
};
export default Posts;