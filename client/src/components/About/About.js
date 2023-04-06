import React from "react";
import aboutlogo from '../Image/노벨리에 설명 0.png';
import aboutlogo2 from '../Image/노벨리에 설명 1.png';
import aboutlogo3 from '../Image/노벨리에 설명 2.png';
import aboutlogo4 from '../Image/노벨리에 설명 3.png';
import aboutlogo5 from '../Image/노벨리에 설명 4.png';
import aboutlogo6 from '../Image/노벨리에 설명 버튼.png';

function About(){
    return(
        <div>
           <div>
              <img src={aboutlogo} alt="설명1" style={{width: '100%'}} />
           </div>
           <div>
             <img src={aboutlogo2} alt="설명2" style={{width:'100%'}} />
           </div>
           <div>
              <img src={aboutlogo6} alt="설명 버튼" style={{width:'100%'}} />
           </div>
            <div>
              <img src={aboutlogo3} alt="설명3" style={{width: '100%'}} />
            </div>
            <div>
               <img src={aboutlogo4} alt="설명4" style={{width: '100%'}} />
            </div>
            <div>
               <img src={aboutlogo5} alt ="설명5" style={{width: '100%'}} />
            </div>
        </div>
    )
}

export default About;