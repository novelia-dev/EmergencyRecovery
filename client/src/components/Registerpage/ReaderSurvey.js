import React,{useState} from 'react';

function ReaderSurvey(){
    const [firstoption, setFirstoption] = useState('');
    const [secondoption, setSecondoption]  =useState('');

    const [frequency, setFrequncy] = useState("") // 독자 : 웹 소설 이용 경험
    const [platform, setPlatform] = useState([]) // 작가 : 연재해본 플랫폼 , 독자 : 이용해본 플랫폼

    const handleFirstOptionChange = (event) => {
      setFirstoption(event.target.value);
      setSecondoption('');
    }

    const handleSecondOptionChange = (event) => {
      setSecondoption(event.target.value);
    }

    const onFrequencyhandler = (frequency) => {
      setFrequncy(frequency.target.value);
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

    function move(){
        alert('참여해주셔서 감사합니다.')
        window.location.href="/register5";
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
                        <h4>독자 추가 질문</h4>
                      </div>
                      <div style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
                       유입경로
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
             웹소설 읽는 빈도
            </div>
            <div style={{marginTop:"5px",marginLeft:"15px"}}>
            <select name="웹소설 읽는 빈도" style={{width: "248px", height: "38px"}} onChange={onFrequencyhandler} >
                    <option defaulValue="자주 즐겨 읽는다">자주 즐겨 읽는다</option>
                    <option value = "가끔 읽는다">가끔 읽는다</option>
                    <option value = "거의 읽지 않는다">거의 읽지 않는다</option>
                    <option value = "읽어본 적이 없다">읽어본 적이 없다</option>    
                </select> 
            </div>
            <div style={{width:"151px",height:"17px",fontFamily:"Roboto",color:"#666666",marginTop:"15px",marginLeft:"15px"}}>
              이용해본 플랫폼
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
                  <button style={style3} onClick={move}>다음</button>
                  </div>
        </div>
    )
}

export default ReaderSurvey;