import React from 'react';
import main from '../Image/image 1.png';
import Navbar from '../Navbar/SimpleNavbar';

function jsonnickname(){
    let json = JSON.parse(localStorage.getItem("cast"));
    let txt = json.nickname;
    return txt;
}

function jsonemail(){
    let json = JSON.parse(localStorage.getItem("cast"));
    let txt = json.email;
    return txt;
}

function jsongender(){
    let json = JSON.parse(localStorage.getItem("cast"));
    let txt = json.gender;
    return txt;
}

function jsonage(){
    let json = JSON.parse(localStorage.getItem("cast"));
    let txt = json.age;
    return txt;
}

class Register5 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Text />
            </div>
        )
    }
}



class Text extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const style={
           
            'margin-top':'15px',
            'margin-left':'15px',
            'font-family':'Roboto',
            'font-weight':700,
            'font-size':'19px',
            'color':'#000000',
            'display':'flex',
            'align-items':'center',
            
        }
        const style1={
            'position':'absolute',           
            'font-family':'Roboto',
            'font-weight':400,
            'font-size':'16px',
            'line-height':'19px',
            'color':'#000000',
            'display':'flex',
            'align-items':'center',
            'margin-left':"15px",
            'margin-bottom':"13px"
        }
        const style2={
            'position':'absolute',
            'width':'100px',
            'height':'100px',
            'margin-top':'250px',
            'margin-left':'360px',
        }
        const style3={
            'position':'absolute',
            'width':'Hug',
            'height':'Hug',
            'margin-top':'200px',
            'margin-left':'360px',
            'display':'flex',
            'flex-direction':'row',
            'justify-content':'center',
            'align-items':'center',
            'padding':'13px 36px',
            'gap': '10px',
            'border':'1px solid #AA0140',
            'border-radius':'4px',
            'background-color':'#FFFFFF',
        }

        const style4={
            'position':'absolute',
            'width':'230px',
            'height':'22px',
            'margin-left':'360px',
            'margin-top':'591px',
            'font-family':'Roboto',
            'font-style':'normal',
            'font-weight':400,
            'font-size':'19px',
            'line-height':'22px',
            'display':'flex',
            'align-items':'center',
            'color':'#000000',
        }
        const style5={
     
            'width':'225px',
            'height':'19px',
            'margin-left':"15px",
            'font-family':'Roboto',
            'font-weight':700,
            'font-size':'19px',
            'line-height':'22.27px',
            'color':'#000000',
            'display':'flex',
            'align-items':'center',
        }
const style6={
    'box-sizing':"boreder-box",
    'display': "flex",
    'justify-content':"center",
    'align-items': "center",
    'gap':"10px",
    'width':"131px",
    'height':"45px",
    
    'borderRadius': "4px",
    'font-family': "Roboto",
    'font-weight': 400,
    'font-size': "16px",
    'color':"#000000",
    'line-height': "18.75px",
    'float':"left",
    'border-width':"1px",
    'border-style':"solid",
    'border-color':"#AA0140",
    'margin-top':"209px",
    'margin-left':"50px"
   }
        return(
<div>
    <Navbar />
   <div style={{'border-width':"2px",'border-style':"solid",'border-color':"#E5E5E5",'width':"1200px",'height':"1100px",'alignContent':"left",'marginLeft':"360px"}}>
            <div style={style}>기본정보 및 선호/금지태그</div>
            <div style={{'margin-left':"15px",'marginTop':"15px"}}>기본정보와 선호/금지태그 입니다.</div>
              
            <hr style={{'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}></hr>
            <div>
            <div><img src={main} style={{ width:"282px", height:"282px",float:"left",marginLeft:"15px"}} alt="개인정보" />
              <button style={style6}>변경하기</button>
              </div>
            </div>
            <br></br>       
    <hr style={{'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",marginTop:"282px"}}></hr>
    <hr style={{'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",marginTop:"120px"}}></hr>
    <table>
            <tr><h5>기본정보</h5></tr>
            <tr>닉네임 : {jsonnickname()}</tr>
            <br></br>
            <tr>성별 : {jsongender()}</tr>
            <br></br>
            <tr>나이대 {jsonage()}</tr>
            <br></br>
            <tr>이메일 : {jsonemail()}</tr>
            <br></br>
            <tr>핸드폰번호 : </tr>
    </table>
    <h5 style={style5}>선호태그</h5>
    <table style={{marginLeft:"15px"}}>    

        <tr>
            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        </tr>
        <tr>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        </tr>
    </table>
    <h5 style={style5}>금지태그</h5>
    <table style={{marginLeft:"15px"}}> 
        <tr>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        </tr>
        <tr>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
        width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
        </tr>
    </table>
    </div>
</div>
        )
    
    }
}
export default Register5;