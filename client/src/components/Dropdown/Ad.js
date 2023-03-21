import React from 'react';
import './Ad.css';
import Dropdown from './Dropdown.js';
import Mypage from '../Image/user.png';
const Ad = props => {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

    return (
        <div id='app' style={{zIndex:"0",marginTop:"28px"}}>
             <img className="Mypage" alt="Mypage" style={{width:"24px", height:"23px",marginLeft:"438px"}}src={Mypage} onClick={e => setDropdownVisibility(!dropdownVisibility)}/>


            <Dropdown visibility={dropdownVisibility} >
                <ul style={{width:"294px",'border-width':"4px",'border-style':"solid",'border-color':"#E5E5E5"}}>
                    <li><h3>@@@님</h3></li>
                    <li style={{backgroundColor:"#666666",color:"white",fontSize:"22px",fontWeight:"400"}}>@@@@ point&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;포인트샵</li>
                    <br/>
                    <li><b>독자페이지</b></li>
                    <li>스크랩한 작품</li>
                    <li>피드백 참여 작품</li>
                    <br/>
                    <li><b>작가페이지</b></li>
                    <li>새글등록</li>
                    <li>피드백 진행 중인 작품</li>
                    <li>피드백 완료된 작품</li>
                    <li>쿠폰함</li>
                    <br/>
                    <li><b>기본정보</b></li>
                    <li>기본정보 및 선호/금지태그 수정</li>
                </ul>
            </Dropdown>
        </div>
    )
};

export default Ad;