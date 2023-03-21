import React,{useState} from "react";
import image from "../Image/Group 1726.png";
import image2 from "../Image/Group 1727.png";
import image3 from "../Image/Group 1728.png";
import image4 from "../Image/Group 1729.png";
import Navbar from "../Navbar/SimpleNavbar";
import $ from 'jquery';

function movetoFeed(){
    window.location.href = "/feed";
}


function Hilight(){

    var src;

    const handleChange1 = (e) => {
        src= $('#image1').attr("src");
    }

    const handleChange2 = (e) => {
        src = $('#image2').attr("src");

    }
    
    const handleChange3 = (e) => {
        src = $('#image3').attr("src");
    }
    
    const handleChange4 = (e) => {
        src = $('#image4').attr("src");
    }

    var num = 1;
    
    const [context, setContext] = useState("");

    const handlecontext = (e) => {
        setContext(e.target.value);
    }

    return(
        <div>
            <Navbar/>
            <div style={{'width':"1200px",'marginLeft':"360px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>
                <div style={{marginLeft:"15px"}}>
                <h4>하이라이트 설정</h4>
                <h5>작품의 일러스트와 함께 보여질 하이라이트를 설정하세요.</h5>
                </div>
            </div>
           
            <div>
            
            <div style={{position: "relative",marginLeft:"360px",float:"left"}}>
  <img style={{position: "static" , width:"306px", height:"306px",marginTop:"67.5px"}} src={image} id="photo" alt="작품하이라이트" />
  <div style={{position:"absolute", height:"50px", wordBreak:"break-all", width:"306px", top:"50%", left:"0", textAlign:"center", fontWeight:"700",color:"white"}}>
  {context && (
    <div style={{backgroundColor:"gray", opacity:"0.5", width:"100%", height:"100%", position:"absolute", top:"0", left:"0"}}></div>
  )}
  {context}
</div>
 </div>
            <div style={{'width':"1200px",'marginLeft':"360px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                &nbsp;&nbsp;&nbsp;<label >하이라이트 &nbsp;({context.length})자</label>
                &nbsp;&nbsp;&nbsp;<input style={{width:"863px", height:"210px",marginLeft:"15px"}} type="text" onChange={handlecontext} placeholder="30자이내" maxLength="100" id="big"/>
            </div>
                    
                    
                    <table style={{marginLeft:"681px"}}>
                    <tr>
                        <label>샘플이미지</label>
                    </tr>
                    <br/>
                    
                    <tr>
                        <td><img id="image1" style={{width:"164px", height:"164px",marginLeft:"24px"}} onClick={handleChange1} src={image} alt="샘플이미지1" /></td>
                        <td><img id="image2" style={{width:"164px", height:"164px",marginLeft:"24px"}} onClick={handleChange2} src={image2} alt="샘플이미지2" /></td>
                        <td><img id="image3" style={{width:"164px", height:"164px",marginLeft:"24px"}} onClick={handleChange3} src={image3} alt="샘플이미지3" /></td>
                        <td><img id="image4" style={{width:"164px", height:"164px",marginLeft:"24px"}} onClick={handleChange4} src={image4} alt="샘플이미지4" /></td>                
                    </tr>
                </table> 
            </div>
            <div>
                <button style={{width: "102px", height:"45px", borderRadius:"4px",color:"#FFFFFF", backgroundColor:"#AA0140",border:"1px solid #AA0140", marginLeft: "909px",marginTop:"133px" }} onClick={movetoFeed}>다음</button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Hilight;