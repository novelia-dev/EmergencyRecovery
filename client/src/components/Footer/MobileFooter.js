import React from 'react';
import image1 from '../Image/home (3) 1.png';
import image2 from '../Image/heart (2) 1.png';
import image3 from '../Image/bookmark (1) 1.png';
import image4 from '../Image/hand-holding-heart (1) 2.png';
import image5 from '../Image/user (2) 1.png';
import { Link,useLocation } from 'react-router-dom';

function movetomain(){
    window.location.href="/mobile"
}
function movetofavorite(){
    window.location.href="/mobilefavorite"
}
function movetoscrap(){
    window.location.href="/mobilescrap"
}
function movetofeedback(){
    window.location.href="/mobilefeedback"
}
function movetomyinfo(){
    window.location.href="/mobilemyinfo"
}
function MobileFooter(){
    function MyLink(props) {
        const { pathname } = useLocation();
      
        return (
          <Link
            to={props.to}
            style={{
                fontFamily: 'Roboto',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "10px",
                lineHeight: "12px",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              textDecoration: 'none',
              color: pathname === props.to ? '#AA0140' : 'inherit',
            }}
          >
            {props.children}
          </Link>
        );
      }

    return(
        <div style={{backgroundColor:"#F1F1F1"}}>
            <table style={{borderSpacing: '10px'}}>
                <tr>
                    <td>
                        <div>
                        <img src={image1} onClick={movetomain }alt="image1" style={{marginLeft:"3px"}} />
                        <MyLink to="/mobile" >home</MyLink>
                        </div>
                    </td>
                    <td>
                        <div style={{marginLeft:"27px"}}>
                        <img src={image2} onClick={movetofavorite} alt="image2" style={{marginLeft:"10px"}} />
                        <MyLink to="/mobilefavorite" >작품 추천</MyLink>
                        
                        </div>
                    </td>
                    <td>
                        <div style={{marginLeft:"27px"}}>
                        <img src={image3} alt="image3" onClick={movetoscrap} style={{marginLeft:"6px"}} />
                        <MyLink to="/mobilescrap" >스크랩</MyLink>
                        
                        </div>
                    </td>
                    <td>
                        <div style={{marginLeft:"27px"}}>
                        <img src={image4} alt="image4" onClick={movetofeedback} style={{marginLeft:"6px"}} />
                        <MyLink to="/mobilefeedback" >피드백</MyLink>
                        </div>
                    </td>
                    <td>
                        <div style={{marginLeft:"27px"}}>
                        <img src={image5} onClick={movetomyinfo} alt="image5" />
                        <MyLink to="//mobilemyinfo" >M Y</MyLink>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default MobileFooter;