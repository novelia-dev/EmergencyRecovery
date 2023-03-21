import React,{useState} from 'react';
import MobileNavbar from '../../Navbar/MobileNavbar';
import image from "../../Image/illumination-5173540_1920.jpg";
import PropTypes from 'prop-types';
import styled from 'styled-components';


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


function MobileDetailScrap(){

    const [modalVisible, setModalVisible] = useState(false);
    const [click1, setClick1] = useState("");
    const [click2, setClick2] = useState("");
    const [click3, setClick3] = useState("");
    const handleClick1 = (e) => {
        setClick1(e.target.value);
    }

    const handleClick2 = (e) => {
        setClick2(e.target.value);
    }
    const handleClick3 = (e) => {
        setClick3(e.target.value);
    }


    const openModal = () => {
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    function movetoFeedback(){

        var one = click1;
        var two = click2;
        var three = click3;

        if(one !== "" && two === "" && three === "")
        {
            alert('맞았습니다');
            window.location.href="/mobilefeedback/:id/choose"
            
        }
        else if(one === "" && two !== "" && three === "")
        {
            alert('틀렸습니다.');
            window.location.href="/mobile";
        }
        else if(one === "" && two === "" && three !== "")
        {
            alert('틀렸습니다.');
            window.location.href="/mobile";
        }
    }

    function movetotext(){
        window.location.href="/mobilescrap/:id/:text";
    }

    return(
        <div>
            <MobileNavbar />
            <div>
            <table>
                <td>
                    <div className="container-fluid">
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                    <img alt="작품이미지" src={image} style={{width:"150px", height:"255px"}} />
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">아빠가 힘을 숨김</h4>
                                        <p class="card-text">
                                        <h5>고은채</h5>
                                        <h5>선택태그</h5>
                                     <table>
                                        <tr>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                                        </tr>
                                        <tr>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                                        </tr>
                                         <tr>
                                             <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                                        </tr>
                                        <tr>
                                             <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px",color:"#000000"}}>선호태그</button></td>
                                        </tr>                                
                                 </table>
                                       
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    </td>
                </table>
                <div>
                    <hr />
                    <table>
                        <td><h4>|</h4></td>
                        <td><h4>&nbsp; 로맨스 판타지</h4></td>
                        <td><h4>&nbsp;|</h4></td>
                        <td><h4>&nbsp;D-14</h4></td>
                        <td><h4>&nbsp;|</h4></td>
                        <td><h4>&nbsp;10/30</h4></td>
                        <td><h4>&nbsp;|</h4></td>
                        <td><h4>&nbsp;10/10</h4></td>
                        <td><h4>&nbsp;|</h4></td>
                    </table>    
                </div>
                <div>
                <h5>작품소개</h5>    
                </div>
                <hr />
                 <input type="text" value="내용내용내용" style={{width:"330px",height:"140px",border:'none'}} />
                 <div>
                   <div className="container-fluid">
                    <div class="row">
                        <div class="col-12 mt-3">
                            <div class="card-horizontal" onClick={movetotext}>
                                <div class="img-square-wrapper">
                                    <img alt="작품이미지" src={image} style={{width:"41px",height:"60px"}} />
                                </div>
                                <div class="card-body">
                                    <h4 class="card-title">작품 내용보기</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                 </div>
                 <br />
                 <button>객관식</button>
                 <button>주관식</button>
                 <button onClick={openModal}>피드백하기</button>
                 {
                    modalVisible && <Modal
                    visible={modalVisible}
                    closable={true}
                    maskClosable={true}
                    onClose={closeModal}
                    >
                    <div>
                        <h4>Quiz</h4>
                        <h4>다음 중 주인공의 이름은?</h4>
                            <input type="radio" name="answer" style={{float:"left",width:"24px", height:"24px"}} onClick={handleClick1} />
                            <h5>주인공</h5>
                            <input type="radio" name="answer" style={{float:"left", width:"24px", height:"24px"}} onClick={handleClick2} />
                            <h5>오답1</h5>
                            <input type="radio" name="answer" style={{float:"left", width:"24px", height:"24px"}} onClick={handleClick3} />
                            <h5>오답2</h5>
                            <h6>* 오답 시 피드백 참여가 불가합니다.</h6>
                            <button onClick={movetoFeedback}>제출하기</button>
                    </div>
                    </Modal>
                 }
            </div>
        </div>
    )
}

export default MobileDetailScrap;