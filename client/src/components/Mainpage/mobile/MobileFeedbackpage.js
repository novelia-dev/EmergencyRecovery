import React,{useState} from 'react';
import MobileNavbar from '../../Navbar/MobileNavbar';
import MobileFooter from '../../Footer/MobileFooter';
import image1 from '../../Image/illumination-5173540_1920.jpg';
import scrap1 from '../../Image/스크랩전.png';
import scrap2 from '../../Image/스크랩후.png';
function MobileFeedbackpage(){
   const [clickCounts, setClickCounts] = useState(Array(12).fill(0));

  const handleClick = (index) => {
    setClickCounts((prevClickCounts) => {
      const newClickCounts = [...prevClickCounts];
      newClickCounts[index] += 1;
      return newClickCounts;
    });
  };

  const getImageSource = (index) => {
    return clickCounts[index] % 2 === 0 ? scrap1 : scrap2;
  };
  
    return(
      <div style={{position: "relative", height: "calc(100vh - 50px)",borderWidth:"1px",'border-style':"solid",'border-color':"#EEEEEE",width:"360px"}}>
          
      <MobileNavbar  style={{position: "fixed", top: 0, left: 0, right: 0, zIndex: 1}} />
      <div style={{ width:"33hpx",height: "calc(100% - 275px)", overflowX: 'hidden',overflowY: "scroll"}}>
         <div>
         
             <h4 style={{marginLeft:"15px"}}>피드백 작품</h4>
             
             
             <hr style={{borderWidth:"1px",'border-style':"solid",'border-color':"#848484",width:"330px"}}/>
             
             
             <div>
              <div style={{position:"relative",float:"left"}}>
              <img src={getImageSource(0)}  style={{marginLeft:"82.65px",position:"absolute",width:"15px", height:"20px"}} alt="Image 1" onClick={() => handleClick(0)} />
              <img style={{width:"107px", height:"158px",marginLeft:"5px"}} src={image1} alt="이미지"  ></img>
              </div>
              <div style={{position:"relative",float:"left"}}>
              <img src={getImageSource(1)} style={{marginLeft:"82.65px",position:"absolute",width:"15px", height:"20px"}} alt="Image 2" onClick={() => handleClick(1)} />
             <img style={{width:"107px", height:"158px",marginLeft:"5px"}} src={image1} alt="이미지"  ></img>
              </div>
              <div style={{position:"relative",float:"left"}}>
              <img src={getImageSource(2)} style={{marginLeft:"82.65px",position:"absolute",width:"15px", height:"20px"}} alt="Image 3" onClick={() => handleClick(2)} />
              <img style={{width:"107px", height:"158px",marginLeft:"5px"}} src={image1} alt="이미지"  ></img>                
              </div>
             </div>
             <div style={{marginLeft:"5px",marginTop:"5px"}} >
             <div  style={{width:"107px" , height:"33px",backgroundColor:"#A4A4A4",float:"left"}}>
                <h6 style={{ marginLeft: '5px', marginTop: '5px',fontWeight:"600" }}>제목제목</h6>
                <h6 style={{ marginLeft: '5px', marginTop: '-25px',fontWeight:"400" }}>작가명</h6></div>
             <div  style={{width:"107px",marginLeft:"5px" , height:"33px",backgroundColor:"#A4A4A4",float:"left"}}>
                <h6 style={{ marginLeft: '5px', marginTop: '5px',fontWeight:"600" }}>제목제목</h6>
                <h6 style={{ marginLeft: '5px', marginTop: '-25px',fontWeight:"400" }}>작가명</h6></div>
             <div  style={{width:"107px",marginLeft:"5px" , height:"33px",backgroundColor:"#A4A4A4",float:"left"}}>
                <h6 style={{ marginLeft: '5px', marginTop: '5px',fontWeight:"600" }}>제목제목</h6>
                <h6 style={{ marginLeft: '5px', marginTop: '-25px',fontWeight:"400" }}>작가명</h6></div>
             </div>
             
             <div style={{marginTop:"50px"}}>
             <div>
              <div style={{position:"relative",float:"left"}}>
              <img src={getImageSource(3)}  style={{marginLeft:"82.65px",position:"absolute",width:"15px", height:"20px"}} alt="Image 1" onClick={() => handleClick(3)} />
              <img style={{width:"107px", height:"158px",marginLeft:"5px"}} src={image1} alt="이미지"  ></img>
              </div>
              <div style={{position:"relative",float:"left"}}>
              <img src={getImageSource(4)} style={{marginLeft:"82.65px",position:"absolute",width:"15px", height:"20px"}} alt="Image 2" onClick={() => handleClick(4)} />
             <img style={{width:"107px", height:"158px",marginLeft:"5px"}} src={image1} alt="이미지"  ></img>
              </div>
              <div style={{position:"relative",float:"left"}}>
              <img src={getImageSource(5)} style={{marginLeft:"82.65px",position:"absolute",width:"15px", height:"20px"}} alt="Image 2" onClick={() => handleClick(5)} />
              <img style={{width:"107px", height:"158px",marginLeft:"5px"}} src={image1} alt="이미지"  ></img>                
              </div>
             </div>
             </div>
             <div style={{marginLeft:"5px",marginTop:"5px"}} >
             <div  style={{width:"107px" , height:"33px",backgroundColor:"#A4A4A4",float:"left"}}>
                <h6 style={{ marginLeft: '5px', marginTop: '5px',fontWeight:"600" }}>제목제목</h6>
                <h6 style={{ marginLeft: '5px', marginTop: '-25px',fontWeight:"400" }}>작가명</h6></div>
             <div  style={{width:"107px",marginLeft:"5px" , height:"33px",backgroundColor:"#A4A4A4",float:"left"}}>
                <h6 style={{ marginLeft: '5px', marginTop: '5px',fontWeight:"600" }}>제목제목</h6>
                <h6 style={{ marginLeft: '5px', marginTop: '-25px',fontWeight:"400" }}>작가명</h6></div>
             <div  style={{width:"107px",marginLeft:"5px" , height:"33px",backgroundColor:"#A4A4A4",float:"left"}}>
                <h6 style={{ marginLeft: '5px', marginTop: '5px',fontWeight:"600" }}>제목제목</h6>
                <h6 style={{ marginLeft: '5px', marginTop: '-25px',fontWeight:"400" }}>작가명</h6></div>
             </div>
             <div style={{marginTop:"50px"}}>
             <div style={{position:"relative",float:"left"}}>
              <img src={getImageSource(6)}  style={{marginLeft:"82.65px",position:"absolute",width:"15px", height:"20px"}} alt="Image 1" onClick={() => handleClick(6)} />
              <img style={{width:"107px", height:"158px",marginLeft:"5px"}} src={image1} alt="이미지"  ></img>
              </div>
              <div style={{position:"relative",float:"left"}}>
              <img src={getImageSource(7)} style={{marginLeft:"82.65px",position:"absolute",width:"15px", height:"20px"}} alt="Image 2" onClick={() => handleClick(7)} />
             <img style={{width:"107px", height:"158px",marginLeft:"5px"}} src={image1} alt="이미지"  ></img>
              </div>
              <div style={{position:"relative",float:"left"}}>
              <img src={getImageSource(8)} style={{marginLeft:"82.65px",position:"absolute",width:"15px", height:"20px"}} alt="Image 2" onClick={() => handleClick(8)} />
              <img style={{width:"107px", height:"158px",marginLeft:"5px"}} src={image1} alt="이미지"  ></img>                
              </div>
             </div>
             <div style={{marginLeft:"5px",marginTop:"5px"}} >
             <div  style={{width:"107px" , height:"33px",backgroundColor:"#A4A4A4",float:"left"}}>
                <h6 style={{ marginLeft: '5px', marginTop: '5px',fontWeight:"600" }}>제목제목</h6>
                <h6 style={{ marginLeft: '5px', marginTop: '-25px',fontWeight:"400" }}>작가명</h6></div>
             <div  style={{width:"107px",marginLeft:"5px" , height:"33px",backgroundColor:"#A4A4A4",float:"left"}}>
                <h6 style={{ marginLeft: '5px', marginTop: '5px',fontWeight:"600" }}>제목제목</h6>
                <h6 style={{ marginLeft: '5px', marginTop: '-25px',fontWeight:"400" }}>작가명</h6></div>
             <div  style={{width:"107px",marginLeft:"5px" , height:"33px",backgroundColor:"#A4A4A4",float:"left"}}>
                <h6 style={{ marginLeft: '5px', marginTop: '5px',fontWeight:"600" }}>제목제목</h6>
                <h6 style={{ marginLeft: '5px', marginTop: '-25px',fontWeight:"400" }}>작가명</h6></div>
             </div>
             <div style={{marginTop:"50px"}}>
             <div style={{position:"relative",float:"left"}}>
              <img src={getImageSource(9)}  style={{marginLeft:"82.65px",position:"absolute",width:"15px", height:"20px"}} alt="Image 1" onClick={() => handleClick(9)} />
              <img style={{width:"107px", height:"158px",marginLeft:"5px"}} src={image1} alt="이미지"  ></img>
              </div>
              <div style={{position:"relative",float:"left"}}>
              <img src={getImageSource(10)} style={{marginLeft:"82.65px",position:"absolute",width:"15px", height:"20px"}} alt="Image 2" onClick={() => handleClick(10)} />
             <img style={{width:"107px", height:"158px",marginLeft:"5px"}} src={image1} alt="이미지"  ></img>
              </div>
              <div style={{position:"relative",float:"left"}}>
              <img src={getImageSource(11)} style={{marginLeft:"82.65px",position:"absolute",width:"15px", height:"20px"}} alt="Image 2" onClick={() => handleClick(11)} />
              <img style={{width:"107px", height:"158px",marginLeft:"5px"}} src={image1} alt="이미지"  ></img>                
              </div>
             </div>
             <div style={{marginLeft:"5px",marginTop:"5px"}} >
             <div  style={{width:"107px" , height:"33px",backgroundColor:"#A4A4A4",float:"left"}}>
                <h6 style={{ marginLeft: '5px', marginTop: '5px',fontWeight:"600" }}>제목제목</h6>
                <h6 style={{ marginLeft: '5px', marginTop: '-25px',fontWeight:"400" }}>작가명</h6></div>
             <div  style={{width:"107px",marginLeft:"5px" , height:"33px",backgroundColor:"#A4A4A4",float:"left"}}>
                <h6 style={{ marginLeft: '5px', marginTop: '5px',fontWeight:"600" }}>제목제목</h6>
                <h6 style={{ marginLeft: '5px', marginTop: '-25px',fontWeight:"400" }}>작가명</h6></div>
             <div  style={{width:"107px",marginLeft:"5px" , height:"33px",backgroundColor:"#A4A4A4",float:"left"}}>
                <h6 style={{ marginLeft: '5px', marginTop: '5px',fontWeight:"600" }}>제목제목</h6>
                <h6 style={{ marginLeft: '5px', marginTop: '-25px',fontWeight:"400" }}>작가명</h6></div>
             </div>
            
             
           
                   
         </div>
         </div>
         <MobileFooter style={{position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1}} />
    
     </div>
    )
}

export default MobileFeedbackpage;