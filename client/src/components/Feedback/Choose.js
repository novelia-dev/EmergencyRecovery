import React, {useState} from "react";
import styled from "styled-components";
import {FaStar} from 'react-icons/fa';

import "./Tag.css";
const ARRAY = [0,1,2,3,4];


const Stars = styled.div`
    display:flex;
    padding-top: 5px;

    & svg{
        color: gray;
        cursor: pointer;
    }
    
    :hover svg{
        color: #fcc419;

    }

    & svg:hover ~ svg {
        color: gray;
    }
    .yellowStar{
        color: #fadb14;
    }

`;

function Choose(){

    const [Grade, setGrade] = useState([false,false, false, false, false])

    const Click =() =>{
        alert('피드백 참여가 완료되었습니다.');
        window.location.href="/:id";
    }
    const Button = () => {
        const arr = [{id: 1 }, {id: 2 }, { id: 3 },{id : 4},{id : 5},{id : 6},{id:7},{id:8},{id:9},{id:10}];
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
              style={{marginTop:"15px",marginLeft:"30px"}}
            >
              주인공 능력이 매력적이예요!
            </button>
          </div>
        ));
      };
      const Button1 = () => {
        const arr = [{id: 1 }, {id: 2 }, { id: 3 },{id : 4},{id : 5},{id : 6},{id:7},{id:8},{id:9},{id:10}];
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
              style={{marginTop:"15px",marginLeft:"30px"}}
            >
              주인공 능력이 매력적이예요!
            </button>
          </div>
        ));
      };
      const Button2 = () => {
        const arr = [{id: 1 }, {id: 2 }, { id: 3 },{id : 4},{id : 5},{id : 6},{id:7},{id:8},{id:9},{id:10}];
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
              style={{marginTop:"15px",marginLeft:"30px"}}
            >
              주인공 능력이 매력적이예요!
            </button>
          </div>
        ));
      };
      const Button3 = () => {
        const arr = [{id: 1 }, {id: 2 }, { id: 3 },{id : 4},{id : 5},{id : 6},{id:7},{id:8},{id:9},{id:10}];
        const [pick3, setPick3] = useState(arr);
        const [select3, setSelect3] = useState([]);
      
        return pick3.map((item) => (
          <div className="button_container">
            
            <button
              key={item.id}
              onClick={() => {
                !select3.includes(item.id)
                  ? setSelect3((select3) => [...select3, item.id])
                  : setSelect3(select3.filter((button) => button !== item.id));
              }}
              className={
                select3.includes(item.id)
                  ? "button_table_btn_ns"
                  : "button_table_btn_s"
              }
              style={{marginTop:"15px",marginLeft:"30px"}}
            >
              주인공 능력이 매력적이예요!
            </button>
          </div>
        ));
      };
    const style={
        
            'width':"117px",
            'height':"48px",
            'margin-left':"235px",
            'left':"900px",
            'font-family':'Roboto',
            'font-style':'Regular',
            'font-weight':"400",
            'font-size':"16px",
            'line-height':"19px",
            'align':"center",
            'Vertical-align':"center",
            'text-color':'#000000'

    };
    return(
        <div>
            <div style={{marginLeft:"666px",width:"588px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>
            <div>
                <h5>작품 제목</h5>
            </div>
            <div>
                <h5>객관식 피드백</h5>
            </div>
            <hr style ={{'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}></hr>
            <div>
                <h5>별점</h5>
            </div>
            <div>
                <Stars>
                    {ARRAY.map((el,idx) => {
                        return(
                            <FaStar key={idx} size="50"
                              className={Grade[el] && 'yellowStar'} />
                        );
                    })}
                </Stars>
            </div>
            <hr style ={{'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}></hr>
            <div>
                <h5>캐릭터</h5>
            </div>
            <div>
                <Button/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <hr style ={{'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}></hr>
            <div>
                <h5>몰입도</h5>
            </div>
            <div>
                <Button1/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <hr style ={{'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}></hr>
            <div>
                <h5>상업성</h5>
            </div>
            <div>
                <Button2/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <hr style ={{'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}></hr>
            <div>
                <h5>기타</h5>
            </div>
            <div>
                <Button2/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <hr style ={{'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}></hr>
            <div>
                <button style={style} onClick={Click}>제출하기</button>
            </div>
            
            </div>
        </div>
    )
}

export default Choose;