import React,{useState} from 'react';

function MobileRegisterPage3(){
    const Button = () => {

        const arr = [{id: 1, name:"판타지" }, {id: 2, name:"로맨스" }, { id: 3 , name:"로맨스 판타지" }];
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
                  {item.name}
                </button>
              </div>
            ));
    }
    
    const Button1 = () => {
        const arr = [{id: 1 }, {id: 2 }, { id: 3 },{id: 4},{id: 5},{id: 6}];
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
              선호태그
            </button>
          </div>
        ));
      };

      function submitactiveButton(){
         alert('회원가입이 완료되었습니다.');
         window.location.href="/mobilemyinfo";
      }

      return(
        <div style={{'position':"static"}}>
        <div>
                &nbsp; &nbsp; 회원가입
            
        <hr style={{'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}></hr>
            <div> 
                &nbsp; &nbsp; 선호장르
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button/>
                <br></br>
            </div>
            <br />
            <div style={{marginTop:"15px",marginLeft:"15px",fontWeight: "700"}}>
             &nbsp; 장르별 태그보기
            </div>
            <div style={{marginTop:"5px",marginLeft:"22px"}}>
            <select name="장르별 태그보기" style={{width: "248px", height: "38px"}} >
                    <option defaulValue="로맨스">로맨스</option>    
                </select> 
            </div>
            <div style={{marginTop:"15px",marginLeft:"15px",fontWeight: "700"}}>
             &nbsp; 선호태그
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button1/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button1/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button1/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button1/>
                <br></br>
            </div>
            <br />
            <div style={{marginTop:"15px",marginLeft:"15px",fontWeight: "700"}}>
             &nbsp; 금지태그
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button1/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button1/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button1/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button1/>
                <br></br>
            </div>
            <div style={{marginLeft:"15px",marginTop:"15px"}}>
        <button onClick={submitactiveButton}>입력완료</button>
        </div>
        </div>
    </div>
      )
}

export default MobileRegisterPage3;