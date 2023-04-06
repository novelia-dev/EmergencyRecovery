import React,{useState,useEffect} from 'react';
import {KAKAO_AUTH_URL,REST_API_KEY,REDIRECT_URI, SECRET} from './KakaoData';
import axios from 'axios'
import PropTypes from 'prop-types';
import styled from 'styled-components';



function activeButton(){
    alert("확인완료");
    window.location.href="/register3";
}
function cancel(){
    alert("취소");
    window.location.href="/";
}
function tos(){
    window.location.href="/tos"
}
function privacypolicy(){
    window.location.href="/privacy"
}
function LoginCallbackpage(){

    const urlSearchParams = new URLSearchParams(window.location.search);
    const code = urlSearchParams.get('code');

    const [width, setWidth] = useState(window.innerWidth);
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
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize',handleResize);
        return () => window.removeEventListener('resize',handleResize);
    },[])

    useEffect(() => {
        console.log(code);
    })

    // useEffect(() => {
    //     localStorage.setItem("code",code);
    // },[code]);

    const getKakaoTokenHandler = async(code)=>{
        const data = {
            grant_type: "authorization_code",
            client_id: REST_API_KEY,
            redirect_uri: REDIRECT_URI,
            code: code,
            client_secret: SECRET
        };

        const queryString = Object.keys(data).map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
        .join('&');
        axios.post(`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`, queryString, {
            headers:{
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        }).then((res) => {
            console.log(res);
        });
    }

    useEffect(() => {
        var accessToken = code;
        var kakao = 'kakao';
        console.log(accessToken);
        const data = {
            accessToken: accessToken,
            vendor: kakao
        };

        getKakaoTokenHandler(accessToken);

        axios.post('api.novelier.co.kr/users/login',data,{
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(response=>console.log(response))
        .catch(error=>console.log(error));

    },[])


    const style={
    'width':"588px",
    'height':"379px",
    'margin-top':"351px",
    'margin-left':"666px",
    'Font-family':"Roboto",
    'Font-style':"Regular",
    'Font-size':"19px",
    'line-height':"22px",
    'text-align':"left",
    'border-width':"1px",
    'border-style':"solid",
    'border-color':"#E5E5E5"
     };
    const style1={
    'box-sizing':"boreder-box",
    'display': "flex",
    'justify-content':"center",
    'align-items': "center",
    'gap':"10px",
    'width':"102px",
    'height':"41.57px",
    'position':"absoulte",
    'borderRadius': "4px",
    'font-family': "Roboto",
    'font-weight': 400,
    'font-size': "16px",
    'color':"#000000",
    'line-height': "18.75px",
   
    
    'marginTop':"210px",
    'marginLeft':"180px",
    'float':"left",
    'border-width':"1px",
    'border-style':"solid",
    'border-color':"#AA0140"
    
};
    const style2={
    'box-sizing':"boreder-box",
    'display': "flex",
    'justify-content':"center",
    'align-items': "center",
    'gap':"10px",
    'width':"102px",
    'height':"41.57px",
    'position':"absoulte",
    'borderRadius': "4px",
    'font-family': "Roboto",
    'font-weight': 400,
    'font-size': "16px",
    'line-height': "18.75px",
    'color': "#FFFFFF",
    'background-color':"#AA0140",
    'margin-left':"22px",
    'float':"left"  
};

if(width > 1000){
    return(
<div>
    {console.log(code)}
  <div style={style}>
    <h3>&nbsp; &nbsp;회원가입</h3>
    <hr style={{'border-width':"1px",
    'border-style':"solid",
    'border-color':"#E5E5E5"}}></hr>
  <div>
  &nbsp; &nbsp;
  <input type="checkbox"/><label style={{'fontSize':"16px",'top':"15px",'left':"15px"}}>전체 약관 동의</label>
    <hr style={{'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}></hr>
  </div>
  <div>
   
  <div style={{position: "absolute",'top':"478px"}}> &nbsp; &nbsp;<input type="checkbox" /><label >이용약관 동의</label></div>
  <div>
    <button style={{position: "absolute",width: "78px",height: "30px",left: "1161px",top: "478px",backgroundColor: "#666666",borderRadius: "4px",'color': "#FFFFFF"}} onClick={openModal}>내용보기</button>
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
 </div>
                  
  <div style={{position: "absolute",'top':"523px"}}>&nbsp; &nbsp;<input type="checkbox"/><label >개인정보 수집 및 이용동의</label></div>
  <div>
    <button style={{position: "absolute",width: "78px",height: "30px",left: "1161px",top: "523px",backgroundColor: "#666666",borderRadius: "4px",'color': "#FFFFFF"}} onClick={openModal}>내용보기</button></div>
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
  </div>
  <div >
    <botton style={style1} onClick={cancel}> 취소</botton>
  </div>
  <div style={{marginTop:"218px",marginLeft:"22px"}}>
  <botton style={style2} onClick={activeButton}> 확인</botton>
  </div>
  
    </div>
</div>
    );
    }
    else {
        window.location.href="/mobileregister";
    }
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

export default LoginCallbackpage;