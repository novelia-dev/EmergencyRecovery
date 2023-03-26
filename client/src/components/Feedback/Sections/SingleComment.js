import React,{useState} from 'react';
import styled from 'styled-components';
import {Comment, Input} from 'antd';
import axios from 'axios';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import warning from '../../Image/exclamation.png';

const {TextArea} = Input;

  



function SingleComment(props){

    const [CommentValue, setCommentValue] = useState("");
    const [AverageStar, setAverageStar] = useState([])
    const AVR_RATE = AverageStar * 20;
    const STAR_IDX_ARR = ['first','second','third','fourth','last'];
    const [ratesResArr, setRatesResArr] = useState([0,0,0,0,0]);
    const handleChange = (e) => {
        setCommentValue(e.currentTarget.value)
    }

    const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  function CustomButton({imageUrl,onClick}){
    const buttonStyle={
        background: `url(${imageUrl}) no-repeat center center`,
        backgroundSize: "cover",
        border: "none",
        width:"200px",
        height:"50px",
        cursor:"pointer",
    };

    return(
        <button style={buttonStyle} onClick={onClick}>
            <img style={{width:"40px", height:"40px"}} src={warning} alt="경고" />
        </button>
    )
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



    const showResult = () => {
    return(
        <StarRateWrap>
        {STAR_IDX_ARR.map((item, idx) => {
            return <span className='star_icon' key={`${item}_${idx}`}>
                <svg xmlns='http://www.w3.org/2000/svg' width='40' height='39' viewBox='0 0 14 13' fill='#cacaca'>
                    <clipPath id={`${item}StarClip`}>
                        <rect width={`${ratesResArr[idx]}`} height='39' />
                    </clipPath>
                    <path
                        id={`${item}Star`}
                        d='M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z'
                        transform='translate(-2 -2)'
                    />
                    <use clipPath={`url(#${item}StarClip)`} href={`#${item}Star`} fill='#fadb14'
                    />
                </svg>
            </span>
        })
        }
    </StarRateWrap>
    )
}
    return(
        <div>
            <Comment content={<p>
                <table>
                    <tr>
                    <td><h5>닉네임 &nbsp;</h5></td>
                    <td><h5>남성 &nbsp;</h5></td>
                    <td><h5>20대 &nbsp;</h5></td>
                    <td>{showResult()}</td>
                    <td>
                        <CustomButton onClick={openModal}>경고</CustomButton>
                        {
                            modalVisible && <Modal
                            visible={modalVisible}
                            closable={true}
                            maskClosable={true}
                            onClose={closeModal}
                            >
                            <div>
                              <h4>신고사유를 선택해주세요</h4>
                              <input type="radio" name="무성의" style={{float:"left",width:"24px",height:"24px"}} />
                              <h5>무성의</h5>
                              <input type="radio" name="욕설 및 조롱" style={{float:"left",width:"24px",height:"24px"}} />
                              <h5>욕설 및 조롱</h5>
                              <input type="radio" name="관련없는 내용" style={{float:"left",width:"24px",height:"24px"}} />  
                              <h5>관련없는 내용</h5>
                              
                              <h5>* 허위 신고 시 서비스 이용에 제한이 있을 수 있습니다.</h5>
                              <button>제출하기</button>
                            </div>
                            </Modal>
                        }
                    </td>
                    </tr>
                    <tr>
                        <h5>좋았던 점</h5>
                        <Input type="text" value="좋다" />
                    </tr>
                    <tr>
                        <h5>아쉬웠던 점</h5>
                        <Input type="text" value="싫다" />
                    </tr>
                </table>
                
            </p>}></Comment>
        </div>
    )
}

export default SingleComment;

const StarRateWrap = styled.div`
    display:flex;
    align-items:center;
    width: 100%;
    margin: 0 0 0 15px;
    .star_icon{
        display: inline-flex;
        margin-right: 5px;
    }
`;

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