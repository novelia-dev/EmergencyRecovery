import React,{useState} from 'react';
import axios from 'axios';

function AuthorSurvey(){

    const [firstoption, setFirstoption] = useState('');
    const [secondoption, setSecondoption]  =useState('');
    const [other,setOther] = useState([]); // 다른 피드백 이용 경험 
    const [fulltime,setFulltime] = useState("") // 전업 여부
    const [career,setCareer] = useState("") // 경력기간
    const [num, setNum] = useState("") //연재 작품 수
    const [platform, setPlatform] = useState([]) // 작가 : 연재해본 플랫폼 , 독자 : 이용해본 플랫폼
    const [money,setMoney] = useState("") // 작가 : 유료 연재 경험

    const handleFirstOptionChange = (event) => {
      setFirstoption(event.target.value);
      setSecondoption('');
    }

    const handleSecondOptionChange = (event) => {
      setSecondoption(event.target.value);
    }

    const onOtherhandler = (other) => {
        const {name} = other.target;
        setOther(prevState => {
         if(prevState.includes(name)){
           return prevState.filter(item => item !== name);
         } else {
           return [...prevState,name];
         }
        })
     }

     const onFulltimehandler = (fulltime) => {
        setFulltime(fulltime.target.value);
      }

      const onCareerhandler = (career) => {
        setCareer(career.target.value);
      }

      
    const onNumhandler = (num) => {
        setNum(num.target.value);
      }
      

    function move(){
        alert('참여해주셔서 감사합니다.');

        const dataset = JSON.parse(localStorage.getItem('cast'));
        const nickname = dataset.nickname;
        const gender = dataset.gender;
        const email = dataset.email;
        const age = dataset.age;
        const phone = dataset.phone;
        const role = dataset.role;

        const data = {
          name: nickname,
          sex: gender,
          ages : age,
          email : email,
          phone: phone,
          main_role: role,
          route: '인스타그램',
          other_feedback: '??',
          is_fulltime_job: fulltime,
          time_for_writer: career,
          novel_writed: num,
          platform: platform,
          money: money,
          frequency: '작가입니다.'
        };

        axios.post('http://localhost:8000/profiles/new',data)
        .then(response=>console.log(response))
        .catch(error=>console.log(error));


        window.location.href="/register5";
    }

    const onPlatformhandler = (platform) => {
        const {name} = platform.target;
        setPlatform(prevState => {
         if(prevState.includes(name)){
           return prevState.filter(item => item !== name);
         } else {
           return [...prevState,name];
         }
        })
      }

      const onMoneyhandler = (money) => {
        setMoney(money.target.value);
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
    return(
        <div>
             <div style={{marginTop:"15px",marginLeft:"15px"}}>
                        <h4>작가 추가 질문</h4>
                      </div>
                      <div style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
                       유입경로
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
                       다른 피드백 서비스 이용경험
                      </div>
                      <div style={{marginTop:"5px",marginLeft:"15px"}}>
                          <table>
                            <tr>
                            <input type="checkbox" name="item1"checked={other.includes('item1')} onChange={onOtherhandler}></input><label>온라인 강의</label>
                            <input type="checkbox" name="item2"checked={other.includes('item2')} onChange={onOtherhandler}></input><label>오프라인 강의</label>
                            <input type="checkbox" name="item3"checked={other.includes('item3')} onChange={onOtherhandler}></input><label>출판사 피드백</label>
                            </tr>
                            <tr>
                            <input type="checkbox" name="item4"checked={other.includes('item4')} onChange={onOtherhandler}></input><label>학원 피드백</label>
                            <input type="checkbox" name="item5"checked={other.includes('item5')} onChange={onOtherhandler}></input><label>1:1 피드백</label>
                            <input type="checkbox" name="item6"checked={other.includes('item6')} onChange={onOtherhandler}></input><label>없음</label>
                            </tr>
                          </table>
                      </div>
                      <div style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
                        전업 여부
                      </div>
                      <div style={{marginTop:"5px",marginLeft:"15px"}}>
                      <select name="전업 여부" style={{width: "248px", height: "38px"}} onChange={onFulltimehandler} >
                              <option defaulValue="전업">전업</option>
                              <option value="학생">학생</option>
                              <option value="직장인">직장인</option>    
                          </select> 
                      </div>
                      <div style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
                        웹소설 경력기간
                      </div>
                      <div style={{marginTop:"5px",marginLeft:"15px"}}>
                      <select name="웹소설 경력기간" style={{width: "248px", height: "38px"}} onChange={onCareerhandler} >
                              <option defaulValue="1년 미만">1년 미만</option>
                              <option value ="1~2년">1~2년</option>
                              <option value="2~3년">2~3년</option>
                              <option value="3년이상">3년이상</option>    
                          </select> 
                      </div>
                      <div style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
                        연재해본 작품 수
                      </div>
                      <div style={{marginTop:"5px",marginLeft:"15px"}}>
                      <select name="연재해본 작품 수" style={{width: "248px", height: "38px"}} onChange={onNumhandler} >
                              <option defaulValue="0개">0개</option>
                              <option value ="1개">1개</option>
                              <option value="2개">2개</option>
                              <option value="3개이상">3개이상</option>    
                          </select> 
                      </div>
                      <div style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
                        연재해본 플랫폼
                      </div>
                      <div style={{marginTop:"5px",marginLeft:"15px"}}>
                      <table>
                            <tr>
                            <input type="checkbox" name="item7"checked={platform.includes('item7')} onChange={onPlatformhandler}></input><label>네이버시리즈</label>
                            <input type="checkbox" name="item8"checked={platform.includes('item8')} onChange={onPlatformhandler}></input><label>카카오페이지</label>
                            <input type="checkbox" name="item9"checked={platform.includes('item9')} onChange={onPlatformhandler}></input><label>네이버웹소설</label>
                            </tr>
                            <tr>
                            <input type="checkbox" name="item10"checked={platform.includes('item10')} onChange={onPlatformhandler}></input><label>카카오스테이지</label>
                            <input type="checkbox" name="item11"checked={platform.includes('item11')} onChange={onPlatformhandler}></input><label>문피아</label>
                            <input type="checkbox" name="item12"checked={platform.includes('item12')} onChange={onPlatformhandler}></input><label>조아라</label>
                            <input type="checkbox" name="item13"checked={platform.includes('item13')} onChange={onPlatformhandler}></input><label>기타</label>
                            </tr>
                          </table>        
                      </div>
                      <div style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
                        유료연재 경험
                      </div>
                      <div style={{marginTop:"5px",marginLeft:"15px"}}>
                      <select name="유료연재 경험" style={{width: "248px", height: "38px"}} onChange={onMoneyhandler} >
                              <option defaulValue="있다">있다</option>
                              <option value="없다">없다</option>    
                          </select> 
                      </div>
                     
                      <div style={{marginLeft:"15px",marginTop:"15px"}}>
                  <button style={style3} onClick={move}>다음</button>
                  </div>
        </div>
    )
}

export default AuthorSurvey;