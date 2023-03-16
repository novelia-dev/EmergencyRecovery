import React,{useState} from "react";
import image from '../Image/Starbucks.png';
import image1 from '../Image/Ticket.png';
import Result from "../Prize/Prize";
import { getRandomPrize } from "../Prize/Prize";
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
            <div>
                <h4>포인트 샵</h4>
                <h5>모은 포인트를 사용할 수 있습니다.</h5>
            </div>
            <div>
                <table>
                    <td><img alt="사용자사진" /></td>
                    <td>
                        <h6>획득 포인트 : 8000</h6>
                        <h6>사용 포인트 : 8000</h6>
                        <h6>잔여 포인트 : 8000</h6>
                    </td>
                    <td>
                        <tr><button>경품 응모하기</button></tr>
                        <tr><button>포인트 획득/사용내역</button>
                        </tr>
                    </td>
                </table>
            </div>
            <br />
            <div>
                <h5>경품 응모권(매일 오전 9시 문자로 당첨경품 지급, 1회 당 1200point)</h5>
            </div>
            <div>
                <table>
                    <td><img src={image1} style={{width:"300px", height:"159.99px"}} alt="기프티콘 이미지" /></td>
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
                                       <table>
                                        <tr><img src={image} /></tr>
                                        <tr>{prize.name}</tr>
                                       </table>
                                      <button onClick={handleClick}>확인하기</button>
                                    </div>
                                 </Modal>
                      }
                    </td>
                </table>
            </div>
             <div>
                <h5>경품(자체 포인트 제외)목록</h5>
              </div>
            <div>
                <table>
                    <td><div className="contanier-fluid">
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
                    <td><div className="contanier-fluid">
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
                    <td><div className="contanier-fluid">
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
                    <td><div className="contanier-fluid">
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
                </table>
            </div>
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