import React,{useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MobileNavbar from '../../Navbar/MobileNavbar';
import MobileFooter from '../../Footer/MobileFooter';
import image1 from '../../Image/illumination-5173540_1920.jpg';
import Tag from './MobileFavoriteButton';
function Modal({className, onClose , maskClosable , closable , visible, children})
{

    const onMaskClick = (e) => {
        if(e.target === e.currentTarget)
        {
            onClose(e)
        }
    }

    const close = (e) => {
        if(onClose){
            onClose(e)
        }
    }

    return(
        <>
            <ModalOverlay visible = {visible} />
            <ModalWrapper className ={className} onClick={maskClosable ? onMaskClick : null} tabIndex="-1" visible={visible}>
                <ModalInner tabIndex ="0" className = "modal-inner">
                    {closable && <button style={{backgroundColor:"#FFFFFF",borderRadius:"50px",position:"absolute",width:"20px",height:"20px",marginLeft:"4px",marginTop:"4px"}} className="modal-close" onClick={close}>×</button>}
                    {children}
                </ModalInner>
            </ModalWrapper>
        </>
    )
}

Modal.propTypes = {
    visible: PropTypes.bool,
}

const ModalWrapper = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow: auto;
    outline: 0;
   

`;

const ModalOverlay = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0,0,0,0.6);
    z-index: 999;
    width:360px;
    height:545px;
`;

const ModalInner = styled.div`
    box-sizing: border-box;
    position: relative;
    box-shadow: 0 0  0 rgba(0, 0, 0, 0.6);
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    margin-left:59px;
    margin-top:270px;
    width:230px;
    height:434px;
    transform: translateY(-50%);
   
`;


function MobileFavoritepage(){

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }
    const [buttonStyles, setButtonStyles] = useState([
        { backgroundColor: 'white', color: '' ,border: "0.5px solid black",borderRadius: "50px",fontSize: "10px"},
        { backgroundColor: 'white', color: '' ,border: "0.5px solid black",borderRadius: "50px",fontSize: "10px"},
        { backgroundColor: 'white', color: '' ,border: "0.5px solid black",borderRadius: "50px",fontSize: "10px"},
        
      ]);
    
      const handleClick = (index, backgroundColor) => {
        const newStyles = [...buttonStyles];
        const isSameColor = newStyles[index].backgroundColor === backgroundColor;
        newStyles[index] = {
          backgroundColor: isSameColor ? '' : backgroundColor,
          color: isSameColor ? '' : 'white',
          border: "0.5px solid #424242",borderRadius: "50px",fontSize: "10px",
        };
        setButtonStyles(newStyles);
      };

    return(
    <div style={{position: "relative", height: "calc(100vh - 50px)",borderWidth:"1px",'border-style':"solid",'border-color':"#EEEEEE",width:"360px"}}>
          
         <MobileNavbar  style={{position: "fixed", top: 0, left: 0, right: 0, zIndex: 1}} />
         <div style={{ width:"33hpx",height: "calc(100% - 275px)", overflowX: 'hidden',overflowY: "scroll"}}>
            <div>
                <h4 style={{marginLeft:"15px"}}>선호태그 작품</h4>
                <div style={{marginLeft:"15px"}}>
                <button style={buttonStyles[0]}onClick={() => handleClick(0, '#424242')}>홈</button>
                &nbsp;
                &nbsp;
                <button style={buttonStyles[1]}onClick={() => handleClick(1, '#424242')}>객관식작</button>
                &nbsp;
                &nbsp;
                <button style={buttonStyles[2]}onClick={() => handleClick(2, '#424242')}>주관식작</button>
                </div>
                <div style={{marginLeft:"15px",marginTop:"10px"}}>
                    <Tag/>
                </div>
                <hr style={{borderWidth:"2px",'border-style':"solid",'border-color':"#848484",width:"330px"}}/>
                
                
                <div>
                <img style={{width:"107px", height:"158px",marginLeft:"8px"}} src={image1} alt="이미지" onClick={openModal} ></img>
                <img style={{width:"107px", height:"158px",marginLeft:"5px"}} src={image1} alt="이미지" onClick={openModal} ></img>
                <img style={{width:"107px", height:"158px",marginLeft:"4px"}} src={image1} alt="이미지" onClick={openModal} ></img>
                </div>
                <div style={{marginLeft:"8px",marginTop:"5px"}} >
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
                <img style={{width:"107px", height:"158px",marginLeft:"8px"}} src={image1} alt="이미지" onClick={openModal} ></img>
                <img style={{width:"107px", height:"158px",marginLeft:"5px"}} src={image1} alt="이미지" onClick={openModal} ></img>
                <img style={{width:"107px", height:"158px",marginLeft:"4px"}} src={image1} alt="이미지" onClick={openModal} ></img>
                </div>
                <div style={{marginLeft:"8px",marginTop:"5px"}} >
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
                <img style={{width:"107px", height:"158px",marginLeft:"8px"}} src={image1} alt="이미지" onClick={openModal} ></img>
                <img style={{width:"107px", height:"158px",marginLeft:"5px"}} src={image1} alt="이미지" onClick={openModal} ></img>
                <img style={{width:"107px", height:"158px",marginLeft:"4px"}} src={image1} alt="이미지" onClick={openModal} ></img>
                </div>
                <div style={{marginLeft:"8px",marginTop:"5px"}} >
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
                <img style={{width:"107px", height:"158px",marginLeft:"8px"}} src={image1} alt="이미지" onClick={openModal} ></img>
                <img style={{width:"107px", height:"158px",marginLeft:"5px"}} src={image1} alt="이미지" onClick={openModal} ></img>
                <img style={{width:"107px", height:"158px",marginLeft:"4px"}} src={image1} alt="이미지" onClick={openModal} ></img>
                </div>
                <div style={{marginLeft:"8px",marginTop:"5px"}} >
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
               
                
                { modalVisible && <Modal visible={modalVisible} closable={true} maskClosable={true}onClose={closeModal}>
                                     <div>
                                    
               
                <img src={image1} alt="작품이미지" style={{position:"relative",marginLeft:"4px",width:"222px", height:"327px"}} />
                
                <h6 style={{ marginLeft: '15px', marginTop: '5px',fontWeight:"600",color:"white",float:"left"}}>제목제목</h6><h6 style={{ marginLeft: '165px', marginTop: '5px',fontWeight:"600",color:"white" }}>작가명</h6>
                                     <div style={{display:"flex",position:"absolute",marginLeft:"22px",marginTop:"-10px"}}>
                                        <button style={{borderRadius: "50px",fontSize: "10px"}}>전체작품</button>&nbsp;&nbsp;
                                        <button style={{borderRadius: "50px",fontSize: "10px"}}>주관식작</button>&nbsp;&nbsp;
                                        <button style={{borderRadius: "50px",fontSize: "10px"}}>객관식작</button>
                                        </div>
                                        <div style={{display:"flex",position:"absolute",marginLeft:"22px",marginTop:"20px"}}>
                                        <button style={{borderRadius: "50px",fontSize: "10px"}}>전체작품</button>&nbsp;&nbsp;
                                        <button style={{borderRadius: "50px",fontSize: "10px"}}>주관식작</button>&nbsp;&nbsp;
                                        <button style={{borderRadius: "50px",fontSize: "10px"}}>객관식작</button>
                                        </div>
                                        
                                     </div>
                                     
                                 </Modal>
                            }
                            
                      
            </div>
            </div>
            <MobileFooter />
       
        </div>
    )
}
export default MobileFavoritepage;