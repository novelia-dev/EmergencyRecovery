import React,{useState} from 'react';
import MobileNavbar from "../../Navbar/MobileNavbar";
import MobileFooter from "../../Footer/MobileFooter";
import User from "../../Image/모바일유저.png"
function Button(){
    //선호장르
    let data=["선호장르","선호장르","선호장르"];
    let[btnActive, setBtnActive] = useState("");
    const toggleActive = (btn) => {
        setBtnActive((prev) => {
          return btn.target.value;
        });
      };
    //선호태그
    let data1=["선호태그","선호태그","선호태그","선호태그","선호태그","선호태그"];
    let[tagActive, setTagActive] = useState("");
    const toggleActive1 = (tag) => {
        setTagActive((prev) => {
          return tag.target.value;
        });
      };
    let data2=["선호태그","선호태그","선호태그","선호태그","선호태그","선호태그"];
    let[tag1Active, setTag1Active] = useState("");
    const toggleActive2 = (tag) => {
          setTag1Active((prev) => {
            return tag.target.value;
          });
        };
    let data3=["선호태그","선호태그","선호태그","선호태그","선호태그","선호태그"];
    let[tag2Active, setTag2Active] = useState("");
    const toggleActive3 = (tag) => {
        setTag2Active((prev) => {
          return tag.target.value;
        });
      };

    //금지태그
    let data4=["선호태그","선호태그","선호태그","선호태그","선호태그","선호태그"];
    let[forbActive, setForbActive] = useState("");
    const toggleActive4 = (forb) => {
        setForbActive((prev) => {
          return forb.target.value;
        });
      };
    
    let data5=["선호태그","선호태그","선호태그","선호태그","선호태그","선호태그"];
    let[forb1Active, setForb1Active] = useState("");
    const toggleActive5 = (forb) => {
          setForb1Active((prev) => {
            return forb.target.value;
          });
        };
    let data6=["선호태그","선호태그","선호태그","선호태그","선호태그","선호태그"];
    let[forb2Active, setForb2Active] = useState("");
    const toggleActive6 = (forb) => {
        setForb2Active((prev) => {
          return forb.target.value;
        });
      };

    return(
        <div>
        <div>
                <h5 style={{width:"59px",height:"19px"}}>선호장르</h5>
            </div>
        <table>
        <div style={{display:'flex', flexWrap:'wrap'}}>
        {data.map((item, idx) => {
        return (
          <div style={{boxSizing:'border-box', padding: '-100px'}}>
            <button
              value={idx}
              className={"Btn" + (idx == btnActive ? " active" : "")}
              onClick={toggleActive}
            >
              {item}
            </button>
          </div>
        );
      })}
      </div>
         </table>
            <div>
                <hr />
                <h5>선호태그</h5>
            </div>
            <div>
            <table>
    <tr>
      <div style={{display:'flex', flexWrap:'wrap'}}>
        {data1.map((item, idx) => {
        return (
          <div style={{width:'25.2%', boxSizing:'border-box'}}>
            <button
              value={idx}
              className={"Btn" + (idx == tagActive ? " active" : "")}
              onClick={toggleActive1}
            >
              {item}
            </button>
          </div>
        );
      })}</div></tr>
      <tr>
      <div style={{display:'flex', flexWrap:'wrap'}}>
        {data2.map((item, idx) => {
        return (
          <div style={{width:'25.2%', boxSizing:'border-box'}}>
            <button
              value={idx}
              className={"Btn" + (idx == tag1Active ? " active" : "")}
              onClick={toggleActive2}
            >
              {item}
            </button>
          </div>
        );
      })}
      </div>
      </tr> 
      <tr>
      <div style={{display:'flex', flexWrap:'wrap'}}>
      {data3.map((item, idx) => {
        return (
          <div style={{width:'25.2%', boxSizing:'border-box'}}>
            <button
              value={idx}
              className={"Btn" + (idx == tag2Active ? " active" : "")}
              onClick={toggleActive3}
            >
              {item}
            </button>
          </div>
        );
      })}
      </div>
      </tr>
            </table>
            </div>
            <div>
                <hr />
                <h5>금지태그</h5>
            </div>
            <div>
            <table>
        <tr>
        <div style={{display:'flex', flexWrap:'wrap'}}>
        {data4.map((item, idx) => {
        return (
          <div style={{width:'25.2%', boxSizing:'border-box'}}>
            <button
              value={idx}
              className={"Btn" + (idx == forbActive ? " active" : "")}
              onClick={toggleActive4}
            >
              {item}
            </button>
          </div>
        );
      })}
      </div>
        </tr>
        <tr>
        <div style={{display:'flex', flexWrap:'wrap'}}>
        {data5.map((item, idx) => {
        return (
          <div style={{width:'25.2%', boxSizing:'border-box'}}>
            <button
              value={idx}
              className={"Btn" + (idx == forb1Active ? " active" : "")}
              onClick={toggleActive5}
            >
              {item}
            </button>
          </div>
        );
      })}
      </div>
        </tr>
      <tr>
      <div style={{display:'flex', flexWrap:'wrap'}}>
      {data6.map((item, idx) => {
        return (
          <div style={{width:'25.2%', boxSizing:'border-box'}}>
            <button
              value={idx}
              className={"Btn" + (idx == forb2Active ? " active" : "")}
              onClick={toggleActive6}
            >
              {item}
            </button>
          </div>
        );
      })}
      </div>
      </tr>
    </table>
            </div>
            </div>
    )
}




function MobileMypageInfo(){
    return(
      <div style={{position: "relative", height: "calc(100vh - 50px)",borderWidth:"1px",'border-style':"solid",'border-color':"#EEEEEE",width:"360px"}}>
          
      <MobileNavbar  style={{position: "fixed", top: 0, left: 0, right: 0, zIndex: 1}} />
      <div style={{ width:"33hpx",height: "calc(100% - 275px)", overflowX: 'hidden',overflowY: "scroll"}}>
              <div style={{marginLeft:"15px"}}>
              <div style={{marginLeft:"15px",marginTop:"10px"}}>MY
                <button style={{marginLeft:"200px",backgroundColor:"white",border:"1px solid #AA0140",borderRadius: "3px"}}>변경하기</button>
                </div>
                <hr style={{borderWidth:"1px",'border-style':"solid",'border-color':"#848484",width:"305px"}}/>
          
                  
               

            <div>
                <img src={User} style={{float:"left"}}></img>
                <div style={{marginLeft:"10px",fontSize:"12px",fontWeight:"400",lineHeight:"12px"}}>
                  <div  style={{marginLeft:"10px"}}>기본정보</div>
                  <hr/>
                  <div style={{marginTop:"10px"}}>닉네임
                  </div>
                  <div style={{marginTop:"10px"}}>
                    성별 : 남자 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;나이대 : 
                  </div>
                  <div style={{marginTop:"10px"}}>이메일:</div>
                  <div style={{marginTop:"10px"}}>핸드폰 번호 : </div>
                </div>
            </div>
            <hr style={{borderWidth:"1px",'border-style':"solid",'border-color':"#848484",width:"305px"}}/>
            <hr style={{marginTop:"20px",borderWidth:"1px",'border-style':"solid",'border-color':"#848484",width:"285px"}}/>
     
            <div>
                <Button />
            </div>
              </div>
                
            
            </div>
          
            <MobileFooter style={{position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1}} />
        </div>
    )
}

export default MobileMypageInfo;