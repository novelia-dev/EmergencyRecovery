import React, {useState} from "react";
import styled from "styled-components";
import {FaStar} from 'react-icons/fa';

import "./Tag.css";
const ARRAY = [0, 1, 2, 3, 4];

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  & .yellowStar {
    color: #fadb14;
  }

  & .hoveredStar {
    color: #fcc419;
  }
`;
function Tag1() {
  const [buttonStyles, setButtonStyles] = useState([
    { backgroundColor:"#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border:"1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor:"#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border:"1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
  ]);

  const handleClick = (index, backgroundColor) => {
    const newStyles = [...buttonStyles];
    const isSameColor = newStyles[index].backgroundColor === backgroundColor;
    newStyles[index] = {
      backgroundColor: isSameColor ? '' : backgroundColor,
      color: isSameColor ? '' : 'white',
      border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px",
    };
    setButtonStyles(newStyles);
  };
 

  return (
    <div>
      
      <button
        style={buttonStyles[0]}
        onClick={() => handleClick(0, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[1]}
        onClick={() => handleClick(1, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[2]}
        onClick={() => handleClick(2, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      <div style={{marginTop:"15px"}}></div>
    
      <button
        style={buttonStyles[3]}
        onClick={() => handleClick(3, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[4]}
        onClick={() => handleClick(4, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[5]}
        onClick={() => handleClick(5, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      <div style={{marginTop:"15px"}}></div>
    
      <button
        style={buttonStyles[6]}
        onClick={() => handleClick(6, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[7]}
        onClick={() => handleClick(7, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[8]}
        onClick={() => handleClick(8, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      <div style={{marginTop:"15px"}}></div>
    
      <button
        style={buttonStyles[9]}
        onClick={() => handleClick(9, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[10]}
        onClick={() => handleClick(10, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[11]}
        onClick={() => handleClick(11, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      <div style={{marginTop:"15px"}}></div>
    
    <button
      style={buttonStyles[12]}
      onClick={() => handleClick(12, '#AA0140')}
    >
      주인공 능력이 매력적이예요!
    </button>
    &nbsp;
    &nbsp;
    <button
      style={buttonStyles[13]}
      onClick={() => handleClick(13, '#AA0140')}
    >
      주인공 능력이 매력적이예요!
    </button>
    &nbsp;
    &nbsp;
    <button
      style={buttonStyles[14]}
      onClick={() => handleClick(14, '#AA0140')}
    >
      주인공 능력이 매력적이예요!
    </button>
     
    </div>
  );
}
function Tag2() {
  const [buttonStyles, setButtonStyles] = useState([
    { backgroundColor:"#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border:"1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor:"#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border:"1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
  ]);

  const handleClick = (index, backgroundColor) => {
    const newStyles = [...buttonStyles];
    const isSameColor = newStyles[index].backgroundColor === backgroundColor;
    newStyles[index] = {
      backgroundColor: isSameColor ? '' : backgroundColor,
      color: isSameColor ? '' : 'white',
      border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px",
    };
    setButtonStyles(newStyles);
  };
 

  return (
    <div>
      
      <button
        style={buttonStyles[0]}
        onClick={() => handleClick(0, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[1]}
        onClick={() => handleClick(1, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[2]}
        onClick={() => handleClick(2, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      <div style={{marginTop:"15px"}}></div>
    
      <button
        style={buttonStyles[3]}
        onClick={() => handleClick(3, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[4]}
        onClick={() => handleClick(4, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[5]}
        onClick={() => handleClick(5, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      <div style={{marginTop:"15px"}}></div>
    
      <button
        style={buttonStyles[6]}
        onClick={() => handleClick(6, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[7]}
        onClick={() => handleClick(7, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[8]}
        onClick={() => handleClick(8, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      <div style={{marginTop:"15px"}}></div>
    
      <button
        style={buttonStyles[9]}
        onClick={() => handleClick(9, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[10]}
        onClick={() => handleClick(10, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[11]}
        onClick={() => handleClick(11, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      <div style={{marginTop:"15px"}}></div>
    
    <button
      style={buttonStyles[12]}
      onClick={() => handleClick(12, '#AA0140')}
    >
      주인공 능력이 매력적이예요!
    </button>
    &nbsp;
    &nbsp;
    <button
      style={buttonStyles[13]}
      onClick={() => handleClick(13, '#AA0140')}
    >
      주인공 능력이 매력적이예요!
    </button>
    &nbsp;
    &nbsp;
    <button
      style={buttonStyles[14]}
      onClick={() => handleClick(14, '#AA0140')}
    >
      주인공 능력이 매력적이예요!
    </button>
     
    </div>
  );
}
function Tag3() {
  const [buttonStyles, setButtonStyles] = useState([
    { backgroundColor:"#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border:"1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor:"#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border:"1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
  ]);

  const handleClick = (index, backgroundColor) => {
    const newStyles = [...buttonStyles];
    const isSameColor = newStyles[index].backgroundColor === backgroundColor;
    newStyles[index] = {
      backgroundColor: isSameColor ? '' : backgroundColor,
      color: isSameColor ? '' : 'white',
      border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px",
    };
    setButtonStyles(newStyles);
  };
 

  return (
    <div>
      
      <button
        style={buttonStyles[0]}
        onClick={() => handleClick(0, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[1]}
        onClick={() => handleClick(1, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[2]}
        onClick={() => handleClick(2, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      <div style={{marginTop:"15px"}}></div>
    
      <button
        style={buttonStyles[3]}
        onClick={() => handleClick(3, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[4]}
        onClick={() => handleClick(4, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[5]}
        onClick={() => handleClick(5, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      <div style={{marginTop:"15px"}}></div>
    
      <button
        style={buttonStyles[6]}
        onClick={() => handleClick(6, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[7]}
        onClick={() => handleClick(7, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[8]}
        onClick={() => handleClick(8, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      <div style={{marginTop:"15px"}}></div>
    
      <button
        style={buttonStyles[9]}
        onClick={() => handleClick(9, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[10]}
        onClick={() => handleClick(10, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[11]}
        onClick={() => handleClick(11, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      <div style={{marginTop:"15px"}}></div>
    
    <button
      style={buttonStyles[12]}
      onClick={() => handleClick(12, '#AA0140')}
    >
      주인공 능력이 매력적이예요!
    </button>
    &nbsp;
    &nbsp;
    <button
      style={buttonStyles[13]}
      onClick={() => handleClick(13, '#AA0140')}
    >
      주인공 능력이 매력적이예요!
    </button>
    &nbsp;
    &nbsp;
    <button
      style={buttonStyles[14]}
      onClick={() => handleClick(14, '#AA0140')}
    >
      주인공 능력이 매력적이예요!
    </button>
     
    </div>
  );
}
function Tag4() {
  const [buttonStyles, setButtonStyles] = useState([
    { backgroundColor:"#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border:"1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor:"#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border:"1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
    { backgroundColor: "#FFFFFF", color: '' ,border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px"},
  ]);

  const handleClick = (index, backgroundColor) => {
    const newStyles = [...buttonStyles];
    const isSameColor = newStyles[index].backgroundColor === backgroundColor;
    newStyles[index] = {
      backgroundColor: isSameColor ? '' : backgroundColor,
      color: isSameColor ? '' : 'white',
      border: "1px solid #AA0140",borderRadius: "50px",fontSize: "13px",
    };
    setButtonStyles(newStyles);
  };
 

  return (
    <div>
      
      <button
        style={buttonStyles[0]}
        onClick={() => handleClick(0, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[1]}
        onClick={() => handleClick(1, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[2]}
        onClick={() => handleClick(2, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      <div style={{marginTop:"15px"}}></div>
    
      <button
        style={buttonStyles[3]}
        onClick={() => handleClick(3, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[4]}
        onClick={() => handleClick(4, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[5]}
        onClick={() => handleClick(5, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      <div style={{marginTop:"15px"}}></div>
    
      <button
        style={buttonStyles[6]}
        onClick={() => handleClick(6, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[7]}
        onClick={() => handleClick(7, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[8]}
        onClick={() => handleClick(8, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      <div style={{marginTop:"15px"}}></div>
    
      <button
        style={buttonStyles[9]}
        onClick={() => handleClick(9, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[10]}
        onClick={() => handleClick(10, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      &nbsp;
      &nbsp;
      <button
        style={buttonStyles[11]}
        onClick={() => handleClick(11, '#AA0140')}
      >
        주인공 능력이 매력적이예요!
      </button>
      <div style={{marginTop:"15px"}}></div>
    
    <button
      style={buttonStyles[12]}
      onClick={() => handleClick(12, '#AA0140')}
    >
      주인공 능력이 매력적이예요!
    </button>
    &nbsp;
    &nbsp;
    <button
      style={buttonStyles[13]}
      onClick={() => handleClick(13, '#AA0140')}
    >
      주인공 능력이 매력적이예요!
    </button>
    &nbsp;
    &nbsp;
    <button
      style={buttonStyles[14]}
      onClick={() => handleClick(14, '#AA0140')}
    >
      주인공 능력이 매력적이예요!
    </button>
     
    </div>
  );
}

function Choose(){
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleHover = (value) => {
    setHoveredRating(value);
  };

  const handleClick = (value) => {
    setRating(value);
  };

    const [Grade, setGrade] = useState([false,false, false, false, false])

    const Click =() =>{
        alert('피드백 참여가 완료되었습니다.');
        window.location.href="/:id";
    }
   
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
            <div style={{marginLeft:"15px"}}>
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
      {ARRAY.map((el, idx) => (
        <FaStar
          key={idx}
          size="50"
          className={
            el < hoveredRating || el < rating
              ? 'yellowStar'
              : el === hoveredRating
              ? 'hoveredStar'
              : ''
          }
          onClick={() => handleClick(el+1)}
          onMouseEnter={() => handleHover(el)}
          onMouseLeave={() => setHoveredRating(0)}
        />
      ))}
    </Stars>
            </div>
            <hr style ={{'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}></hr>
            <div>
                <h5>캐릭터</h5>
            </div>
            <div>
                <Tag1/>
            </div>
            <hr style ={{marginTop:"15px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}></hr>
            <div>
                <h5>몰입도</h5>
            </div>
            <div>
            <Tag2/>
            </div>
            <hr style ={{marginTop:"15px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}></hr>
            <div>
                <h5>상업성</h5>
            </div>
            <div>
            <Tag3/>
            </div>
            <hr style ={{marginTop:"15px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}></hr>
            <div>
                <h5>기타</h5>
            </div>
            <div>
            <Tag4/>
            </div>
          
            <hr style ={{marginTop:"15px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}></hr>
            <div>
                <button style={style} onClick={Click}>제출하기</button>
            </div>
            </div>
           
            
            </div>
        </div>
    )
}

export default Choose;