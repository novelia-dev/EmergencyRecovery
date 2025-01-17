import React,{useState,onChange} from 'react';
import Novelist from '../Image/Navbar_logo.png';

import NewText from '../Image/pen.png';
import Image from '../Image/돋보기.png';
import Mypage from '../Dropdown/Ad';
import Bell from '../Dropdown/Bell';


import './Navbar.css';

function movetomain(){
  window.location.href="/";
}
function movetotext(){
  window.location.href="/text";
}
function Navbar(){

    const Text = ()=> {

      /*const [search,setSearch] = useState("");
      const onChange=(e)=>{
        setSearch(e.target.value)
      }*/
        return(
        <div>
           <div style={{ display: 'flex', alignItems: 'center' }}>
             <img onClick={movetomain} className="Novelist" alt="Novelist" style={{ width: "122.9px", height: "30px", marginTop: "30px", marginLeft: "225px" }} src={Novelist} />
            
             
             <div style={{marginLeft:"900px"}}>
             <Bell />
             <Mypage />
             <div><img onClick={movetotext} className="NewText" alt="NewText" style={{ width: "24px", height: "23px",marginLeft:"381px",marginTop:"-26px",position:"absolute"}} src={NewText} /></div>
             
             </div>
            
        </div>
        </div>
        )}
   
        return(
            <div>
              <div style={{backgroundColor:"#EEEEEE",height:"90px"}}> <Text /></div>
               
                <br/>
                <Button1/>
                <br/>
            </div>
        )
    
}


//npm install styled-component 해야됨
 function Button1() {
    let data=["홈","객관식","주관식","판타지","로맨스","로판"];
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