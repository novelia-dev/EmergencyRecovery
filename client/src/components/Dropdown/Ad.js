import React from 'react';
import './Ad.css';
import Dropdown from './Dropdown.js';
import Mypage from '../Image/user.png';
const Ad = props => {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

    function movetomyinfo(){
        window.location.href="/myinfo";
    }

    function movetotext(){
        window.location.href="/text";
    }

    function movetoscrap(){
        window.location.href="/myscrap";
    }
    function movetocoupon(){
        window.location.href="/myinput";
    }
    function movetomyfeedback(){
        window.location.href="/myfeedback";
    }

    return (
        <div id='app' style={{zIndex:"0",marginTop:"28px"}}>
             <img className="Mypage" alt="Mypage" style={{width:"24px", height:"23px",marginLeft:"438px"}}src={Mypage} onClick={e => setDropdownVisibility(!dropdownVisibility)}/>


            <Dropdown visibility={dropdownVisibility} >
                <ul style={{width:"294px",'border-width':"4px",'border-style':"solid",'border-color':"#E5E5E5"}}>
                    <li><h3>@@@님</h3></li>
                    <li style={{backgroundColor:"#666666",color:"white",fontSize:"22px",fontWeight:"400"}}>@@@@ point&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;포인트샵</li>
                    <br/>
                    <li><b>독자페이지</b></li>
                    <li style={{cursor:"pointer"}} onClick={movetoscrap}>스크랩한 작품</li>
                    <li style={{cursor:"pointer"}} onClick={movetomyfeedback}>피드백 참여 작품</li>
                    <br/>
                    <li><b>작가페이지</b></li>
                    <li style={{cursor:"pointer"}}  onClick={movetotext}>새글등록</li>
                    <li style={{cursor:"pointer"}}  onClick={movetomyfeedback}>내 작품목록</li>
                    <li style={{cursor:"pointer"}}  onClick={movetocoupon}>쿠폰함</li>
                    <br/>
                    <li><b>기본정보</b></li>
                    <li style={{cursor:"pointer"}}  onClick={movetomyinfo}>기본정보 및 선호/금지태그 수정</li>
                </ul>
            </Dropdown>
        </div>
    )
};

export default Ad;