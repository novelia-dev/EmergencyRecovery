import React from "react";
import image1 from "../Image/Group 1722.png";
import image2 from "../Image/Group 1723.png";
import image3 from "../Image/Group 1724.png";



function FeedSelect(){

    var num = 0;

    const handleChange =(e) => {
        num = 1;
    }

    function moveto(){
        if(num === 1)
        {
            window.location.href = "/choosekeyword";
        }
    }

    return(
        <div>
            <div>
                <div  style={{'width':"1200px",'marginLeft':"360px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>
                <h4 style={{marginLeft:"15px"}}>피드백 종류 선택</h4>
                <h5 style={{marginLeft:"15px"}}>독자들에게 요청할 피드백의 종류를 선택해주세요!</h5>
                </div>
            <div style={{'marginLeft':"360px"}}>
                <div>
                    <b style={{marginLeft:"165px",fontSize:"19px"}}>객관식</b>
                    <b style={{marginLeft:"360px",fontSize:"19px"}}>주관식</b> 
                    <b style={{marginLeft:"360px",fontSize:"19px"}}>1+1</b>
                </div>
                <div>
                <img src = {image1} style ={{'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}  alt="객관식"/>
                <img src = {image2} style ={{'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",marginLeft:"22px"}}  alt="주관식"/>
                <img src = {image3} style ={{'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",marginLeft:"22px"}} alt="1+1"/>
                </div>
                <div style={{float:"left",marginLeft:"15px"}}>
                <h5>가격: 3만원</h5>
                <h5>게시기간: 7일</h5>
                <h5>내용: 독자 30명에게 받는 최대 40가지 객관식 피드백</h5>
                <input type="checkbox" onClick={handleChange} style={{width:"30px",height:"30px",marginLeft:"177px"}}/>
                </div>
                <div style={{float:"left",marginLeft:"90px"}} >
                <h5>가격: 3만원</h5>
                <h5>게시기간: 7일</h5>
                <h5>내용: 독자 30명에게 받는 최대 40가지 객관식 피드백</h5>
                <input type="checkbox" onClick={handleChange} style={{width:"30px",height:"30px",marginLeft:"178px"}} />
                </div>
                <div style={{marginLeft:"830px"}}>
                <h5>가격: 5.5만원</h5>
                <h5>게시기간: 14일</h5>
                <h5>내용: 앞의 2가지 상품을 할인된 가격에 제공</h5>
                <input type="checkbox" style={{width:"30px",height:"30px",marginLeft:"178px"}} /> 
                </div>
                <div>
                <h5>*결제는 게시기간이 끝난 뒤 작가 피드백을 열람하려고 할 때 진행됩니다. </h5>
                </div>
                <button style={{width: "102px", height:"45px", borderRadius:"4px",color:"#FFFFFF", backgroundColor:"#AA0140",border:"1px solid #AA0140", marginLeft: "549px" }} onClick={moveto}>다음</button>
                <table style={{}}>
                   
                    <tr>
                        <td>
                          
                        </td>
                        <td>
                          
                        </td>
                        <td>
                           
                        </td>
                    </tr>
                    <tr>
                        
                    </tr>
                    
                </table>
            </div>
        </div>
        </div>
    )
}

export default FeedSelect;