import React,{useState,useEffect} from "react";
import styled from "styled-components";
import Posts from "../Mainpage/Posts";

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

      
      

      const Button1 = ({onSelect}) => {
        const arr = [{id: 1, name:"여성향"}, {id: 2, name:"남성향" }, { id: 3, name: "현대로멘스" },{id: 4,name: "BL"},{id: 5,name:"GL"},{id: 6,name:"가상시대물"},
        {id: 7, name:"갑을관계"}, {id: 8, name:"계약관계" }, { id: 9, name: "궁정로맨스" },{id: 10,name: "권선징악"},{id: 11,name:"기억상실"},{id: 12,name:"나이차커플"},
        {id: 13, name:"달달물"}, {id: 14, name:"동거물" }, { id: 15, name: "동양풍" },{id: 16,name: "로맨틱코미디"},{id: 17,name:"복수물"},{id: 18,name:"빙의물"},
        {id: 19, name:"사내연애"}, {id: 20, name:"소유욕/독점욕" }, { id: 21, name: "속도위반" },{id: 22,name: "수사물"},{id: 23,name:"신분차이"},{id: 24,name:"신파"},
        {id: 25, name:"역하렘"}, {id: 26, name:"연예계물" }, { id: 27, name: "오피스물" },{id: 28,name: "오해물"},{id: 29,name:"우연한만남"},{id: 30,name:"운명"},
        {id: 31, name:"육아물"}, {id: 32, name:"잔잔물" }, { id: 33, name: "재회물" },{id: 34,name: "조직/암흑가"},{id: 35,name:"첫사랑"},{id: 36,name:"친구>연인"},
        {id: 37, name:"캠퍼스물"}, {id: 38, name:"타임슬립" }, { id: 39, name: "트라우마" },{id: 40,name: "학원물"},{id: 41,name:"회귀물"},{id: 42,name:"걸크러쉬"},
        {id: 43, name:"계략남"}, {id: 44, name:"계략녀" }, { id: 45, name: "까칠남" },{id: 46,name:"까칠녀"},{id: 47,name:"나쁜남자"},{id: 48,name:"냉정녀"},
        {id: 49, name:"뇌섹녀"}, {id: 50, name:"능글남" }, { id: 51, name: "능력남" },{id: 52,name: "능력녀"},{id: 53,name:"다정남"},{id: 54,name:"다정녀"},
        {id: 55, name:"대형견남"}, {id: 56, name:"도도녀" }, { id: 57, name: "동정남" },{id: 58,name: "무심남"},{id: 59,name:"무심녀"},{id: 60,name:"사이다녀"},
        {id: 61, name:"상처남"}, {id: 62, name:"상처녀" }, { id: 63, name: "순정남" },{id: 64,name: "순정녀"},{id: 65,name:"순진남"},{id: 66,name:"순진녀"},
        {id: 67, name:"신데렐라"}, {id: 68, name:"악녀" }, { id: 69, name: "애교남" },{id: 70,name: "엉뚱발랄녀"},{id: 71,name:"연하남"},{id: 72,name:"오만남"},
        {id: 73, name:"외유내강"}, {id: 74, name:"우월녀" }, { id: 75, name: "유혹남" },{id: 76,name: "자상녀"},{id: 77,name:"재벌남"},{id: 78,name:"재벌녀"},
        {id: 79, name:"절륜남"}, {id: 80, name:"조신남" }, { id: 81, name: "존댓말남" },{id: 82,name: "직진남"},{id: 83,name:"집착남"},{id: 84,name:"짝사랑녀"},
        {id: 85, name:"차도남"}, {id: 86, name:"철벽녀" }, { id: 87, name: "츤데레남" },{id: 88,name: "카리스마남"},{id: 89,name:"털털녀"},{id: 90,name:"후회남"},
      ];
        const [pick, setPick] = useState(arr);
        const [select, setSelect] = useState([]);

        const handleButtonClick = (item) => {
          !select.includes(item.id)
          ? setSelect((select) => [...select, item.id])
          : setSelect(select.filter((button)=> button !== item.id));

        };
        
        return(
          <div>
            <div>
            {pick.map((item) => (
              <div className="button_container" key={item.id}>
                <button onClick={() => handleButtonClick(item)}
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
            ))}
            </div>
            <div>
            <Posts selected={select} />
            </div>
          </div>
        );
      
       
      };

      function Posts({selected}){
        const [posts, setPosts] = useState([]);
        const [limit, setLimit] = useState(10);
        const [page, setPage] = useState(1);
        const offset = (page-1) * limit;

        const filterPosts = (selected) => {
          const filteredPosts = setPosts(filteredPosts);
        };



        return(
          <div>
          <Button1 onSelect = {filterPosts} />
          <Pagination
              total = {posts.length}
              limit={limit}
              page={page}
              setPage={setPage}
           />
           </div>
        );
      }

     
      function Pagination({total, limit, page, setPage}){
        const numPages = Math.ceil(total / limit);

        return(
          <>
            <Nav>
              <MyButton onClick={() => setPage(page-1)} disabled={page === 1}>
                &lt;
              </MyButton>
              {Array(numPages).fill().map((_, i) => (
                <MyButton key={i+1} onClick={() => setPage(i+1)}
                  aria-current={page === i+1 ? "page" : null}
                  >
                    {i+1}
                  </MyButton>
              ))}
              <MyButton onClick={() => setPage(page+1)} disabled={page === numPages}>
                &gt;
              </MyButton>
            </Nav>
          </>
        )
      }
  const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const MyButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: deeppink;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;
      
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
            <div style={{marginTop:"515px",marginLeft:"15px",fontWeight: "700"}}>
             &nbsp; 금지태그
            </div>
            <div style={{marginTop:"15px",marginLeft:"22px"}}>
                <Button1/>
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