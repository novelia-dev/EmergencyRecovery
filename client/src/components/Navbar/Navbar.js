import React,{useState,onChange} from 'react';
import Novelist from '../Image/Navbar_logo.png';
import Bell from '../Image/bell.png';
import NewText from '../Image/pen.png';
import Mypage from '../Image/user.png';
import useDetectClose from './useDetectClose';
import {Drawer,Button} from 'antd';
import Image from '../Image/돋보기.png';

import './Navbar.css';

function movetomain(){
  window.location.href="/";
}

function Navbar(){

  


    const Text = ()=> {

      const [open, setOpen] = useState(false);

      const showDrawer = () => {
        setOpen(true);
      };

      const onClose = () => {
        setOpen(false)
      };
      /*const [search,setSearch] = useState("");
      const onChange=(e)=>{
        setSearch(e.target.value)
      }*/
        return(
        <div>
           <table>
           <tr>
           <td><img onClick={movetomain} className="Novelist" alt="Novelist" style={{width:"122.9px", height:"30px",marginTop:"30px",marginLeft:"225px"}}src={Novelist} /></td>
           <td><input type="text" /*value={search} onChange={onChange}*/ placeholder="  #해쉬태그로 검색해보세요" style={{width: "588px",height: "30px", marginTop:"30px",marginLeft:"318.1px",backgroundColor:'#FFFFFF',borderRadius:"50px",}}></input></td>
           <td><img className="Image" alt="Image" style={{width:"30.31px", height:"30px",marginLeft:"-48px",marginTop:"28px"}}src={Image} /></td>
           <td>
            <img className="Bell" alt="Bell" style={{width:"18px", height:"25px",marginTop:"30px",marginLeft:"324px"}}src={Bell} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img className="NewText" alt="NewText" style={{width:"24px", height:"23px"}}src={NewText}/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
            <img className="header" alt="Mypage" style={{width:"24px", height:"23px"}}src={Mypage}></img>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button style={{width:"24px" , height:"24px"}} className="menu_button" type="primary" onClick={showDrawer}>

            </Button>
            <Drawer 
              title="Basic Drawer"
              placement = "right"
              className = "menu_drawer"
              closable={false}
              onClose={onClose}
              open={open}
            >
              <h5>Hello world!</h5>
            </Drawer>
           </td>
           </tr>
           </table>
            
              <br/><br/>
          
        </div>
        )}
   
        return(
            <div>
                <Text />
                <Button1/>
            </div>
        )
    
}


//npm install styled-component 해야됨
 function Button1() {
    let data=["전체작품","객관식작","주관식작","선호태그","선호태그","선호태그","선호태그","선호태그","선호태그","선호태그","선호태그","선호태그","선호태그"];
    let[btnActive, setBtnActive] = useState("");
    const toggleActive = (e) => {
        setBtnActive((prev) => {
          return e.target.value;
        });
      };
   

       
        return(
            <div style={{margintop:"113px",marginLeft:"389px"}}>
                 <table>
        {data.map((item, idx) => {
        return (
          <>
            <button
              value={idx}
              className={"Btn" + (idx == btnActive ? " active" : "")}
              onClick={toggleActive}
            >
              {item}
            </button>
          </>
        );
      })}
                 </table>
    
            </div>
    
        ) 
}

 




export default Navbar;