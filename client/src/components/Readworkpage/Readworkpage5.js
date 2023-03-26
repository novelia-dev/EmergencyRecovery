import React,{useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Readworkpage5 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Text />
            </div>
        )
    }
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




function Text(props){
  
    var types = localStorage.getItem("Istype");

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
            alert('정답입니다. 피드백참여 할 수 있습니다.');
            if(types === "1")
            {
            window.location.href="/:id/choose";
            }
            else if(types === "2")
            {
                window.location.href="/:id/write";
            }
        }
        else if(one === "" && two !== "" && three === "")
        {
            alert('틀렸습니다.');
            window.location.href="/";
        }
        else if(one === "" && two === "" && three !== "")
        {
            alert('틀렸습니다.');
            window.location.href="/";
        }
    }



    const style = {
        'position':'absolute',
        'left':"669px",
        'font-family':'Roboto',
        'font-weight':"700",
        'font-size':"22px",
        'line-height':"35.16px",
        'align':"center",
        'text-color':'#000000',
        'margin-left':"15px",
        'margin-top':"15px"
    }

    const style1 = {
        'position':'absolute',
        'margin-left':"18px",
        'margin-top':"83px",
        'font-family':'Roboto',
        'font-weight':"400",
        'font-size':"19px",
        'line-height':"22px",
        'align':"center",
        'text-color':'#000000'
    }

    const style2 = {
        'position':'absolute',
        'margin-left':"334px",
        'margin-top':"88px",
        'font-family':'Roboto',
        'font-weight':"400",
        'font-size':"16px",
        'line-height':"18.75px",
        'align':"center",
        'text-color':'#000000'
    }

    const style3 = {
        'position':'absolute',
        'width':"60px",
        'height':"30px",
        'margin-left':"400px",
        'margin-top':"85px",
        'align':"center",
        'background-color':"#FFFFFF",
    }
    const style4 = {
        'position':'absolute',
        'margin-left':"483px",
        'margin-top':"88px",
        'font-family':'Roboto',
        'font-weight':"400",
        'font-size':"16px",
        'line-height':"18.75px",
        'align':"center",
        'text-color':'#000000'
    }
    const style5 = {
        'position':'absolute',
        'width':"60px",
        'height':"30px",
        'margin-left':"518px",
        'margin-top':"85px",
        'align':"center",
        'background-color':"#FFFFFF",
    }
    
    const style6 = {
        'position':'absolute',
        'width':"117px",
        'height':"48px",
        'top':"1000px",
        'left':"900px",
        'font-family':'Roboto',
        'font-style':'Regular',
        'font-weight':"400",
        'font-size':"16px",
        'line-height':"19px",
        'align':"center",
        'Vertical-align':"center",
        'text-color':'#000000',
       'border-width':"1px",'border-style':"solid",'border-color':"#AA0140",
       'background-color':"white"
    }
        return(
            <div>
            <div style={{'marginLeft':"666px",'width':"588px",'height':"120px",'left':"669px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",'border-spacing': "0",'border-collapse' : 'collapse'}}>
                <div style={style}>작품제목</div>
                <div style={style1}>5화</div>
                <div style={style2}>글자크기</div>
                <div style={style3}>
                <select>
                </select>
            </div>
            <div style = {style4}>간격</div>
                <div style = {style5}>
                <select>

                </select>    
                </div>  
            
            </div>
            <input type="text" placeholder="본문" style= {{position:'absolute','width':"582px",height:"840px",top:"120px",left:"666px"}}></input>
            <div>
                <button style={style6} onClick={openModal}>
                    퀴즈풀기
                </button>
            
                {
                    modalVisible && <Modal 
                    visible={modalVisible}
                    closable={true}
                    maskClosable={true}
                    onClose={closeModal}>
                        <div>
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

export default Readworkpage5;