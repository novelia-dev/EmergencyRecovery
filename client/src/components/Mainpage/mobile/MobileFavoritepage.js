import React,{useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MobileNavbar from '../../Navbar/MobileNavbar';
import MobileFooter from '../../Footer/MobileFooter';
import image1 from '../../Image/illumination-5173540_1920.jpg';

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


function MobileFavoritepage(){

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
                <h4>선호태그 작품</h4>
                <table>
                    <tr>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>전체작품</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>객관식작</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>주관식작</button></td>
                    </tr>
                    <tr>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>판타지작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>로맨스작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>로판작품</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>남성향작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>여성향작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선호태그</button></td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>
                        <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" onClick={openModal} >
                            </img>
                            {
                                 modalVisible && <Modal 
                                 visible={modalVisible}
                                 closable={true}
                                 maskClosable={true}
                                 onClose={closeModal}>
                                     <div>
                                     <table>
                    <tr>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>전체작품</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>객관식작</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    </tr>
                    <tr>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>전체작품</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>객관식작</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    </tr>
                </table> 
                <table>
                    <td><h4>아빠가 힘을 숨김</h4></td>
                    <td><h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;고은채</h5></td>
                </table>
                <img src={image1} alt="작품이미지" style={{width:"222px", height:"327px"}} />
                <h5>그는 쇳덩이처럼 어깨를 짓누르는 피로감을 이기</h5>
                <h5>지 못하고 털썩 주저앉았다. 흩날리는 눈송이가 그</h5>
                <h5>의 얼굴에 차갑게 들러붙었다.</h5>
                <br />
                <h6>상수리나무 아래 외전 44화 </h6>
                                     </div>
                                 </Modal>
                            }
                            <h4>아빠가 힘을 숨김</h4>
                            <h5>고은채</h5>
                            
                        </td>
                        <td>
                        <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" onClick={openModal}/>
                        {
                                 modalVisible && <Modal 
                                 visible={modalVisible}
                                 closable={true}
                                 maskClosable={true}
                                 onClose={closeModal}>
                                     <div>
                                     <table>
                    <tr>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>전체작품</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>객관식작</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    </tr>
                    <tr>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>전체작품</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>객관식작</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    </tr>
                </table> 
                <table>
                    <td><h4>변경백 서자는 황제였다</h4></td>
                    <td><h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;기준석</h5></td>
                </table>
                <img src={image1} alt="작품이미지" style={{width:"222px", height:"327px"}} />
                <h5>그는 쇳덩이처럼 어깨를 짓누르는 피로감을 이기</h5>
                <h5>지 못하고 털썩 주저앉았다. 흩날리는 눈송이가 그</h5>
                <h5>의 얼굴에 차갑게 들러붙었다.</h5>
                <br />
                <h6>상수리나무 아래 외전 44화 </h6>
                                     </div>
                                 </Modal>
                            }
                            <h4>변경백 서자는 황제였다</h4>
                            <h5>기준석</h5>
                            
                        </td>
                        <td>
                        <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" onClick={openModal} />
                        {
                                 modalVisible && <Modal 
                                 visible={modalVisible}
                                 closable={true}
                                 maskClosable={true}
                                 onClose={closeModal}>
                                     <div>
                                     <table>
                    <tr>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>전체작품</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>객관식작</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    </tr>
                    <tr>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>전체작품</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>객관식작</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    </tr>
                </table> 
                <table>
                    <td><h4>아빠가 힘을 숨김</h4></td>
                    <td><h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;고은채</h5></td>
                </table>
                <img src={image1} alt="작품이미지" style={{width:"222px", height:"327px"}} />
                <h5>그는 쇳덩이처럼 어깨를 짓누르는 피로감을 이기</h5>
                <h5>지 못하고 털썩 주저앉았다. 흩날리는 눈송이가 그</h5>
                <h5>의 얼굴에 차갑게 들러붙었다.</h5>
                <br />
                <h6>상수리나무 아래 외전 44화 </h6>
                                     </div>
                                 </Modal>
                            }
                            <h4>결혼하지 않으면 죽습니다</h4>
                            <h5>찬연</h5>
                            
                        </td>
                    </tr>
                    <tr>    
                    <td>
                    <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" onClick={openModal} />
                    {
                                 modalVisible && <Modal 
                                 visible={modalVisible}
                                 closable={true}
                                 maskClosable={true}
                                 onClose={closeModal}>
                                     <div>
                                     <table>
                    <tr>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>전체작품</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>객관식작</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    </tr>
                    <tr>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>전체작품</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>객관식작</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    </tr>
                </table> 
                <table>
                    <td><h4>아빠가 힘을 숨김</h4></td>
                    <td><h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;고은채</h5></td>
                </table>
                <img src={image1} alt="작품이미지" style={{width:"222px", height:"327px"}} />
                <h5>그는 쇳덩이처럼 어깨를 짓누르는 피로감을 이기</h5>
                <h5>지 못하고 털썩 주저앉았다. 흩날리는 눈송이가 그</h5>
                <h5>의 얼굴에 차갑게 들러붙었다.</h5>
                <br />
                <h6>상수리나무 아래 외전 44화 </h6>
                                     </div>
                                 </Modal>
                            }
                            <h4>무림세가 천대받는 손녀딸이 되었다</h4>
                            <h5>마루별</h5>
                           
                        </td>
                        <td>
                        <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" onClick={openModal} />
                        {
                                 modalVisible && <Modal 
                                 visible={modalVisible}
                                 closable={true}
                                 maskClosable={true}
                                 onClose={closeModal}>
                                     <div>
                                     <table>
                    <tr>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>전체작품</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>객관식작</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    </tr>
                    <tr>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>전체작품</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>객관식작</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    </tr>
                </table> 
                <table>
                    <td><h4>아빠가 힘을 숨김</h4></td>
                    <td><h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;고은채</h5></td>
                </table>
                <img src={image1} alt="작품이미지" style={{width:"222px", height:"327px"}} />
                <h5>그는 쇳덩이처럼 어깨를 짓누르는 피로감을 이기</h5>
                <h5>지 못하고 털썩 주저앉았다. 흩날리는 눈송이가 그</h5>
                <h5>의 얼굴에 차갑게 들러붙었다.</h5>
                <br />
                <h6>상수리나무 아래 외전 44화 </h6>
                                     </div>
                                 </Modal>
                            }
                            <h4>전지적 독자시점</h4>
                            <h5>심숭</h5>
                           
                        </td>
                        <td>
                        <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" onClick={openModal} />
                        {
                                 modalVisible && <Modal 
                                 visible={modalVisible}
                                 closable={true}
                                 maskClosable={true}
                                 onClose={closeModal}>
                                     <div>
                                     <table>
                    <tr>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>전체작품</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>객관식작</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    </tr>
                    <tr>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>전체작품</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>객관식작</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    </tr>
                </table> 
                <table>
                    <td><h4>아빠가 힘을 숨김</h4></td>
                    <td><h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;고은채</h5></td>
                </table>
                <img src={image1} alt="작품이미지" style={{width:"222px", height:"327px"}} />
                <h5>그는 쇳덩이처럼 어깨를 짓누르는 피로감을 이기</h5>
                <h5>지 못하고 털썩 주저앉았다. 흩날리는 눈송이가 그</h5>
                <h5>의 얼굴에 차갑게 들러붙었다.</h5>
                <br />
                <h6>상수리나무 아래 외전 44화 </h6>
                                     </div>
                                 </Modal>
                            }
                            <h4>진짜가 나타난 날</h4>
                            <h5>가엔</h5>
                            
                        </td>
                    </tr>
                    <tr>
                    <td>
                    <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" onClick={openModal} />
                    {
                                 modalVisible && <Modal 
                                 visible={modalVisible}
                                 closable={true}
                                 maskClosable={true}
                                 onClose={closeModal}>
                                     <div>
                                     <table>
                    <tr>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>전체작품</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>객관식작</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    </tr>
                    <tr>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>전체작품</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>객관식작</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    </tr>
                </table> 
                <table>
                    <td><h4>아빠가 힘을 숨김</h4></td>
                    <td><h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;고은채</h5></td>
                </table>
                <img src={image1} alt="작품이미지" style={{width:"222px", height:"327px"}} />
                <h5>그는 쇳덩이처럼 어깨를 짓누르는 피로감을 이기</h5>
                <h5>지 못하고 털썩 주저앉았다. 흩날리는 눈송이가 그</h5>
                <h5>의 얼굴에 차갑게 들러붙었다.</h5>
                <br />
                <h6>상수리나무 아래 외전 44화 </h6>
                                     </div>
                                 </Modal>
                            }
                            <h4>화산귀환</h4>
                            <h5>비가</h5>
                            
                        </td>
                        <td>
                        <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" onClick={openModal} />
                        {
                                 modalVisible && <Modal 
                                 visible={modalVisible}
                                 closable={true}
                                 maskClosable={true}
                                 onClose={closeModal}>
                                     <div>
                                     <table>
                    <tr>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>전체작품</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>객관식작</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    </tr>
                    <tr>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>전체작품</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>객관식작</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    </tr>
                </table> 
                <table>
                    <td><h4>아빠가 힘을 숨김</h4></td>
                    <td><h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;고은채</h5></td>
                </table>
                <img src={image1} alt="작품이미지" style={{width:"222px", height:"327px"}} />
                <h5>그는 쇳덩이처럼 어깨를 짓누르는 피로감을 이기</h5>
                <h5>지 못하고 털썩 주저앉았다. 흩날리는 눈송이가 그</h5>
                <h5>의 얼굴에 차갑게 들러붙었다.</h5>
                <br />
                <h6>상수리나무 아래 외전 44화 </h6>
                                     </div>
                                 </Modal>
                            }
                            <h4>이운</h4>
                            <h5>라희</h5>
                            
                        </td>
                        <td>
                        <img style={{width:"87px", height:"130px"}} src={image1} alt="이미지" onClick={openModal} />
                        {
                                 modalVisible && <Modal 
                                 visible={modalVisible}
                                 closable={true}
                                 maskClosable={true}
                                 onClose={closeModal}>
                                     <div>
                                     <table>
                    <tr>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>전체작품</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>객관식작</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    </tr>
                    <tr>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>전체작품</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>객관식작</button></td>
                        <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>주관식작</button></td>
                    </tr>
                </table> 
                <table>
                    <td><h4>아빠가 힘을 숨김</h4></td>
                    <td><h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;고은채</h5></td>
                </table>
                <img src={image1} alt="작품이미지" style={{width:"222px", height:"327px"}} />
                <h5>그는 쇳덩이처럼 어깨를 짓누르는 피로감을 이기</h5>
                <h5>지 못하고 털썩 주저앉았다. 흩날리는 눈송이가 그</h5>
                <h5>의 얼굴에 차갑게 들러붙었다.</h5>
                <br />
                <h6>상수리나무 아래 외전 44화 </h6>
                                     </div>
                                 </Modal>
                            }
                            <h4>아빠가 힘을 숨김</h4>
                            <h5>고은채</h5>
                            
                        </td>
                    </tr>
                </table>
            </div>
            <MobileFooter />
        </div>
    )
}

export default MobileFavoritepage;