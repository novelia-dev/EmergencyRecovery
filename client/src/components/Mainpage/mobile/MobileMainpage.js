import React from 'react';
import MobileNavbar from '../../Navbar/MobileNavbar';
import MobileFooter from '../../Footer/MobileFooter';
import image from "../../Image/모바일 배너.png";
import image1 from "../../Image/illumination-5173540_1920.jpg";
import search from "../../Image/search .png";
import Logo from "../../Image/풀네임로고.png";
import facebook from '../../Image/facebook.png';
import twitter from '../../Image/twitter.png';
import instagram from '../../Image/instagram.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function MobileLikeTagSlider() {
    const slideWidth = 87 + 5; 
    const slideCount = Math.floor(360 / slideWidth); 
    const settings = {
      infinite: true,
      slickarrow: true,
      speed: 500,
      slidesToShow: slideCount,
     slideToScroll: slideCount,
      autoplay: true,
      autoplaySpeed: 5000,
      swipeToSlide: true
     
     
    };
      return (
        <div >
            <Slider {...settings} >
            <div style={{padding: '0 5px',width:"87px"}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <div style={{marginTop:"5px",width:"87px",height:"14px",backgroundColor:"#EEEEEE",fontSize:"10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</div>
            </div>
            <div style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <div style={{marginTop:"5px",width:"87px",height:"14px",backgroundColor:"#EEEEEE",fontSize:"10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</div>
            </div>
            <div style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <div style={{marginTop:"5px",width:"87px",height:"14px",backgroundColor:"#EEEEEE",fontSize:"10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</div>
            </div>
            <div style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <div style={{marginTop:"5px",width:"87px",height:"14px",backgroundColor:"#EEEEEE",fontSize:"10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</div>
            </div>
            <div  style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <div style={{marginTop:"5px",width:"87px",height:"14px",backgroundColor:"#EEEEEE",fontSize:"10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</div>
            </div>
            <div  style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <div style={{marginTop:"5px",width:"87px",height:"14px",backgroundColor:"#EEEEEE",fontSize:"10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</div>
            </div>
            <div  style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <div style={{marginTop:"5px",width:"87px",height:"14px",backgroundColor:"#EEEEEE",fontSize:"10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</div>
            </div>
            </Slider>
        </div>
      );
}
function MobileScrapSlider() {
    const slideWidth = 87 + 5; 
    const slideCount = Math.floor(360 / slideWidth); 
    const settings = {
      infinite: true,
      slickarrow: true,
      speed: 500,
      slidesToShow: slideCount,
     slideToScroll: slideCount,
      autoplay: true,
      autoplaySpeed: 5000,
      swipeToSlide: true
     
     
    };
      return (
        <div >
            <Slider {...settings} >
            <div style={{padding: '0 5px',width:"87px"}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <div style={{marginTop:"5px",width:"87px",height:"14px",backgroundColor:"#EEEEEE",fontSize:"10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</div>
            </div>
            <div style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <div style={{marginTop:"5px",width:"87px",height:"14px",backgroundColor:"#EEEEEE",fontSize:"10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</div>
            </div>
            <div style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <div style={{marginTop:"5px",width:"87px",height:"14px",backgroundColor:"#EEEEEE",fontSize:"10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</div>
            </div>
            <div style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <div style={{marginTop:"5px",width:"87px",height:"14px",backgroundColor:"#EEEEEE",fontSize:"10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</div>
            </div>
            <div  style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <div style={{marginTop:"5px",width:"87px",height:"14px",backgroundColor:"#EEEEEE",fontSize:"10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</div>
            </div>
            <div  style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <div style={{marginTop:"5px",width:"87px",height:"14px",backgroundColor:"#EEEEEE",fontSize:"10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</div>
            </div>
            <div  style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <div style={{marginTop:"5px",width:"87px",height:"14px",backgroundColor:"#EEEEEE",fontSize:"10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</div>
            </div>
            </Slider>
        </div>
      );
}
function MobileFeedbackSlider() {
    const slideWidth = 87 + 5;
    const slideCount = Math.floor(360 / slideWidth); 
    const settings = {
      infinite: true,
      slickarrow: true,
      speed: 500,
      slidesToShow: slideCount,
     slideToScroll: slideCount,
      autoplay: true,
      autoplaySpeed: 5000,
      swipeToSlide: true
     
     
    };
      return (
        <div >
            <Slider {...settings} >
            <div style={{padding: '0 5px',width:"87px"}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <div style={{marginTop:"5px",width:"87px",height:"14px",backgroundColor:"#EEEEEE",fontSize:"10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</div>
            </div>
            <div style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <div style={{marginTop:"5px",width:"87px",height:"14px",backgroundColor:"#EEEEEE",fontSize:"10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</div>
            </div>
            <div style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <div style={{marginTop:"5px",width:"87px",height:"14px",backgroundColor:"#EEEEEE",fontSize:"10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</div>
            </div>
            <div style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <div style={{marginTop:"5px",width:"87px",height:"14px",backgroundColor:"#EEEEEE",fontSize:"10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</div>
            </div>
            <div  style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <div style={{marginTop:"5px",width:"87px",height:"14px",backgroundColor:"#EEEEEE",fontSize:"10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</div>
            </div>
            <div  style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <div style={{marginTop:"5px",width:"87px",height:"14px",backgroundColor:"#EEEEEE",fontSize:"10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</div>
            </div>
            <div  style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <div style={{marginTop:"5px",width:"87px",height:"14px",backgroundColor:"#EEEEEE",fontSize:"10px", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</div>
            </div>
            </Slider>
        </div>
      );
}

function MobileMainpage(){
    return(
        <div style={{position: "relative", height: "calc(100vh - 50px)",borderWidth:"1px",'border-style':"solid",'border-color':"#EEEEEE",width:"360px"}}>
          
            <MobileNavbar  style={{position: "fixed", top: 0, left: 0, right: 0, zIndex: 1}} />
            <div style={{ width:"33hpx",height: "calc(100% - 275px)", overflowX: 'hidden',overflowY: "scroll"}}>
            <div>
                
            <div style={{width:"360px" , height:"250px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",backgroundColor:"#EEEEEE"}}>
              
            </div>
            <hr style={{marginTop:"20px",borderWidth:"2px",'border-style':"solid",'border-color':"#EEEEEE",width:"330px"}} />
            <div style={{marginLeft:"15px"}}>
              <div style={{marginBottom:"9px",fontWeight:"600",fontFamily: 'Roboto',fontStyle: 'Regular',fontSize: "12px",Align: 'Center',verticalAlign: 'Center',fontWeight:"400"}}>추천 작품</div>
              
              <div style={{marginTop:"10px"}}><MobileLikeTagSlider/></div>
            </div>
            <hr style={{marginTop:"20px",borderWidth:"2px",'border-style':"solid",'border-color':"#EEEEEE",width:"330px"}}/>
            <div style={{marginLeft:"15px"}}>
            <div style={{marginBottom:"9px",fontWeight:"600",fontFamily: 'Roboto',fontStyle: 'Regular',fontSize: "12px",Align: 'Center',verticalAlign: 'Center',fontWeight:"400"}}>스크랩 작품</div>
              
            <MobileScrapSlider/>
            </div>
            <hr style={{marginTop:"20px",borderWidth:"2px",'border-style':"solid",'border-color':"#EEEEEE",width:"330px"}}/>
            
            <div style={{marginLeft:"15px"}}>
            <div style={{marginBottom:"9px",fontWeight:"600",fontFamily: 'Roboto',fontStyle: 'Regular',fontSize: "12px",Align: 'Center',verticalAlign: 'Center',fontWeight:"400"}}>피드백 작품</div>
             <MobileFeedbackSlider/>
             
            </div>
            </div>
            <div style={{marginTop:"20px",height:"50px",background: "#EEEEEE"}}>
       
      
          <a href="/privacy"style={{marignTop:"10px", marginLeft: "-155px",fontSize:"10px",fontWeight:"400" }} >개인정보처리방침</a>
          <a style={{ marginTop:"10px",marginLeft: "5px",fontSize:"10px",fontWeight:"400" }} href="/notice">공지사항</a>
          <a style={{ marignTop:"10px",marginLeft: "5px",fontSize:"10px",fontWeight:"400" }} href="/ask">문의하기</a>
          <div style={{marginTop:"25px",marginLeft: "15px", float: "left",fontSize:"10px",fontWeight:"400" }}>비지니스 메일 novelia@gmail.com</div>
        <div style={{marginTop:"-5px"}}>
        <img
          src={facebook}
          style={{ marginLeft: "65.17px",float: "left",width:"8.66px",height:"15.83px"}}
          alt="페이스북"
        />
        <img
          style={{ marginLeft: "20.67px", float: "left",width:"10px",height:"15px" }}
          src={twitter}
          alt="트위터"
        />
        <img
          style={{ marginLeft: "15.83px", float: "left",width:"18.83px",height:"18.33px" }}
          src={instagram}
          alt="인스타그램"
        />
        </div>
       
        </div>
        <div style={{height:"54px"}}><img
          style={{ marginLeft: "150px",marginTop:"20px",width:"61px",height:"15px" }}
          src={Logo}
          alt="풀네임로고"
        /></div>
            </div>
            
            
            <MobileFooter style={{position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1}} />
        </div>
    )
}

export default MobileMainpage;