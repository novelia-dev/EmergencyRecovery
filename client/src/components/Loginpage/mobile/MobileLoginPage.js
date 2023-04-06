import React from 'react';
import logo from '../../Image/수직로고.png';

function movetoregister(){
    window.location.href="/mobileregister";
}

function movetologin(){
    window.location.href="/mobilelogin2";
}

function MobileLoginPage(){

    return(
        <div>
                <hr />
            <div>
                <img src={logo} alt="logo" />
            </div>
            <br />
            <div>
            <button style={{width:"280px",height:"40px",backgroundColor:"#AA0140",color:"#FFFFFF"}} onClick={movetologin}>로그인</button>  
            </div>
            
            <hr />
        </div>
    )
}

export default MobileLoginPage;