import React,{useState} from 'react';
import styled from 'styled-components';
import {FaStar} from 'react-icons/fa';
import image from '../../Image/image 1.png';

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

function MobileChooseFeedback(){

  const [Grade, setGrade] = useState([false,false, false, false, false])

  const Click =() =>{
    alert('피드백 참여가 완료되었습니다.');
    window.location.href="/mobilefeedback";
}

    return(
        <div>
            <div>

            
        <table>
         <td><h4>아빠가 힘을 숨김</h4></td>
         <td><h5>주관식 피드백</h5></td>
         <td><img alt="logo" style={{width:"28px", height:"25px"}} src={image} /></td>
       </table>
       <hr /> 
       <h4>별점</h4>
       <Stars>
          {ARRAY.map((el,idx) => {
            return(
              <FaStar key={idx} size="50"
              className={Grade[el] && 'yellowStar'} />
            )
          })}
       </Stars>
       <hr />
       <h4>캐릭터</h4>
       <table>
         <tr><td><button>키워드</button></td><td><button>키워드</button></td></tr>
         <tr><td><button>키워드</button></td><td><button>키워드</button></td></tr>
         <tr><td><button>키워드</button></td><td><button>키워드</button></td></tr>
         <tr><td><button>키워드</button></td><td><button>키워드</button></td></tr>
         <tr><td><button>키워드</button></td><td><button>키워드</button></td></tr>
       </table>
       <hr />
       <h4>몰입도</h4>
       <table>
         <tr><td><button>키워드</button></td><td><button>키워드</button></td></tr>
         <tr><td><button>키워드</button></td><td><button>키워드</button></td></tr>
         <tr><td><button>키워드</button></td><td><button>키워드</button></td></tr>
         <tr><td><button>키워드</button></td><td><button>키워드</button></td></tr>
         <tr><td><button>키워드</button></td><td><button>키워드</button></td></tr>
       </table>
       <hr />
       <h4>상업성</h4>
       <table>
         <tr><td><button>키워드</button></td><td><button>키워드</button></td></tr>
         <tr><td><button>키워드</button></td><td><button>키워드</button></td></tr>
         <tr><td><button>키워드</button></td><td><button>키워드</button></td></tr>
         <tr><td><button>키워드</button></td><td><button>키워드</button></td></tr>
         <tr><td><button>키워드</button></td><td><button>키워드</button></td></tr>
       </table>
       <hr />
       <h4>기타</h4>
       <table>
         <tr><td><button>키워드</button></td><td><button>키워드</button></td></tr>
         <tr><td><button>키워드</button></td><td><button>키워드</button></td></tr>
         <tr><td><button>키워드</button></td><td><button>키워드</button></td></tr>
         <tr><td><button>키워드</button></td><td><button>키워드</button></td></tr>
         <tr><td><button>키워드</button></td><td><button>키워드</button></td></tr>
       </table>
    </div>
    <br />
    <button>제출하기</button>
        </div>
    )
}

export default MobileChooseFeedback;