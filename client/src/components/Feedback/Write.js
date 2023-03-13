import React, {useState} from "react";
import styled from "styled-components";
import {FaStar} from 'react-icons/fa';

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
        window.location.href="/:id";
    }

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
            <div>
                <h5>좋았던 점</h5>
                <h5>{good.length}자</h5>
            </div>
            <div>
                <input style={{width:"588px", height:"382px"}} type="text" onChange={handlegood} placeholder="300자 이상 입력해주세요. 작가분들께 직접 전달되는 피드백 입니다. 높임말을 사용해주세요. 욕설, 비난, 조롱의 경우 서비스 이용 제제 사유 입니다."></input>
            </div>
            <div>
                <h5>아쉬웠던 점</h5>
                <h5>{bad.length}자</h5>
            </div>
            <div>
                <input style={{width:"588px", height:"382px"}} type="text" onChange={handlebad} placeholder="300자 이상 입력해주세요. 작가분들께 직접 전달되는 피드백 입니다. 높임말을 사용해주세요. 욕설, 비난, 조롱의 경우 서비스 이용 제제 사유 입니다."></input>
            </div>
            <div>
                <button onClick={Click}>제출하기</button>
            </div>
            </div>
        </div>
    )
}

export default Choose;