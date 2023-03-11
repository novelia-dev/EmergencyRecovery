import React,{useState} from 'react'

function success(){
    alert('회원가입이 완료되었습니다.');
}

function Button(){
    //선호장르
    let data=["선호장르","선호장르","선호장르","선호장르","선호장르","선호장르"];
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
    let adddata = ["선호태그","선호태그","선호태그","선호태그","선호태그","선호태그"];
    let [tag3Active, setTag3Active] = useState("");
    const toggleaddActive = (tag) =>{
      setTag3Active((prev) => {
        return tag.target.value;
      })
    }

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

    let data7=["선호태그","선호태그","선호태그","선호태그","선호태그","선호태그"];
    let[forb3Active, setForb3Active] = useState("");
    const toggleActive7 = (forb) => {
        setForb3Active((prev) => {
          return forb.target.value;
        });
      };
    
    return(
        <div>
        <div>
                <h5 style={{width:"59px",height:"19px"}}>선호장르</h5>
            </div>
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
            <div>
                <hr />
                <h5>선호태그</h5>
            </div>
            <div>
            <table>
    <tr>
        {data1.map((item, idx) => {
        return (
          <>
            <button
              value={idx}
              className={"Btn" + (idx == tagActive ? " active" : "")}
              onClick={toggleActive1}
            >
              {item}
            </button>
          </>
        );
      })}</tr>
      <tr>
        {data2.map((item, idx) => {
        return (
          <>
            <button
              value={idx}
              className={"Btn" + (idx == tag1Active ? " active" : "")}
              onClick={toggleActive2}
            >
              {item}
            </button>
          </>
        );
      })}
      </tr> 
      <tr>
      {data3.map((item, idx) => {
        return (
          <>
            <button
              value={idx}
              className={"Btn" + (idx == tag2Active ? " active" : "")}
              onClick={toggleActive3}
            >
              {item}
            </button>
          </>
        );
      })}

      </tr>
      <tr>
      {adddata.map((item, idx) => {
        return (
          <>
            <button
              value={idx}
              className={"Btn" + (idx == tag3Active ? " active" : "")}
              onClick={toggleaddActive}
            >
              {item}
            </button>
          </>
        );
      })}

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
        {data4.map((item, idx) => {
        return (
          <>
            <button
              value={idx}
              className={"Btn" + (idx == forbActive ? " active" : "")}
              onClick={toggleActive4}
            >
              {item}
            </button>
          </>
        );
      })}
        </tr>
        <tr>
        {data5.map((item, idx) => {
        return (
          <>
            <button
              value={idx}
              className={"Btn" + (idx == forb1Active ? " active" : "")}
              onClick={toggleActive5}
            >
              {item}
            </button>
          </>
        );
      })}
        </tr>
      <tr>
      {data6.map((item, idx) => {
        return (
          <>
            <button
              value={idx}
              className={"Btn" + (idx == forb2Active ? " active" : "")}
              onClick={toggleActive6}
            >
              {item}
            </button>
          </>
        );
      })}
      </tr>
      <tr>
      {data7.map((item, idx) => {
        return (
          <>
            <button
              value={idx}
              className={"Btn" + (idx == forb3Active ? " active" : "")}
              onClick={toggleActive7}
            >
              {item}
            </button>
          </>
        );
      })}
      </tr>
    </table>
            </div>
            </div>
    )
}



function MobileRegisterPage2(){
    return(
        <div>
            <hr />
            <div>
            
            </div>
            <hr />
            <div>
              <h5>닉네임</h5><input type="text" placeholder="플레이스 홀더"/> <button>중복확인</button>
            </div>
            <br />
            <div>
                <select className="성별" style={{width:"280px"}}>
                    <option value="none" default disabled hidden>성별(남/여)</option>
                    <option value="남">남</option>
                    <option value="여">여</option>
                </select>
            </div>
            <br />
            <div>
                <select className="나이" style={{width:"280px"}}>
                    <option value="none" default disabled hidden>나이대</option>
                    <option value="10대">10대</option>
                    <option value="20대">20대</option>
                    <option value="30대">30대</option>
                    <option value="40대">40대</option>
                    <option value="50대 이상">50대 이상</option>
                </select>
            </div>
            <br />
            <hr />
            <div>
                <h5>이메일</h5><input type="email" style={{width:"280px"}} placeholder="본인인증용 이메일"/> 
            </div>
            <br />
            <div>
                <h5>핸드폰번호*</h5><input type="text" style={{width:"280px"}} placeholder="경품지급 용도로만 사용됩니다." />
            </div>
            <br />
            <div>
                <select className="회원" style={{width:"280px"}}>
                    <option value="작가" default>작가*</option>
                    <option value="독자">독자*</option>
                </select>
            </div>
            <br />
            <hr />
            <div className="작가">
            <div>
              <h5>작가 추가 질문</h5>
            </div>
            <div>
                <h5>유입경로*</h5>
                <select className="유입경로" style={{width:"280px"}}>
                    <option value="이메일" default>이메일</option>
                </select>
            </div>
            <br />
            <div>
              <h5>다른 피드백 서비스 이용경험*</h5>
                <select className="이용경험" style={{width:"280px"}}>
                    <option value="없음" default>경험없음</option>
                </select>
            </div>
            <br />
            <div>
              <h5>전업여부*</h5>
                <select className="전업여부" style={{width:"280px"}}>
                    <option value="직장인(부업)" default>직장인(부업)</option>
                </select>
            </div>
            <br />
            <div>
              <h5>웹소설 집필기간*</h5>
                <select className="집필기간" style={{width:"280px"}}>
                    <option value="1년 미만" default>1년 미만</option>
                </select>
            </div>
            <div>
                <h5>연재작품 수*</h5>
                <select className="연재작품 수" style={{width:"280px"}}>
                    <option value="0개" default>0개</option>
                </select>
            </div>
            <div>
               <h5>연재 플랫폼*</h5>
                <select className="연재 플랫폼" style={{width:"280px"}}>
                    <option value="네이버 시리즈" default>네이버 시리즈</option>
                </select>
            </div>
            <br />
            <div>
              <h5>유료연재 경험*</h5>
                <select className="유료연재 경험" style={{width:"280px"}}>
                    <option value="아니오" default>아니오</option>
                    <option value="예">예</option>
                </select>
            </div>
            </div>
            <br />
            <hr />
            <div>
                <Button />
            </div>
            <hr />

            <button onClick={success}>입력완료</button>
            <hr />
        </div>
    )
}

export default MobileRegisterPage2;