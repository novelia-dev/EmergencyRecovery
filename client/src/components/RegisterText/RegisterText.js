import React,{useState, Component} from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom';

import Dropzone from "react-dropzone";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from "../Navbar/SimpleNavbar";
import image1 from '../Image/couple-7590701_1920.jpg';
import image2 from '../Image/fantasy-4379818_1920.jpg';
import image3 from '../Image/illumination-5173540_1920.jpg';
import image4 from '../Image/poster-2690541_1280.png';
import image5 from '../Image/princess-2449970_1920.jpg';
import image6 from '../Image/sci-fi-3310140_1920.jpg';


function FileUpload(props)
{
    const [Images, setImages] = useState([])

    const dropHandler = (files) => {
        let formData = new FormData();

        const config = {
            header: {'content-type': 'multipart/form-data'}
        }

        formData.append("file", files[0])

    }

    const deleteHandler = (image) => {
        const cuurentIndex = Images.indexOf(image);
        let newImages = [...Images]

        newImages.splice(cuurentIndex,1)
        setImages(newImages)
        props.refreshFunction(newImages)

    }
    const buttonstyle={
        'box-sizing':"boreder-box",
            'display': "flex",
            'justify-content':"center",
            'align-items': "center",
            'gap':"10px",
            'width':"165px",
            'height':"45px",
            'borderRadius': "4px",
            'font-family': "Roboto",
            'font-weight': 700,
            'font-size': "22px",
            'line-height': "18.75px",
            'color': "#FFFFFF",
            'background-color':"#AA0140",
            'border-width':"0",
            'line-height': "26px"

    };
    return(
        <div style={{display:'flex'}}>
            <Dropzone onDrop={dropHandler}>
                {({getRootProps, getInputProps}) =>(
                    <div
                        style={{
                            width: "306px", height: "459px", border: '1px solid lightgrey',
                            display: 'flex', alignItems:'center', justifyContent: 'center'
                        }}
                        {...getRootProps()}>
                            <input {...getInputProps()} />
                            <button style={buttonstyle}>이미지 업로드</button>
                        </div>
                )}
            </Dropzone>
            
            <div style={{display:'flex', width: '350px', height:'459px', overflowX: 'scroll' }}>
                {Images.map((image,index)=> (
                    <div onClick={() => deleteHandler(image)} key={index}>
                        <img style={{minWidth: '300px', width: '300px', height: '240px'}}
                            />
                    </div>
                ))}
            </div>

        </div>
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

function RegisterText(props){
    const id = useParams();

    const [Images, setImages] = useState([]);

    const [title,setTitle] =useState("");
    const [genre,setGenre] =useState("");
    const [tag,setTag] =useState("");
    const [content,setContent] =useState("");
    const [newtag, setNewtag] = useState("");

    const [question,setQuestion] = useState("");
    const [answer,setAnswer] =useState("");
    const [wrong1,setWrong1] =useState("");
    const [wrong2,setWrong2] = useState("");

    const [quizs, setquizs] = useState([]);

    const [modalVisible, setModalVisible] = useState(false);

    const Button1 = () => {
        const arr = [{id: 1 }, {id: 2 }, { id: 3 },{id: 4},{id: 5},{id: 6}];
        const [pick, setPick] = useState(arr);
        const [select, setSelect] = useState([]);
      
        return pick.map((item) => (
          <div className="button_container">
            
            <button
              key={item.id}
              onClick={() => {
                !select.includes(item.id)
                  ? setSelect((select) => [...select, item.id])
                  : setSelect(select.filter((button) => button !== item.id));
              }}
              className={
                select.includes(item.id)
                  ? "button_table_btn_ns"
                  : "button_table_btn_s"
              }
              style={{width:"76px",height:"29px"}}
            >
              선호태그
            </button>
          </div>
        ));
      };

    const openModal = () => {
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }
    function close(){
        setModalVisible(false);
    }
    
 
    const updateTitle = (title) => {
        setTitle(title.target.value);
    }

    const updateGenre = (genre) => {
        setGenre(genre.target.value);
    }

    const updateTag = (tag) => {
        setTag(tag.target.value);
    }

    const updateNewTag = (newTag) => {
        if(newTag.key ==='Enter'){
        setNewtag(newTag.target.value);
        var name = newTag.target.value;
        axios.post('http://localhost:8000/tags/new',{
            name
        })
        .then(reponse=>console.log(reponse))
    }
  }

    const updateContent = (content) => {
        setContent(content.target.value);
    }

    const updateImage = (Images) => {
        setImages(Images)
    }

    const updateQuestion = (question) => {
        setQuestion(question.target.value);
        setquizs(enters=>[...enters,question]);
    }

    const updateAnswer = (answer) => {
        setAnswer(answer.target.value);
        setquizs(enters=>[...enters,answer]);
    }

    const updateWrong1 = (wrong1) => {
        setWrong1(wrong1.target.value);
        setquizs(enters=>[...enters,wrong1]);
    }

    const updateWrong2 = (wrong2) => {
        setWrong2(wrong2.target.value);
        setquizs(enters=>[...enters,wrong2]);
    }

    const movetoRegister = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name",genre);

        axios({
            method: "post",
            url: "http://localhost:8000/genre",
            data: formData,
            headers: {"Content-Type": "multipart/form-data", Authorization: localStorage.getItem("access_token")}
        }).then(response => {
            if(response.data.success){
                alert('저장 성공')
            }
            else{
                alert('저장 실패')
            }
        })
          
    .catch((error) => {
        if(error.response){
            console.log(error.response);
            console.log("server refused");
        } else if(error.request){
            console.log("network error");
        } else{
            console.log(error);
        }
    });
        window.location.href="/text/1";
    }
    
    const quiz = (e) => {
        e.preventDefault();
        if(!question || !answer ||!wrong1 ||!wrong2)
        {
            alert('모든 항목을 입력하세요.');
        }
        const formData = new FormData();
        formData.append("question",question);
        formData.append("answer",answer);
        formData.append("wrong1",wrong1);
        formData.append("wrong2",wrong2);
        const xhr = new XMLHttpRequest();
        xhr.open('POST','http://localhost:8000/quizs');
        xhr.setRequestHeader('Content-Type','multipart/form-data');
        xhr.send(formData);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.status === 200){
                    console.log('서버 전송 완료');
                }
                else{
                    console.log('서버 전송 실패');
                }
            }
        }
    }
   

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!title || !genre || !tag || !content) 
        {
            alert('모든 항목을 입력하세요.');
        }

        const formData = new FormData();
        formData.append("authorProfile",Images);
        formData.append("title",title);
        formData.append("tags",tag);
        formData.append("content",content);

        const xhr = new XMLHttpRequest();
        xhr.open('POST','/quiz');
        xhr.setRequestHeader('Content-Type','multipart/form-data');
        xhr.send(formData);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === XMLHttpRequest.DONE){
                if(xhr.status === 200){
                    console.log('서버 전송 완료');
                }
                else{
                    console.log('서버 전송 실패');
                }
            }
        }
        

    }
const buttonstyle={
        'box-sizing':"boreder-box",
        'display': "flex",
        'justify-content':"center",
        'align-items': "center",
        'gap':"10px",
        'width':"80px",
        'height':"25px",
        'borderRadius': "2px",
        'font-family': "Roboto",
        'font-weight': "700",
        'font-size': "13px",
        'line-height': "18.75px",
        'color': "#FFFFFF",
        'background-color':"#AA0140",
        'border-width':"0",
};

    return(
        <div>
            <Navbar/>
        <div style={{'width':"1200px",'marginLeft':"360px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>
            <h3>작품 기본 정보 입력</h3>
            
            <h5>새롭게 피드백 받을 작품의 기본적인 정보를 입력해주세요.</h5>
        </div>
       <div style={{marginLeft:"360px",float:"left"}}>
           <FileUpload refreshFunction={updateImage} />
        </div>
        <div>
        <label><b>작품 감상 확인용 질문</b> &nbsp;</label><br></br><input style={{width: "500px", height: "33px"}} type="text" onChange={updateQuestion} placeholder="5화 분량을 읽고 알 수 있는 내용의 질문을 입력하세요. ex) 주인공의 이름? " />
        <br/>
        <br/>
        <label><b>정답</b> &nbsp;</label><br></br><input type="text" onChange={updateAnswer} />
        <br/>
        <br/>
        <label><b>오답</b> &nbsp;</label><br></br><input type="text" onChange={updateWrong1} />
        <br/>
        <br/>
        <label><b>오답</b> &nbsp;</label><br></br><input type="text" onChange={updateWrong2} />
        <br />
        <br />
        <button onClick={quiz}>퀴즈 제출</button>
        </div>
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <br/>
        <div style={{marginLeft:"360px",'width':"1200px",'marginLeft':"360px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>
        <div style={{marginLeft:"15px",marginTop:"15px",marginBottom:"15px"}}>
        <label>제목* &nbsp;</label>
        <br/>
        <input style={{width: "240px" , height: "30px"}} type="text" placeholder="15자이내" onChange={updateTitle} />
        <br />
        <br/>
        <div>
        <select style={{width:"240px", height:"30px"}} name="장르선택" onChange={updateGenre}>
                <option value="none" selected disabled hidden>장르선택</option>
                <option value="로맨스">로맨스</option>
                <option value="판타지">판타지</option>
                <option value="로판">로판</option>
            </select>
            <br/>
            <br/>
            <div>
        <table>
           <td><button style={buttonstyle} onClick={openModal}>태그등록*</button>
                {
                    modalVisible && <Modal  
                        visible={modalVisible}
                        closable={true}
                        maskClosable={true}
                        onClose={closeModal}>
                              <div style={{marginTop:"15px",marginLeft:"15px",fontWeight: "700"}}>
                             장르별 태그보기
                       </div>
                       <div style={{marginTop:"5px",marginLeft:"22px"}}>
                          <select name="연재작품 수" style={{width: "248px", height: "38px"}} >
                          <option defaulValue="로맨스">로맨스</option>    
                          </select> 
                       </div>
                            
                            <div style={{marginTop:"15px",marginLeft:"15px",fontWeight: "700"}}>
                        &nbsp; 선호태그
                       </div>
                       <div style={{marginTop:"15px",marginLeft:"22px"}}>
                           <Button1/>
                           <br></br>
                       </div>
                       <div style={{marginTop:"15px",marginLeft:"22px"}}>
                           <Button1/>
                           <br></br>
                       </div>
                       <div style={{marginTop:"15px",marginLeft:"22px"}}>
                           <Button1/>
                           <br></br>
                       </div>
                       <div style={{marginTop:"15px",marginLeft:"22px"}}>
                           <Button1/>
                           <br></br>
                       </div>
                       <div style={{marginTop:"15px",marginLeft:"22px"}}>
                       <Button1/>
                       <br></br>
                       </div>
                       <br />
                       <br />
                     
                        <button style={{marginLeft:"250px"}} onClick={close}>입력완료</button>

                       </Modal>
                }
           </td>
           <br/> 
           <td><label>&nbsp; <b>태그신청 &nbsp;</b></label><input type="text" onKeyDown={updateNewTag} placeholder="엔터를 누를 시 저장됩니다." /></td>
        </table>
        <br/>
        <div>
            <label><b>작품설명</b> &nbsp;</label>
            <br/>
            <input style={{width: "1170px" , height: "180px"}} type ="text" placeholder="500자 이내" onChange={updateContent} />
        </div>
        </div>
        </div>
        </div>
        
        </div>
        <div style={{marginLeft:"360px",'width':"1200px",'marginLeft':"360px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>
            <label style={{marginLeft:"24px"}}><b>샘플 이미지</b></label>
            <table>
                <td><img style={{width:"164px", height:"246px",marginLeft:"24px"}} src={image1} alt="샘플이미지1"></img></td>
                <td><img style={{width:"164px", height:"246px",marginLeft:"24px"}} src={image2} alt="샘플이미지2"></img></td>
                <td><img style={{width:"164px", height:"246px",marginLeft:"24px"}} src={image3} alt="샘플이미지3"></img></td>
                <td><img style={{width:"164px", height:"246px",marginLeft:"24px"}} src={image4} alt="샘플이미지4"></img></td>
                <td><img style={{width:"164px", height:"246px",marginLeft:"24px"}} src={image5} alt="샘플이미지5"></img></td>
                <td><img style={{width:"164px", height:"246px",marginLeft:"24px"}} src={image6} alt="샘플이미지6"></img></td>
            </table>
        </div>
        <br />
        <br />
        <div>
            <td>
            <button style={{display: "flex", justifyContent:"center", flexDirection:"row", alignItems:"center", width: "102px", height: "45px", backgroundColor:"#FFFFFF" ,border:"1px solid #AA0140" ,borderRadius:"4px", marginLeft:"828px"}} type="primary" onClick={handleSubmit}>저장</button>
            </td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>
            <button style={{display: "flex", justifyContent:"center", flexDirection:"row", alignItems: "center", width: "102px", height:"45px", backgroundColor:"#AA0140", border:"1px solid #AA0140", borderRadius: "4px", color:"#FFFFFF"}}onClick={movetoRegister}>다음</button>
        
            </td>
            
            </div>    
        </div>
    )
}

export default RegisterText;

