import React,{useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MobileNavbar from '../../Navbar/MobileNavbar';
import MobileFooter from '../../Footer/MobileFooter';
import image from '../../Image/Ticket.png';
import starbucks from '../../Image/Starbucks.png';

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
                    {closable && <button style={{backgroundColor:"#FFFFFF",width:"30px", height:"30px" , marginLeft:"220px"}} className="modal-close" onClick={close} >X</button>}
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
`;

const ModalInner = styled.div`
    box-sizing: border-box;
    position: relative;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.5);
    background-color: #fff;
    border-radius: 10px;
    max-width: 300px;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    padding: 40px 20px;
`;


function MobileMyPointShop(){

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }


    return(
        <div>
            <MobileNavbar />
            <div>
               <h4>포인트샵</h4>
               <hr /> 
                 <h5>8000 point</h5>
               <table>
                <tr>
                <h5>획득 포인트 : 8000</h5>
                </tr>
                <tr>
                <td><h5>사용 포인트 : 8000</h5></td>
                <td>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<button>포인트 획득/사용내역</button></td> 
                </tr>
                <tr>
                <td><h5>잔여 포인트 : 8000</h5></td>
                </tr>
                </table>
                <hr />
                <h4>경품 응모권</h4>
                <img alt="경품 응모권" src={image} />
                <h5>1회 당 1200point</h5>
                <table>
                  <td><h6>매일 오전 9시 문자로 당첨경품 지급</h6></td>
                  <td>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <button onClick={openModal}>경품 응모하기</button>
                    {
                      modalVisible && <Modal 
                      visible={modalVisible}
                      closable={true}
                      maskClosable={true}
                      onClose={closeModal}>
                          <div>
                            <h4>당첨! 축하합니다.</h4>
                            <img src={starbucks} alt="당첨 이미지" />
                            <h5>스타벅스 아메리카노 기프티콘</h5>
                            <button>확인</button>
                          </div>
                      </Modal>
                    }
                    </td>
                </table>
                <hr />
                <br />
                <table>
                <tr>
                       
                        <td> <div className="contanier-fluid">
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card">
                    <div class="img-square-wrapper" style={{marginTop:"25px"}}>
                      <img alt="사진" />
                    </div>
                      <div class="card-body" >
                        <h4 class="card-title">뿌링클 치킨 기프티콘</h4>
                        
                      </div>
                 </div>
              </div>
            </div>
          </div></td>
                        <td> <div className="contanier-fluid">
            <div class="row">
              <div class="col-12 mt-3">
                 <div class="card">
                    <div class="img-square-wrapper" style={{marginTop:"25px"}}>
                      <img alt="사진" />
                    </div>
                      <div class="card-body" >
                        <h4 class="card-title">카카오페이지 5000원 기프티콘</h4>
                      </div>
                 </div>
              </div>
            </div>
          </div></td>
               
                    </tr> <tr>
                       
                       <td> <div className="contanier-fluid">
           <div class="row">
             <div class="col-12 mt-3">
                <div class="card">
                   <div class="img-square-wrapper" style={{marginTop:"25px"}}>
                     <img alt="사진" src={starbucks} />
                   </div>
                     <div class="card-body" >
                       <h4 class="card-title">스타벅스 아메리카노 기프티콘</h4>
                     </div>
                </div>
             </div>
           </div>
         </div></td>
                       <td> <div className="contanier-fluid">
           <div class="row">
             <div class="col-12 mt-3">
                <div class="card">
                   <div class="img-square-wrapper" style={{marginTop:"25px"}}>
                     <img alt="사진" />
                   </div>
                     <div class="card-body" >
                       <h4 class="card-title">편의점 3000원 기프티콘</h4>
                     </div>
                </div>
             </div>
           </div>
         </div></td>
              
                   </tr>
                    
                </table>
            </div>
           
            <MobileFooter />
        </div>
    )
}   

export default MobileMyPointShop;