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
                    <li><h3>@@@님</h3></li>
                    <li style={{backgroundColor:"#666666",color:"white",fontSize:"22px",fontWeight:"400"}}>@@@@ point&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;포인트샵</li>
                    <br/>
                    <li><b>독자페이지</b></li>
                    
                </ul>
            </DropdownBell>
        </div>
    )
};

export default Bell;