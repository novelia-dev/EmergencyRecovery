import React,{useState} from 'react'
import axios from 'axios';

function MobileRegisterPage2(){

  function success(){

    var nest = {
      nickname: nickname,
      gender: selected,
      email: email,
      age: age
    };

    axios.post('http://localhost:8000/users',nest)
    .then(response => {
      if(response.data.success)
      {
        console.log('회원가입 성공')
      } else {
        console.log('회원가입 실패')
      }
    })

    localStorage.setItem("nest",JSON.stringify(nest));
    window.location.href="/mobileregister3";
}


  const [isLoaded, setIsLoaded] = useState(false);
  const [role, setRole] = useState(null);
  const [nickname, setnickname] = useState("");
  const [email, setemail] = useState("");
  const [selected, setSelected] =useState("");
  const [age, setAge] = useState("");
  const [route, setRoute] = useState("");
  const [firstoption, setFirstoption] = useState('');
  const [secondoption, setSecondoption] = useState('');

  const handleFirstOptionChange = (event) => {
    setFirstoption(event.target.value);
    setSecondoption('');
  }

  const handleSecondOptionChange = (event) => {
    setSecondoption(event.target.value);
  }

  const onnicknamehandler = (nickname) => {
    setnickname(nickname.target.value);
  }

  const onemailhandler = (email) => {
    setemail(email.target.value);
  }

  const ongenderhandler = (gender) => {
    setSelected(gender.target.value);
  }

  const onAgehandler = (age) => {
    setAge(age.target.value);
  }


    const handleRoleChange = (event) => {
      setRole(event.target.value);
    }

    const RenderForm = () => {
      if(role === 'author'){
        return(
          <div>
            <div>
              <h5>작가 추가 질문</h5>
            </div>
            <div>
                <h5>유입경로*</h5>
                <div style={{marginTop:"5px",marginLeft:"15px"}}>
                      <select id="firstoption" name="유입경로" value={firstoption} onChange={handleFirstOptionChange} style={{width: "248px", height: "38px"}} >
                              <option defaulValue=" "hidden>선택하세요</option>
                              <option value="커뮤니티">커뮤니티</option>
                              <option value="SNS">SNS</option>
                              <option value="지인소개">지인소개</option>    
                          </select>
                          {firstoption && (
                            <div>
                              <select id="secondoption" name="세부 유입경로" style={{width:"248px", height:"38px"}} value={secondoption} onChange={handleSecondOptionChange}>
                                <option defaultvalue="" hidden>선택하세요</option>
                                {firstoption === '커뮤니티' &&(
                                    <>
                                      <option value="에브리타임">에브리타임</option>
                                      <option value="카페">카페</option>
                                    </>
                                )}
                                {firstoption === 'SNS'&&(
                                    <>
                                      <option value="인스타">인스타</option>
                                      <option value="페이스북">페이스북</option>
                                      <option value="트위터">트위터</option>
                                    </>
                                )}
                                {firstoption === '지인소개' && (
                                  <>
                                    <option value="지인소개">지인소개</option>
                                  </>
                                )}
                              </select>
                            </div>
                          )}
                          </div>
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
            <br />
           
            <button onClick={success}>입력완료</button>
          
            </div>
        );
      } else if(role === 'reader'){
        return(
          <div>
            <h5>독자 추가 질문</h5>
            <div>
                <h5>유입경로*</h5>
                <div style={{marginTop:"5px",marginLeft:"15px"}}>
                      <select id="firstoption" name="유입경로" value={firstoption} onChange={handleFirstOptionChange} style={{width: "248px", height: "38px"}} >
                              <option defaulValue=" "hidden>선택하세요</option>
                              <option value="커뮤니티">커뮤니티</option>
                              <option value="SNS">SNS</option>
                              <option value="지인소개">지인소개</option>    
                          </select>
                          {firstoption && (
                            <div>
                              <select id="secondoption" name="세부 유입경로" style={{width:"248px", height:"38px"}} value={secondoption} onChange={handleSecondOptionChange}>
                                <option defaultvalue="" hidden>선택하세요</option>
                                {firstoption === '커뮤니티' &&(
                                    <>
                                      <option value="에브리타임">에브리타임</option>
                                      <option value="카페">카페</option>
                                    </>
                                )}
                                {firstoption === 'SNS'&&(
                                    <>
                                      <option value="인스타">인스타</option>
                                      <option value="페이스북">페이스북</option>
                                      <option value="트위터">트위터</option>
                                    </>
                                )}
                                {firstoption === '지인소개' && (
                                  <>
                                    <option value="지인소개">지인소개</option>
                                  </>
                                )}
                              </select>
                            </div>
                          )}
                          </div>
            </div>
            <br />
            <div>
              <h5>웹소설 이용경험*</h5>
                <select className="이용경험" style={{width:"280px"}}>
                    <option value="자주 읽는다" default>자주 읽는다</option>
                </select>
            </div>
            <br />
            <div>
               <h5>이용 플랫폼*</h5>
                <select className="이용 플랫폼" style={{width:"280px"}}>
                    <option value="네이버 시리즈" default>네이버 시리즈</option>
                </select>
            </div>
            <br />
            <button onClick={success}>입력완료</button>
          </div>
        );
      } else {
        return null;
      }
    }
    
    return(
        <div>
            <hr />
            <div>
            
            </div>
            <hr />
            <div>
              <h5>닉네임</h5><input type="text" onChange={onnicknamehandler} placeholder="플레이스 홀더"/> <button>중복확인</button>
            </div>
            <br />
            <div>
                <select className="성별" style={{width:"280px"}} onChange={ongenderhandler}>
                    <option value="none" default hidden>성별(남/여)</option>
                    <option value="남">남</option>
                    <option value="여">여</option>
                </select>
            </div>
            <br />
            <div>
                <select className="나이" style={{width:"280px"}} onChange={onAgehandler}>
                    <option value="none" default hidden>나이대</option>
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
                <h5>이메일</h5><input type="email" onChange={onemailhandler} style={{width:"280px"}} placeholder="본인인증용 이메일"/> 
            </div>
            <br />
            <div>
                <h5>핸드폰번호*</h5><input type="text" style={{width:"280px"}} placeholder="경품지급 용도로만 사용됩니다." />
            </div>
            <br />
            <div>
                <select name="role" onChange={handleRoleChange} style={{width:"280px"}}>
                    <option value="" default>선택하세요</option>
                    <option value="author">작가*</option>
                    <option value="reader">독자*</option>
                </select>
                <RenderForm />
            </div>
            
        </div>
    )
}

export default MobileRegisterPage2;