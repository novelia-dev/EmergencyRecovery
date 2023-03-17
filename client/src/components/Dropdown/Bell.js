import React from 'react';
import './Bell.css';
import Dropdown from './Dropdown.js';
import Mypage from '../Image/bell.png';
const Bell = props => {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

    return (
        <div id='app' style={{position:"absolute",marginTop:"-13px"}}>
             <img className="Mypage" alt="Mypage" style={{width:"24px", height:"23px", marginLeft:"324px"}}src={Mypage} onClick={e => setDropdownVisibility(!dropdownVisibility)}>
                
            </img>
            <Dropdown visibility={dropdownVisibility}>
                <ul style={{width:"294px",'border-width':"4px",'border-style':"solid",'border-color':"#E5E5E5"}}>
                    <li><h4>알림내용 알림내용</h4></li>
                    <li><h4>알림내용 알림내용</h4></li>
                    <li><h4>알림내용 알림내용</h4></li>
                    <li><h4>알림내용 알림내용</h4></li>
                    <li><h4>알림내용 알림내용</h4></li>
                    <li><h4>알림내용 알림내용</h4></li>
                    <li><h4>알림내용 알림내용</h4></li>
                    <li><h4>알림내용 알림내용</h4></li>
                </ul>
            </Dropdown>
        </div>
    )
};

export default Bell;