import React, {useState,useEffect} from "react";
import axios from "axios";
import "./Tag.css";
var state = {
    createdAuthCode:"",
    authCodeCheck: false,
}

// function EmailConfirmPage(props)
// {
//     const[Email, setEmail] = useState("");
//     const[AuthCode, setAuthCode] = useState("");

//     const onEmailHandler = (event) => {
//         setEmail(event.currentTarget.value);
//     };

//     const onAuthCodeHandler = (event) => {
//         setAuthCode(event.currentTarget.value);
//     };

//     const onSendMailHandler = (event) => {
//         event.preventDefault();
//         state.cretedAuthCode = Math.random().toString(36).substring(2,8);

//         const dataToSubmit = {
//             email: Email,
//             auth: state.createdAuthCode,
//         };

//         var cast = {
//             "email" : Email
//         }
//         localStorage.setItem("cast",JSON.stringify(cast));

//     };
//     const onCheckHandler = (event) => {
//         event.preventDefault();

//         if(state.createdAuthCode === AuthCode){
//             state.authCodeCheck = true;
//             alert("이메일 인증에 성공하셨습니다.");
//             document.getElementById("authorizedConfirm")
//             .setAttribute("onClick", "location.href = '/register");
//         }else{
//             state.authCodeCheck = false;
//             alert("인증코드가 일치하지 않습니다.");
//         }
//     };

//     const Authentication = (event) => {
//         event.preventDefault();

//         if(!state.authCodeCheck){
//             alert("먼저 이메일 인증을 해주세요.");
//         }
//     }
// }

class Registerpage7 extends React.Component{
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



function Text(){

    const [isLoaded, setIsLoaded] = useState(false);
    const [nickname, setnickname] = useState("");
    const [email, setemail] = useState("");
    const [selected, setSelected] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    const [route, setRoute] = useState("");

    useEffect(() => {
      const code = localStorage.getItem("code");
      if(code){
        window.history.replaceState({},document.title,`/register3?code=${code}`)
      }

      setIsLoaded(true);

    },[]);



    const onnicknamehandler = (nickname) => {
        setnickname(nickname.target.value);
    }

    const onemailhandler = (email) => {
        setemail(email.target.value);
    }

    const ongenderhandler = (gender) => {
        setSelected(gender.target.value);
    }

    const onAgehandler =(age) => {
        setAge(age.target.value);
    }

    const onPhonehandler = (phone) => {
      setPhone(phone.target.value);
    }

    const onRoutehandler = (route) => {
        setRoute(route.target.value);
    }

    function activeButton(){
        alert("확인완료");
    }

        function submitactiveButton(event){
            event.preventDefault();
            alert("정보변경이 완료되었습니다.");

            var cast = {
                nickname: nickname,
                gender : selected,
                email: email,
                age : age,
                phone : phone
            };

            axios.post('http://localhost:8000/users',cast)
            .then(response =>{
                if(response.data.success)
                {
                    console.log('회원가입 성공')
                } else {
                    console.log('회원가입 실패')
                }
            })

            localStorage.setItem("cast",JSON.stringify(cast));
            window.location.href="/register5"; }
        
        const style={
            'position':'absolute',
            'font-weight': 400,
            'border-width':"1px",
            'border-style':"solid",
            'border-color':"#E5E5E5",
            'margin-left': "669px",
            'width':"588px"
        }
        const style1={
            'width':"151px",
            'height':"17px",
            'color':"#666666",
            'font-family': "Roboto",
            'font-weight': 400,
            'font-size': "16px",
            'line-height': "19px",
            'display': "flex",
            'align-items': "center",
        }
        const style2={
            'width':"240px",
            'height':"30px",
           
            'font-family': "Roboto",
            'top':"-20px",
            'font-weight': 400,
            'font-size': "16px",
            'line-height': "19px",
            'display': "flex",
            'align-items': "center",
        }
        const style3={
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
            'line-height': "18.75px",
            'color': "#FFFFFF",
            'background-color':"#AA0140",
            'margin-left':"15px",
            'margin-top':"15px"
            
        }
        const Button = () => {
            const arr = [{id: 1 }, {id: 2 }, { id: 3 },{id : 4},{id : 5},{id : 6}];
            const [pick, setPick] = useState(arr);
            const [select, setSelect] = useState([]);
          
            return pick.map((item) => (
              <div className="button_container">
                
                <button
                  key={item.id}
                  onClick={() => {
                    !select.includes(item.id)
                      ? setSelect((select) => [...select, item.id])
                      : setSelect(select.filter((button) => button !== item.id));
                  }}
                  className={
                    select.includes(item.id)
                      ? "button_table_btn_ns"
                      : "button_table_btn_s"
                  }
                  style={{width:"76px",height:"29px"}}
                >
                  선택태그
                </button>
              </div>
            ));
          };
          const Button1 = () => {
            const arr = [{id: 1 }, {id: 2 }, { id: 3 },{id : 4},{id : 5},{id : 6}];
            const [pick1, setPick1] = useState(arr);
            const [select1, setSelect1] = useState([]);
          
            return pick1.map((item) => (
              <div className="button_container">
                
                <button
                  key={item.id}
                  onClick={() => {
                    !select1.includes(item.id)
                      ? setSelect1((select1) => [...select1, item.id])
                      : setSelect1(select1.filter((button) => button !== item.id));
                  }}
                  className={
                    select1.includes(item.id)
                      ? "button_table_btn_ns"
                      : "button_table_btn_s"
                  }
                  style={{width:"76px",height:"29px"}}
                >
                  선택태그
                </button>
              </div>
            ));
          };
          const Button2 = () => {
            const arr = [{id: 1 }, {id: 2 }, { id: 3 },{id : 4},{id : 5},{id : 6}];
            const [pick2, setPick2] = useState(arr);
            const [select2, setSelect2] = useState([]);
          
            return pick2.map((item) => (
              <div className="button_container">
                
                <button
                  key={item.id}
                  onClick={() => {
                    !select2.includes(item.id)
                      ? setSelect2((select2) => [...select2, item.id])
                      : setSelect2(select2.filter((button) => button !== item.id));
                  }}
                  className={
                    select2.includes(item.id)
                      ? "button_table_btn_ns"
                      : "button_table_btn_s"
                  }
                  style={{width:"76px",height:"29px"}}
                >
                  선택태그
                </button>
              </div>
            ));
          };
          
            const [role, setRole] = useState(null);
          
            const handleRoleChange = (event) => {
              setRole(event.target.value);
            }
            const RenderForm = () => {
              if (role === 'author') {
                return (
                  <div>
                      <div style={{marginTop:"15px",marginLeft:"15px"}}>
                        <h4>작가 추가 질문</h4>
                      </div>
                      <div style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
                       유입경로*
                      </div>
                      <div style={{marginTop:"5px",marginLeft:"15px"}}>
                      <select id="firstoption" name="유입경로" value={firstoption} onChange={handleFirstOptionChange} style={{width: "248px", height: "38px"}} >
                              <option defaulValue=" "hidden>선택하세요</option>
                              <option value="커뮤니티">커뮤니티</option>
                              <option value="SNS">SNS</option>
                              <option value="주변추천">주변추천</option>
                              <option value="기타">기타</option>    
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
                                {firstoption === '주변추천' && (
                                  <>
                                    <option value="주변추천">주변추천</option>
                                  </>
                                )}
                                {firstoption === '기타' && (
                                  <>
                                    <option value="기타">기타</option>
                                  </>
                                )}
                              </select>
                            </div>
                          )}
                          </div>
                      <div style={{width:"216px",height:"19px", fontSize:"16px" ,fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
                       다른 피드백 서비스 이용경험*
                      </div>
                      <div style={{marginTop:"5px",marginLeft:"15px"}}>
                          <table>
                            <tr>
                            <input type="checkbox"></input><label>온라인 강의</label>
                            <input type="checkbox"></input><label>오프라인 강의</label>
                            <input type="checkbox"></input><label>출판사 피드백</label>
                            </tr>
                            <tr>
                            <input type="checkbox"></input><label>학원 피드백</label>
                            <input type="checkbox"></input><label>1:1 피드백</label>
                            <input type="checkbox"></input><label>없음</label>
                            </tr>
                          </table>
                      </div>
                      <div style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
                        전업 여부*
                      </div>
                      <div style={{marginTop:"5px",marginLeft:"15px"}}>
                      <select name="전업 여부" style={{width: "248px", height: "38px"}} >
                              <option defaulValue="전업">전업</option>
                              <option value="학생">학생</option>
                              <option value="직장인">직장인</option>    
                          </select> 
                      </div>
                      <div style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
                        웹소설 경력기간*
                      </div>
                      <div style={{marginTop:"5px",marginLeft:"15px"}}>
                      <select name="웹소설 경력기간" style={{width: "248px", height: "38px"}} >
                              <option defaulValue="1년 미만">1년 미만</option>
                              <option value ="1~2년">1~2년</option>
                              <option value="2~3년">2~3년</option>
                              <option value="3년이상">3년이상</option>    
                          </select> 
                      </div>
                      <div style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
                        연재해본 작품 수*
                      </div>
                      <div style={{marginTop:"5px",marginLeft:"15px"}}>
                      <select name="연재해본 작품 수" style={{width: "248px", height: "38px"}} >
                              <option defaulValue="0개">0개</option>
                              <option value ="1개">1개</option>
                              <option value="2개">2개</option>
                              <option value="3개이상">3개이상</option>    
                          </select> 
                      </div>
                      <div style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
                        연재해본 플랫폼*
                      </div>
                      <div style={{marginTop:"5px",marginLeft:"15px"}}>
                      <table>
                            <tr>
                            <input type="checkbox"></input><label>네이버시리즈</label>
                            <input type="checkbox"></input><label>카카오페이지</label>
                            <input type="checkbox"></input><label>네이버웹소설</label>
                            </tr>
                            <tr>
                            <input type="checkbox"></input><label>카카오스테이지</label>
                            <input type="checkbox"></input><label>문피아</label>
                            <input type="checkbox"></input><label>조아라</label>
                            <input type="checkbox"></input><label>기타</label>
                            </tr>
                          </table>        
                      </div>
                      <div style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
                        유료연재 경험*
                      </div>
                      <div style={{marginTop:"5px",marginLeft:"15px"}}>
                      <select name="유료연재 경험" style={{width: "248px", height: "38px"}} >
                              <option defaulValue="있다">있다</option>
                              <option value="없다">없다</option>    
                          </select> 
                      </div>
                     
                      <div style={{marginLeft:"15px",marginTop:"15px"}}>
                  <button style={style3} onClick={submitactiveButton}>다음</button>
                  </div>
                  </div>
                );
              } else if (role === 'reader') {
                return (
                  <div>
                    <div style={{marginTop:"15px",marginLeft:"15px"}}>
                        <h4>독자 추가 질문</h4>
                      </div>
                      <div style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
                       유입경로*
                      </div>
                      <div style={{marginTop:"5px",marginLeft:"15px"}}>
                      <select id="firstoption" name="유입경로" style={{width: "248px", height: "38px"}} value={firstoption} onChange={handleFirstOptionChange} >
                              <option defaulValue=" " hidden>선택하세요</option>
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
                      </div><div style={{width:"216px",height:"19px", fontSize:"16px" ,fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
             웹소설 읽는 빈도*
            </div>
            <div style={{marginTop:"5px",marginLeft:"15px"}}>
            <select name="다른 피드백 서비스 이용경험" style={{width: "248px", height: "38px"}}  >
                    <option defaulValue="자주 즐겨 읽는다">자주 즐겨 읽는다</option>
                    <option value = "가끔 읽는다">가끔 읽는다</option>
                    <option value = "거의 읽지 않는다">거의 읽지 않는다</option>
                    <option value = "읽어본 적이 없다">읽어본 적이 없다</option>    
                </select> 
            </div>
            <div style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
              이용해본 플랫폼*
            </div>
            <div style={{marginTop:"5px",marginLeft:"15px"}}>
            <table>
                            <tr>
                            <input type="checkbox"></input><label>네이버시리즈</label>
                            <input type="checkbox"></input><label>카카오페이지</label>
                            <input type="checkbox"></input><label>네이버웹소설</label>
                            </tr>
                            <tr>
                            <input type="checkbox"></input><label>카카오스테이지</label>
                            <input type="checkbox"></input><label>문피아</label>
                            <input type="checkbox"></input><label>조아라</label>
                            <input type="checkbox"></input><label>기타</label>
                            </tr>
                          </table>  
            </div> 
            <div style={{marginLeft:"15px",marginTop:"15px"}}>
                  <button style={style3} onClick={submitactiveButton}>다음</button>
                  </div>
                  </div>
                );
              } else {
                return null;
              }}
            

    /*유입경로 */
    const [firstoption, setFirstoption] = useState('');
    const [secondoption, setSecondoption]  =useState('');

    const handleFirstOptionChange = (event) => {
      setFirstoption(event.target.value);
      setSecondoption('');
    }

    const handleSecondOptionChange = (event) => {
      setSecondoption(event.target.value);
    }

    
  
            
    return(
       
    <div style={{'position':"static"}}>
         
        <div style={style}>
         &nbsp; &nbsp;회원가입
         <hr style={{'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}></hr>
        <div style={style1}>
        &nbsp; &nbsp;닉네임*
        </div>
        <div style={style2}>
        &nbsp; &nbsp;<input type="label"placeholder="플레이스 홀더" onChange={onnicknamehandler}></input>
                     
        </div><botton style={style3} onClick={activeButton}>중복확인</botton>
        
        <div style={{marginTop:"15px"}}>
        &nbsp; &nbsp;<select name="성별" style={{width:"240px",height:"30px"}} onChange={ongenderhandler}>
                  <option defaultValue="성별(남/여)" hidden>성별(남/여)*</option>
                  <option value="남">
                    남
                  </option>
                  <option value="여">
                    여
                  </option>
               </select>
            </div>
            <div style={{marginTop:"15px"}}>
        &nbsp; &nbsp;<select name="나이대" style={{width:"240px",height:"30px"}} onChange={onAgehandler}>
                    <option defaultValue="나이대" hidden>나이대*</option>
                    <option value="10대">
                        10대
                    </option>
                    <option value="20대">
                        20대
                    </option>
                    <option value="30대">
                        30대
                    </option>
                    <option value="40대이상">
                        40대이상
                    </option>
                </select>
        </div>
        <div style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
        이메일*
            </div>
            <div></div>
            <div>
            &nbsp; &nbsp;<input type="label" style={{width:"240px",height:"30px",marginTop:"5px"}} placeholder="본인인증용 이메일" onChange={onemailhandler}></input>
            </div>
            <div>
           <button style={{marginTop:"15px",marginLeft:"15px"}}>Check</button>
            </div>
            <div style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
             이메일 확인*
            </div>
            <div style={{marginTop:"5px",marginLeft:"15px"}}>
            <input type="label" style={{width:"240px",height:"30px"}} placeholder="이메일 확인"></input>
            </div>
            <div>
           <button style={{marginTop:"15px",marginLeft:"15px"}}>Check</button>
            </div>

            <div style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
             핸드폰 번호*
            </div>
            <div style={{marginTop:"5px",marginLeft:"15px"}}>
            <input type="label" style={{width:"240px",height:"30px"}} placeholder="경품지급 용도로만 사용됩니다." onChange={onPhonehandler}></input>
            </div>
        </div>
        </div>
    )
}




export default Registerpage7;