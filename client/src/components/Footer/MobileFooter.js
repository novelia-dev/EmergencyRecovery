import React from 'react';
import image1 from '../Image/home (3) 1.png';
import image2 from '../Image/heart (2) 1.png';
import image3 from '../Image/bookmark (1) 1.png';
import image4 from '../Image/hand-holding-heart (1) 2.png';
import image5 from '../Image/user (2) 1.png';


function MobileFooter(){
    return(
        <div>
            <table style={{borderSpacing: '10px'}}>
                <tr>
                    <td>
                        <div>
                        <img src={image1} alt="image1" style={{marginLeft:"3px"}} />
                        <h6 style={{margin: '0'}}>home</h6>
                        </div>
                    </td>
                    <td>
                        <div style={{marginLeft:"17px"}}>
                        <img src={image2} alt="image2" style={{marginLeft:"10px"}} />
                        <h6 style={{margin: '0'}}>선호태그</h6>
                        </div>
                    </td>
                    <td>
                        <div style={{marginLeft:"17px"}}>
                        <img src={image3} alt="image3" style={{marginLeft:"6px"}} />
                        <h6 style={{margin: '0'}}>스크랩</h6>
                        </div>
                    </td>
                    <td>
                        <div style={{marginLeft:"17px"}}>
                        <img src={image4} alt="image4" style={{marginLeft:"6px"}} />
                        <h6 style={{margin: '0'}}>피드백</h6>
                        </div>
                    </td>
                    <td>
                        <div style={{marginLeft:"17px"}}>
                        <img src={image5} alt="image5" />
                        <h6 style={{margin: '0'}}> MY</h6>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default MobileFooter;