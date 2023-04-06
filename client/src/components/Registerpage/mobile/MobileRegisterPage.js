import React,{useState,useEffect} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function movetoregister(){
    window.location.href="/mobileregister2";
}


function MobileRegisterPage(){

    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    function Modal({className, onClose, maskClosable, closable, visible, children})
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
                <ModalWrapper className = {className} onClick={maskClosable ? onMaskClick : null} tableIndex = "-1" visible={visible}>
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

    useEffect(() => {
        var accessToken = localStorage.getItem("code");
        var kakao = 'kakao';
        console.log(accessToken);
        const data = {
            accessToken: accessToken,
            vendor: kakao
        };

        axios.post('http://localhost:8000/users/login',data,{
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(response=>console.log(response))
        .catch(error=>console.log(error));

    },[])

    return(
        <div>
            <div>
                
            </div>
            <div>
                <table>
                    <td> <input type="checkbox" /> </td>
                    <td> <h5>전체 약관 동의</h5> </td>
                </table>
            </div>
            <div>
                <table>
                    <td> <input type="checkbox" /> </td>
                    <td> <h5>이용약관 동의</h5> </td>
                    <td> 
                        <button onClick={openModal}>내용보기</button>
                        {
                            modalVisible && <Modal
                            visible={modalVisible}
                            closable={true}
                            maskClosable={true}
                            onClose={closeModal}
                            >
                            <div>
                                <h4>이용약관</h4>
                            </div>
                            </Modal>
                        } 
                    </td>
                </table>
            </div>
            <div>
                <table>
                    <td> <input type="checkbox" /> </td>
                    <td> <h5>개인정보 수집 및 동의</h5> </td>
                    <td> 
                        <button onClick={openModal}>내용보기</button>
                        {
                            modalVisible && <Modal
                            visible={modalVisible}
                            closable={true}
                            maskClosable={true}
                            onClose={closeModal}
                            >
                            <div>
                                <h4>개인정보 수집 및 동의</h4>
                            </div>
                            </Modal>
                        } 
                    </td>
                </table>
            </div>
            <div>
                <button>취소</button>
                <button onClick={movetoregister}>다음</button>
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



export default MobileRegisterPage;