import React from 'react';
import image from '../../Image/카카오톡.png';
import image1 from '../../Image/네이버.png';

function MobileLoginPage2(){
    return(
        <div>
            <div>
                <table>
                   <tr><td><img style={{width:"24px", height:"24px"}} src={image} alt="카카오"></img></td><h5>카카오 계정으로 로그인하기</h5></tr>
                   <tr><td><img style={{width:"24px", height:"24px"}} src={image1} alt="네이버"></img></td><h5>네이버 계정으로 로그인하기</h5></tr>
                </table>
            </div>
            <div>
                <button>취소</button>
                <button>다음</button>
            </div>
        </div>
    )

}
export default MobileLoginPage2;