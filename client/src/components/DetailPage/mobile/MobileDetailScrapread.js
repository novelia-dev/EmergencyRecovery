import React from 'react';
import MobileFooter from '../../Footer/MobileFooter';
import Dropdown from '../../Dropdown/Dropdown';
import Mypage from '../../Image/user.png';

const Setting = props => {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

    return (
        <div id='app' style={{position:"absolute",marginTop:"-13px"}}>
             <img className="Mypage" alt="Mypage" src={Mypage} style={{width:"24px", height:"23px"}}onClick={e => setDropdownVisibility(!dropdownVisibility)}>
                
            </img>
            <Dropdown visibility={dropdownVisibility}>
                <ul style={{width:"294px",'border-width':"4px",'border-style':"solid",'border-color':"#E5E5E5"}}>
                    <li><h5>밝기</h5></li>
                    <li><input type="range" min={0} max={1} color="white" step={0.02} /></li>
                    <br/>
                    <li><h5>테마</h5></li>
                    <li><h5>글꼴</h5></li>
                    <li><h5>고딕체 &nbsp; 바탕체 &nbsp; 명조체</h5></li>
                    <br/>
                    <li><h5>글자크기</h5></li>
                    <li><select></select></li>
                    <li><h5>줄간격</h5></li>
                    <li><select></select></li>
                    <li><button>보기 설정 초기화</button></li>
                </ul>
            </Dropdown>
        </div>
    )
}


function MobileDetailScrapread(){
    return(
        <div>
            <br />
            <Setting />
            <div>
                <input type="text" value="내용내용내용내용" style={{height:"590px", width:"360px", border:'none'}} />
            </div>
            <MobileFooter />
        </div>
    )
}

export default MobileDetailScrapread;