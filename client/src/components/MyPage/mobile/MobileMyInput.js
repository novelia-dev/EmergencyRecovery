import React,{useState} from 'react';
import MobileNavbar from '../../Navbar/MobileNavbar';
import MobileFooter from '../../Footer/MobileFooter';
import { getRandomPrize } from '../../Prize/Prize';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import image from '../../Image/Starbucks.png';
import image1 from '../../Image/Ticket.png';

function exchange(){
    if(window.confirm('정말 교환하시겠습니까?'))
    {
        alert("교환이 완료되었습니다.");
    }else{
        return;
    }
}

function MobileMyInput(){

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
            <MobileNavbar />
            <div>
              <h4>포인트샵</h4>
               <hr /> 
               <table>
                <td><h5>8000 point</h5></td>
               </table>
               <hr />
               <h4>경품 응모하기</h4>
               <hr />
               <img src={image1} style={{width:"300px", height:"159.99px"}} alt="경품" />
               <table>
                <tr>
                <td><h5>3월 2주차 경품 응모권 (3월 6일 발표)</h5></td>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td>
                <button onClick={openModal}>응모하기</button>
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
                </td>   
                </tr>
               </table>
               <hr />
               <h5>상품 더 보기</h5>
               <table>
               <tr>
                       
                       <td> <div className="contanier-fluid">
           <div class="row">
             <div class="col-12 mt-3">
                <div class="card">
                   <div class="img-square-wrapper" style={{marginTop:"25px"}}>
                     <img src={image}  alt="사진" />
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
                     <img src={image} alt="사진" />
                   </div>
                     <div class="card-body" >
                       <h4 class="card-title">스타벅스 아메리카노 기프티콘</h4>
                       
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

export default MobileMyInput;