import React,{useState,useEffect} from "react";
import image from "../Image/illumination-5173540_1920.jpg";
import './Posts.css';
import Checkbox from "../Image/객관식체크박스.png";
import NewText from '../Image/pen.png';
import axios from "axios";
function movetodetail(){
  window.location.href="/:id"
}


const Posts = ({ posts, loading }) => {

  const apiUrl = 'https://localhost:8000/novels';


  const [novels, setNovels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setNovels(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      {loading && <div> loading... </div>}
      
        {posts.map((post) => (
          <table>
            <td>
            <div className="contanier-fluid" style={{'border-width':"3px",'border-style':"solid",'border-color':"#E5E5E5",'border-spacing': "0",'border-collapse' : 'collapse'}} key={post.id} >
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
            <td>
            <div className="contanier-fluid" key={post.id} style={{marginLeft:"24px",'border-width':"3px",'border-style':"solid",'border-color':"#E5E5E5",'border-spacing': "0",'border-collapse' : 'collapse'}}>
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
        ))}
   
    </>
  );
};
export default Posts;