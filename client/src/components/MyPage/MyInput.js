import React,{useState} from "react";
import image from '../Image/Starbucks.png';
import image1 from '../Image/Ticket.png';
import image2 from '../Image/Biguser.png';
import Result from "../Prize/Prize";
import { getRandomPrize } from "../Prize/Prize";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from "../Navbar/SimpleNavbar";
import Footer from "../Footer/Footer";
function exchange(){
    if(window.confirm("정말 교환하시겠습니까?") == true)
    {
      alert("교환이 완료되었습니다!")
    }
    else{
      return;
    }
  }

  function movetoStats(){
    window.location.href="/mypointstats";
  }

  function movetoGift(){
    window.location.href="/mygift";
  }

function MyInput(){

  const [prize, setPrize] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  function handleClick(){
    const randomPrize = getRandomPrize();
    setPrize(randomPrize);
    setModalVisible(false);
  }

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
                    {closable && <button style={{backgroundColor:"#FFFFFF",width:"30px", height:"30px", marginLeft:"500px"}} className="modal-close" onClick={close} >X</button>}
                    {children}
                </ModalInner>
            </ModalWrapper>
        </>
    )
}

Modal.propTypes = {
    visible: PropTypes.bool,
}



    return(
        <div>
          <Navbar/>
            <div style={{marginLeft:"360px",width:"1200px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",backgroundColor:"#D9D9D9"  }}>
                <div style={{marginLeft:"15px"}}>
                <h4>포인트 샵</h4>
                <h5>모은 포인트를 사용할 수 있습니다.</h5>
                </div>
            </div>
            <div className="container-fluid" style={{marginLeft:"360px",width:"1200px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5" }}>
               <div class = "row">
                <div class="col-12 mt-3">
                  <div class="card-horizontal">
                    <div class="img-square-wrapper">
                    <img src={image2} alt="사용자사진" />
                    </div>
                    <div class="card-body" style={{marginLeft:"15px"}}>
                      <p class="card-text">
                        <div style={{float:"left"}}>
                        <h4 style={{marginTop:"150px"}}>획득 포인트 : 8000 &nbsp; &nbsp;</h4>
                        <h4>사용 포인트 : 8000</h4>
                        <h4 >잔여 포인트 : 8000</h4>
                        </div>
                        <button style={{marginLeft:"53px",marginTop:"209px",width:"252px",height:"45px",fontSize:"16px",fontWeight:"700",alignItems:"center",textAlign:"center",backgroundColor:"#FFFFFF",color:"#000000", border:"1px solid #AA0140"}} onClick={movetoStats}>포인트 획득/사용내역</button>   
                    </p>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
            <div style={{marginLeft:"360px",width:"1200px",height:"120px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",backgroundColor:"#EEEEEE"  }}>
              </div>
   
            <div style={{marginLeft:"360px",width:"1200px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>
            <div style={{marginLeft:"15px"}}>
                <h5>경품 응모권(매일 오전 9시 문자로 당첨경품 지급, 1회 당 1200point)</h5>
            </div>
            <div>
                
                  <img src={image1} style={{width:"720px", height:"273px"}} alt="기프티콘 이미지" />
                  <button style={{width:"131px",height:"45px",alignItems:"center",textAlign:"center",backgroundColor:"#AA0140",color:"#FFFFFF", border:"1px solid #D9D9D9",borderRadius:"4px"}} onClick={openModal}>응모하기</button>
                      {
                               modalVisible && <Modal
                                 visible={modalVisible}
                                 closable={true}
                                 maskClosable={true}
                                 onClose={closeModal}>
                                    <div>
                                      <h4>경품 응모 결과</h4>
                                      {prize && (
                                        <table>
                                        <tr><img src={image} /></tr>
                                        <tr>{prize.name}</tr>
                                       </table>
                                      )}
                                      <button onClick={handleClick}>확인하기</button>
                                      {console.log(prize)}
                                      
                                    </div>
                                 </Modal>
                      }
            </div>
            <div style={{marginLeft:"15px"}}>
                <h5>경품(자체 포인트 제외)목록</h5>
              </div>
            <div>
                <table>
                    <td><div className="contanier-fluid">
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card">
                    <div class="img-square-wrapper" style={{marginTop:"25px"}}>
                      <img style={{width:"282px",height:"272px"}} src={image} alt="사진" />
                    </div>
                      <div class="card-body" >
                        <h4 class="card-title" style={{marginLeft:"58px"}}>뿌링클 치킨 기프티콘</h4>
                      </div>
                 </div>
              </div>
            </div>
          </div></td>
                    <td><div className="contanier-fluid" style={{marginLeft:"24px"}}>
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card">
                    <div class="img-square-wrapper" style={{marginTop:"25px"}}>
                      <img style={{width:"282px",height:"272px"}} src={image} alt="사진" />
                    </div>
                      <div class="card-body" >
                        <h4 class="card-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;카카오페이지 5000원 기프티콘</h4>
                      </div>
                 </div>
              </div>
            </div>
          </div></td>
                    <td><div className="contanier-fluid" style={{marginLeft:"24px"}}>
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card">
                    <div class="img-square-wrapper" style={{marginTop:"25px"}}>
                      <img style={{width:"282px",height:"272px"}} src={image} alt="사진" />
                    </div>
                      <div class="card-body" >
                        <h4 class="card-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;스타벅스 아메리카노 기프티콘</h4>
                      </div>
                 </div>
              </div>
            </div>
          </div></td>
                    <td>
          <div className="contanier-fluid"style={{marginLeft:"24px"}}>
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card">
                    <div class="img-square-wrapper" style={{marginTop:"25px"}}>
                      <img style={{width:"282px",height:"272px"}} src={image} alt="사진" />
                    </div>
                      <div class="card-body" >
                        <h4 class="card-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;편의점 3000원 기프티콘</h4>
                      </div>
                 </div>
              </div>
            </div>
          </div></td>
                </table>
            </div>
            </div>
            <Footer/>
        </div>
    )
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
`;

const ModalInner = styled.div`
    box-sizing: border-box;
    position: relative;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.5);
    background-color: #fff;
    border-radius: 10px;
    max-width: 600px;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    padding: 40px 20px;
`;

export default MyInput;