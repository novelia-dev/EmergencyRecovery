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

function MobileWriteFeedback(){

    const [Grade, setGrade] = useState([false,false, false, false, false])

    const [good, setGood] = useState("");
    const [bad, setBad] = useState("");

    const handlegood = (e) => {
        setGood(e.target.value);
    }
    const handlebad = (e) => {
        setBad(e.target.value);
    }

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
            <h4>좋았던 점</h4>
            <h5>{good.length}자</h5>
            <input style={{width: "330px", height: "150px"}} type="text" onChange={handlegood} placeholder ="300자 이상 입력해주세요. 작가분들께 직접 전달되는 피드백입니다. 높임말을 사용해주세요. 욕설 비난, 조롱의 경우 서비스 이용 제제 사유입니다." />
            <h4>아쉬웠던 점</h4>
            <h5>{bad.length}자</h5>
            <input style={{width: "330px", height: "150px"}} type="text" onChange={handlebad} placeholder ="300자 이상 입력해주세요. 작가분들께 직접 전달되는 피드백입니다. 높임말을 사용해주세요. 욕설 비난, 조롱의 경우 서비스 이용 제제 사유입니다." />
            </div>
            <button>제출하기</button>
        </div>
    )
}

export default MobileWriteFeedback;