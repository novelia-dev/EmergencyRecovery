import React from 'react';
import './Bell.css';
import DropdownBell from './DropdownBell.js';
import Bells from '../Image/bell.png';

const Bell = props => {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

    return (
        <div>

             <img className="Bells" alt="Bells" style={{width:"25px", height:"25px",marginLeft:"324px",marginTop:"28px",position:"absolute"}}src={Bells} onClick={e => setDropdownVisibility(!dropdownVisibility)}/>


            <DropdownBell visibility={dropdownVisibility} >
                <ul style={{width:"294px",'border-width':"4px",'border-style':"solid",'border-color':"#E5E5E5"}}>
                    <li><h3>알림내용</h3></li>
                    <li><h3>알림내용</h3></li>
                    <li><h3>알림내용</h3></li>

                </ul>
            </DropdownBell>
        </div>
    )
};

export default Bell;