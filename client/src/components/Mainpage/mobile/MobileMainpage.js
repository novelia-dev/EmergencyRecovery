import React from 'react';
import MobileNavbar from '../../Navbar/MobileNavbar';
import MobileFooter from '../../Footer/MobileFooter';
import image from "../../Image/모바일 배너.png";
import image1 from "../../Image/illumination-5173540_1920.jpg";
import search from "../../Image/search .png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Tag from "./MobileMainTagButton";

function MobileLikeTagSlider(){
    const slideWidth = 87 + 5;

    const slideCount = Math.floor(360 / slideWidth );

    const settings = {
        infinite: true,
        slickarrow: true,
        speed: 500,
        slidesToShow: slideCount,
        slideToScroll: slideCount,
        autoplay: true,
        autoplaySpeed: 5000,
        swipeToSlide: true,
    };

    return (
        <div >
            <Slider {...settings} >
            <div style={{padding: '0 5px',width:"87px"}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <h5 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>아빠가 힘을 숨김 &nbsp;</h5>
            </div>
            <div style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <h5 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>변경백 서사는 황제였다 &nbsp;</h5>
            </div>
            <div style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <h5 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>결혼하지 않으면 죽습니다 &nbsp;</h5>
            </div>
            <div style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <h5 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>무림세가 천대받는 손녀딸이 되었다</h5>
            </div>
            <div  style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <h5 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</h5>
            </div>
            <div  style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <h5 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</h5>
            </div>
            <div  style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <h5 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</h5>
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
            <h5 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>아빠가 힘을 숨김 &nbsp;</h5>
            </div>
            <div style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <h5 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>변경백 서사는 황제였다 &nbsp;</h5>
            </div>
            <div style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <h5 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>결혼하지 않으면 죽습니다 &nbsp;</h5>
            </div>
            <div style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <h5 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>무림세가 천대받는 손녀딸이 되었다</h5>
            </div>
            <div  style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <h5 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</h5>
            </div>
            <div  style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <h5 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</h5>
            </div>
            <div  style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <h5 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</h5>
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
            <h5 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>아빠가 힘을 숨김 &nbsp;</h5>
            </div>
            <div style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <h5 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>변경백 서사는 황제였다 &nbsp;</h5>
            </div>
            <div style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <h5 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>결혼하지 않으면 죽습니다 &nbsp;</h5>
            </div>
            <div style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <h5 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>무림세가 천대받는 손녀딸이 되었다</h5>
            </div>
            <div  style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <h5 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</h5>
            </div>
            <div  style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <h5 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</h5>
            </div>
            <div  style={{padding: '0 5px'}}>
            <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" />
            <h5 style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>제목제목제목제목제목제목제목제목</h5>
            </div>
            </Slider>
        </div>
      );
}

function MobileMainpage(){
    return(
        <div style={{position: "relative", height: "calc(100vh - 50px)",borderWidth:"1px",'border-style':"solid",'border-color':"#EEEEEE",width:"360px"}} >
            <MobileNavbar style={{position: "fixed", top: 0, left: 0, right: 0, zIndex: 1}}/>
            <div style={{ width:"33hpx",height: "calc(100% - 275px)", overflowX: 'hidden',overflowY: "scroll"}}>
            <div>
                <div>
                <table>
                    <td><img src={search} alt="search" style={{marginLeft:"15px", marginTop:"10px"}} /></td>
                    <td><input style={{marginLeft:"10px",width:"290px",borderTop:'none',borderLeft:'none',borderRight:'none'}} type="text" /></td>
                </table>
            </div>
            <div style={{width:"360px" , height:"250px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",backgroundColor:"#EEEEEE"}}>

            </div>
            <hr style={{borderWidth:"2px",'border-style':"solid",'border-color':"#EEEEEE",width:"330px"}} />
            <div style={{marginLeft:"15px",height:"224px"}}>
              <div style={{marginBottom:"9px",fontWeight:"600",fontFamily: 'Roboto',fontStyle: 'Regular',fontSize: "12px",Align: 'Center',verticalAlign: 'Center'}}>선호태그 작품</div>
              <Tag />
              <div style={{marginTop:"10px"}}><MobileLikeTagSlider/></div>
            </div>
            <hr style={{borderWidth:"2px",'border-style':"solid",'border-color':"#EEEEEE",width:"330px"}}/>
            <div style={{marginLeft:"15px",height:"224px"}}>
              <h4>스크랩 작품</h4>
            <MobileScrapSlider/>
            </div>
            <hr style={{borderWidth:"2px",'border-style':"solid",'border-color':"#EEEEEE",width:"330px"}}/>

            <div style={{marginLeft:"15px",height:"224px"}}>
              <h4>피드백 작품</h4>
             <MobileFeedbackSlider/>
            </div>
            <div style={{width:"360px",height:"120px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",backgroundColor:"#EEEEEE"  }}></div>
            <div style={{marginTop:"10px",width:"360px",height:"120px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",backgroundColor:"#EEEEEE"  }}></div>
            <div style={{marginTop:"10px",width:"360px",height:"120px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",backgroundColor:"#EEEEEE"  }}></div>
            </div>
            </div>
            
            <MobileFooter style={{position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1}} />
        </div>
    )
}
export default MobileMainpage;