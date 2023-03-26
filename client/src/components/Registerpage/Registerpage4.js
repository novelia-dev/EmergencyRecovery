import React,{useState} from "react";

function Registerpage4(){

    function jsonrole(){
      let json = JSON.parse(localStorage.getItem("cast"));
      let txt = json.role;
      return txt;
    }

    function submitactiveButton(){
       let core = jsonrole();

       if(core === 'author')
       {
          window.location.href="/authorsurvey";
       }
       else if(core === 'reader')
       {
          window.location.href="/readersurvey";
       }
    }


    const style ={
        'position':'absolute',
        'font-weight': 700,
        'border-width':"1px",
        'border-style':"solid",
        'border-color':"#E5E5E5",
        'margin-left': "669px",
        'width':"588px"
    }

    const style1 ={
        'width':"151px",
        'height':"17px",
        'color':"#666666",
        'font-family': "Roboto",
        'fontWeight': 700,
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
        const arr = [{id: 1, name:"판타지" }, {id: 2, name:"로맨스" }, { id: 3 , name:"로판" }];
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
      };

      //Button1 ~ Button 15 : 로멘스
      //Button16 ~ Button 

      const Button1 = () => {
        const arr = [{id: 1, name:"여성향"}, {id: 2, name:"남성향" }, { id: 3, name: "현대로멘스" },{id: 4,name: "BL"},{id: 5,name:"GL"},{id: 6,name:"가상시대물"}];
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
      };
      const Button2 = () => {
        const arr = [{id: 1, name:"갑을관계"}, {id: 2, name:"계약관계" }, { id: 3, name: "궁정로맨스" },{id: 4,name: "권선징악"},{id: 5,name:"기억상실"},{id: 6,name:"나이차커플"}];
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
      };
      const Button3 = () => {
        const arr = [{id: 1, name:"달달물"}, {id: 2, name:"동거물" }, { id: 3, name: "동양풍" },{id: 4,name: "로맨틱코미디"},{id: 5,name:"복수물"},{id: 6,name:"빙의물"}];
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
      };
      const Button4 = () => {
        const arr = [{id: 1, name:"사내연애"}, {id: 2, name:"소유욕/독점욕" }, { id: 3, name: "속도위반" },{id: 4,name: "수사물"},{id: 5,name:"신분차이"},{id: 6,name:"신파"}];
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
      };
      const Button5 = () => {
        const arr = [{id: 1, name:"역하렘"}, {id: 2, name:"연예계물" }, { id: 3, name: "오피스물" },{id: 4,name: "오해물"},{id: 5,name:"우연한만남"},{id: 6,name:"운명"}];
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
      };
      const Button6 = () => {
        const arr = [{id: 1, name:"육아물"}, {id: 2, name:"잔잔물" }, { id: 3, name: "재회물" },{id: 4,name: "조직/암흑가"},{id: 5,name:"첫사랑"},{id: 6,name:"친구>연인"}];
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
      };
      const Button7 = () => {
        const arr = [{id: 1, name:"캠퍼스물"}, {id: 2, name:"타임슬립" }, { id: 3, name: "트라우마" },{id: 4,name: "학원물"},{id: 5,name:"회귀물"},{id: 6,name:"걸크러쉬"}];
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
      };
      const Button8 = () => {
        const arr = [{id: 1, name:"계략남"}, {id: 2, name:"계략녀" }, { id: 3, name: "까칠남" },{id: 4,name:"까칠녀"},{id: 5,name:"나쁜남자"},{id: 6,name:"냉정녀"}];
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
      };
      const Button9 = () => {
        const arr = [{id: 1, name:"뇌섹녀"}, {id: 2, name:"능글남" }, { id: 3, name: "능력남" },{id: 4,name: "능력녀"},{id: 5,name:"다정남"},{id: 6,name:"다정녀"}];
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
      };
      const Button10 = () => {
        const arr = [{id: 1, name:"대형견남"}, {id: 2, name:"도도녀" }, { id: 3, name: "동정남" },{id: 4,name: "무심남"},{id: 5,name:"무심녀"},{id: 6,name:"사이다녀"}];
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
      };const Button11 = () => {
        const arr = [{id: 1, name:"상처남"}, {id: 2, name:"상처녀" }, { id: 3, name: "순정남" },{id: 4,name: "순정녀"},{id: 5,name:"순진남"},{id: 6,name:"순진녀"}];
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
      };
      const Button12 = () => {
        const arr = [{id: 1, name:"신데렐라"}, {id: 2, name:"악녀" }, { id: 3, name: "애교남" },{id: 4,name: "엉뚱발랄녀"},{id: 5,name:"연하남"},{id: 6,name:"오만남"}];
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
      };
      const Button13 = () => {
        const arr = [{id: 1, name:"외유내강"}, {id: 2, name:"우월녀" }, { id: 3, name: "유혹남" },{id: 4,name: "자상녀"},{id: 5,name:"재벌남"},{id: 6,name:"재벌녀"}];
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
      };
      const Button14 = () => {
        const arr = [{id: 1, name:"절륜남"}, {id: 2, name:"조신남" }, { id: 3, name: "존댓말남" },{id: 4,name: "직진남"},{id: 5,name:"집착남"},{id: 6,name:"짝사랑녀"}];
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
      };
      const Button15 = () => {
        const arr = [{id: 1, name:"차도남"}, {id: 2, name:"철벽녀" }, { id: 3, name: "츤데레남" },{id: 4,name: "카리스마남"},{id: 5,name:"털털녀"},{id: 6,name:"후회남"}];
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
      };
    return(
    <div style={{'position':"static"}}>
        <div style={style}>
                &nbsp; &nbsp; 회원가입
            
        <hr style={{'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}></hr>
            <div style={style1}> 
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
                    <option value="판타지">판타지</option>
                    <option value="로판">로판</option>   
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
                <Button2/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button3/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button4/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button5/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button6/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button7/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button8/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button9/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button10/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button11/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button12/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button13/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button14/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button15/>
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
                <Button2/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button3/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button4/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button5/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button6/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button7/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button8/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button9/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button10/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button11/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button12/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button13/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button14/>
                <br></br>
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button15/>
                <br></br>
            </div>
            <div style={{marginLeft:"15px",marginTop:"15px"}}>
            <br />
        <button style={style3} onClick={submitactiveButton}>입력완료</button>
        </div>
        </div>
    </div>
    )
}

export default Registerpage4;