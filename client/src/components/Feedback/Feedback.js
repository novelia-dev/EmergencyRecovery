import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import {Descriptions} from 'antd';
import Comments from './Sections/Comments';
import image1 from "../Image/illumination-5173540_1920.jpg";
import Navbar from '../Navbar/SimpleNavbar';

function Feedback(props){
    const [selected, setSelected] = useState("button1");
    const handleClick1 = () => {
        setSelected("button1");
    }
    const handleClick2 = () => {
        setSelected("button2");
    }
    const style1={
        width:"125px",
        height:"45px",
        marginLeft:"1307px",
        marginTop:"23px",
        border:"none",
        borderBottom: `4px solid ${selected === "button1" ? "#AA0140" : "#000"}`,
        backgroundColor:"white",
        fontSize:"16px",
        fontWeight:"400"
       };
    const style2={
        width:"125px",
        height:"45px",
        marginTop:"23px",
        border:"none",
        borderBottom: `4px solid ${selected === "button2" ? "#AA0140" : "#000"}`,
        backgroundColor:"white",
        fontSize:"16px",
        fontWeight:"400"
    };

    return(
        <div>
          <Navbar />
          {selected === "button1" && <div style={{ marginTop:"60px",marginLeft:"360px",width:"1200px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5" }}>
           <div style={{marginLeft:"15px"}}>
            <h4>피드백 열람</h4>
            <h5>해당작품의 피드백 결과입니다.</h5>
            </div>
            </div>
          }
          {selected === "button2" && <div style={{ marginTop:"60px",marginLeft:"360px",width:"1200px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5" }}>
           <div style={{marginLeft:"15px"}}></div>
           <h4>피드백 열람</h4>
            <h5>해당작품의 피드백 결과입니다.</h5>
            </div>
          }
          <div><button style={style1} onClick={handleClick1}>객관식</button><button style={style2} onClick={handleClick2}>주관식</button></div>
          {selected === "button1" && <div style ={{marginLeft:"360px", marginTop:"22px"}}>
             <ChooseFeedback />
            </div>  
          }
          {selected === "button2" && <div style={{marginLeft:"360px", marginTop:"22px"}}>
             <WriteFeedback />
            </div>
          }
        </div>
    )
}

function ChooseFeedback(props){
    
    const [AverageStar, setAverageStar] = useState([])
    const AVR_RATE = AverageStar * 20;
    const STAR_IDX_ARR = ['first','second','third','fourth','last'];
    const [ratesResArr, setRatesResArr] = useState([0,0,0,0,0]);

    const calcStarRates = () => {
        let tempStarRatesArr = [0,0,0,0,0];
        let starVerScore = (AVR_RATE * 70) / 100;
        let idx = 0;
        while(starVerScore > 14){
            tempStarRatesArr[idx] = 14;
            idx += 1;
            starVerScore -= 14;
        }
        tempStarRatesArr[idx] = starVerScore;
        return tempStarRatesArr;
    };

    useEffect(() => {
        setAverageStar()
        setRatesResArr(calcStarRates)
    },[])

    const RoundAverageStar = Number(AverageStar).toFixed(1);

    const showStar = () =>{
        return(
            <Descriptions layout='horizontal'>
                <Descriptions.Item>
                    
                </Descriptions.Item>
                <Descriptions.Item>
                    {`${RoundAverageStar}점`}
                </Descriptions.Item>
            </Descriptions>
        )
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

    const Button = () => {
        const arr = [{id: 1 }, {id: 2 }, { id: 3 },{id : 4},{id : 5},{id : 6},{id:7},{id:8},{id:9},{id:10}];
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
              style={{marginTop:"15px",marginLeft:"30px"}}
            >
              주인공 능력이 매력적이예요!
            </button>
          </div>
        ));
      };
      const Button1 = () => {
        const arr = [{id: 1 }, {id: 2 }, { id: 3 },{id : 4},{id : 5},{id : 6},{id:7},{id:8},{id:9},{id:10}];
        const [pick1, setPick1] = useState(arr);
        const [select1, setSelect1] = useState([]);
      
        return pick1.map((item) => (
          <div className="button_container">
            
            <button
              key={item.id}
              onClick={() => {
                !select1.includes(item.id)
                  ? setSelect1((select1) => [...select1, item.id])
                  : setSelect1(select1.filter((button) => button !== item.id));
              }}
              className={
                select1.includes(item.id)
                  ? "button_table_btn_ns"
                  : "button_table_btn_s"
              }
              style={{marginTop:"15px",marginLeft:"30px"}}
            >
              주인공 능력이 매력적이예요!
            </button>
          </div>
        ));
      };
      const Button2 = () => {
        const arr = [{id: 1 }, {id: 2 }, { id: 3 },{id : 4},{id : 5},{id : 6},{id:7},{id:8},{id:9},{id:10}];
        const [pick2, setPick2] = useState(arr);
        const [select2, setSelect2] = useState([]);
      
        return pick2.map((item) => (
          <div className="button_container">
            
            <button
              key={item.id}
              onClick={() => {
                !select2.includes(item.id)
                  ? setSelect2((select2) => [...select2, item.id])
                  : setSelect2(select2.filter((button) => button !== item.id));
              }}
              className={
                select2.includes(item.id)
                  ? "button_table_btn_ns"
                  : "button_table_btn_s"
              }
              style={{marginTop:"15px",marginLeft:"30px"}}
            >
              주인공 능력이 매력적이예요!
            </button>
          </div>
        ));
      };
      const Button3 = () => {
        const arr = [{id: 1 }, {id: 2 }, { id: 3 },{id : 4},{id : 5},{id : 6},{id:7},{id:8},{id:9},{id:10}];
        const [pick3, setPick3] = useState(arr);
        const [select3, setSelect3] = useState([]);
      
        return pick3.map((item) => (
          <div className="button_container">
            
            <button
              key={item.id}
              onClick={() => {
                !select3.includes(item.id)
                  ? setSelect3((select3) => [...select3, item.id])
                  : setSelect3(select3.filter((button) => button !== item.id));
              }}
              className={
                select3.includes(item.id)
                  ? "button_table_btn_ns"
                  : "button_table_btn_s"
              }
              style={{marginTop:"15px",marginLeft:"30px"}}
            >
              주인공 능력이 매력적이예요!
            </button>
          </div>
        ));
      };
      
    return(
        <div>
            <div>
            <div className="container-fluid">
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                        <img style={{width:"306px", height:"459px"}} src={image1} alt="작품 사진" />
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">재벌집 막내아들</h4>
                                        <p class="card-text">
                                        <h6>산경</h6>
                                        <h6>현대 판타지 &nbsp; <button>열람완료</button></h6>
                                        <h6>10/30 &nbsp; 10/10</h6>
                                        <h6>태그</h6>
                                        <table>
                                            <tr>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                                                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                             <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                                            </tr>
                                            <tr>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                                            </tr>
                                        </table>
                                        <table>
                                            <td> 
                                                <input type="text" value="『자금이라는 것은 주인인 내가 알지 머슴이 뭘 압니까』" style={{width:"578px", height:"133px"}}/> 
                                            </td>
                                        </table>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            </div>
            <br />
            <div>
               <h4>별점</h4>
               <table>
                <td>{showResult()}</td>
                <td>{showStar()} </td>
                </table>
               
            </div>
            <br />
            <div>
                <h4>독자분석</h4>
            </div>
            <div>
                <table>
                    <tr>
                    <td>피드백 참여자 목록 &nbsp;</td>
                    <td>참여자 성비 &nbsp;</td>
                    <td>참여자 연령층 &nbsp;</td>
                    <td>참여자가 주로 선호한 태그 &nbsp;</td>
                    <td>참여자가 주로 금지한 태그 &nbsp;</td>
                    </tr>
                    <tr>
                       <td><h6>참여자 닉네임1</h6></td>
                       <td><h6>남성 90%</h6><h6>여성 10%</h6></td>
                       <td><h4>20대 80%</h4><h5>10대 15%</h5><h6>30대 5%</h6></td> 
                       <td>
                        <tr><td><button>선택태그</button></td><td><button>선택태그</button></td></tr>
                        <tr><td><button>선택태그</button></td><td><button>선택태그</button></td></tr>
                        <tr><td><button>선택태그</button></td><td><button>선택태그</button></td></tr>
                       </td>
                       <td>
                        <tr><td><button>금지태그</button></td><td><button>금지태그</button></td></tr>
                        <tr><td><button>금지태그</button></td><td><button>금지태그</button></td></tr>
                        <tr><td><button>금지태그</button></td><td><button>금지태그</button></td></tr>
                       </td>
                    </tr>
                    
                </table>
            </div>
            <br />
            <div>
               <h4>캐릭터</h4>
            </div>
            <table>
                <tr>
                    <td><h5>상위 키워드</h5></td>
                    <td><h5>하위 키워드</h5></td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><h5>그 외</h5></td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <h4>몰입도</h4>
                </tr>
                <tr>
                    <td><h5>상위 키워드</h5></td>
                    <td><h5>하위 키워드</h5></td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><h5>그 외</h5></td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <h4>상업성</h4>
                </tr>
                <tr>
                    <td><h5>상위 키워드</h5></td>
                    <td><h5>하위 키워드</h5></td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><h5>그 외</h5></td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <h4>캐릭터</h4>
                </tr>
                <tr>
                    <td><h5>상위 키워드</h5></td>
                    <td><h5>하위 키워드</h5></td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><h5>그 외</h5></td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
                <tr>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                    <td><button>주인공의 능력이 매력적이예요.</button> &nbsp; 90%</td>
                </tr>
            </table>
            <br />
            <div>
                <h4>객관식 피드백 만족도 별점</h4>
                {showResult()}
                <h5>서비스 평가를 남겨주세요.</h5>
                <input type="text" placeholder="서비스 평가를 남겨주세요." style={{width:"1169px",height:"90px"}} />
            </div>
            <button>만족도 제출</button>
            <button>주관식 보기</button>
        </div>
    )
}

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


function WriteFeedback(){
    
    const [AverageStar, setAverageStar] = useState([])
    const AVR_RATE = AverageStar * 20;
    const STAR_IDX_ARR = ['first','second','third','fourth','last'];
    const [ratesResArr, setRatesResArr] = useState([0,0,0,0,0]);

    const calcStarRates = () => {
        let tempStarRatesArr = [0,0,0,0,0];
        let starVerScore = (AVR_RATE * 70) / 100;
        let idx = 0;
        while(starVerScore > 14){
            tempStarRatesArr[idx] = 14;
            idx += 1;
            starVerScore -= 14;
        }
        tempStarRatesArr[idx] = starVerScore;
        return tempStarRatesArr;
    };

    useEffect(() => {
        setAverageStar()
        setRatesResArr(calcStarRates)
    },[])

    const RoundAverageStar = Number(AverageStar).toFixed(1);

    const showStar = () =>{
        return(
            <Descriptions layout='horizontal'>
                <Descriptions.Item>
                    
                </Descriptions.Item>
                <Descriptions.Item>
                    {`${RoundAverageStar}점`}
                </Descriptions.Item>
            </Descriptions>
        )
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
            <div>
            <div className="container-fluid">
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                        <img style={{width:"306px", height:"459px"}} src={image1} alt="작품 사진" />
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">재벌집 막내아들</h4>
                                        <p class="card-text">
                                        <h6>산경</h6>
                                        <h6>현대 판타지 &nbsp; <button>열람완료</button></h6>
                                        <h6>10/30 &nbsp; 10/10</h6>
                                        <h6>태그</h6>
                                        <table>
                                        <tr>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                                                     <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                             <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#AA0140",borderRadius:"50px",color:"#FFFFFF"}}>선택태그</button></td>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                                            </tr>
                                            <tr>
                                            <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                    <td><button style={{display:"flex", flexDirection:"row", alignItems:"flex-start",padding:"7px 14px", gap:"10px",
                    width:"Hug", height:"Hug",background:"#FFFFFF",borderRadius:"50px"}}>선호태그</button></td>
                                            </tr> 
                                        </table>
                                        <table>
                                            <td> 
                                                <input type="text" value="『자금이라는 것은 주인인 내가 알지 머슴이 뭘 압니까』" style={{width:"578px", height:"133px"}}/> 
                                            </td>
                                        </table>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            </div>
            <br />
            <div>
               <h4>별점</h4>
               <table>
                <td>{showResult()}</td>
                <td>{showStar()} </td>
                </table>
               
            </div>
            <br />
            <div>
                <h4>독자분석</h4>
            </div>
            <div>
                <table>
                    <tr>
                    <td>피드백 참여자 목록 &nbsp;</td>
                    <td>참여자 성비 &nbsp;</td>
                    <td>참여자 연령층 &nbsp;</td>
                    <td>참여자가 주로 선호한 태그 &nbsp;</td>
                    <td>참여자가 주로 금지한 태그 &nbsp;</td>
                    </tr>
                    <tr>
                       <td><h6>참여자 닉네임1</h6></td>
                       <td><h6>남성 90%</h6><h6>여성 10%</h6></td>
                       <td><h4>20대 80%</h4><h5>10대 15%</h5><h6>30대 5%</h6></td> 
                       <td>
                        <tr><td><button>선택태그</button></td><td><button>선택태그</button></td></tr>
                        <tr><td><button>선택태그</button></td><td><button>선택태그</button></td></tr>
                        <tr><td><button>선택태그</button></td><td><button>선택태그</button></td></tr>
                       </td>
                       <td>
                        <tr><td><button>금지태그</button></td><td><button>금지태그</button></td></tr>
                        <tr><td><button>금지태그</button></td><td><button>금지태그</button></td></tr>
                        <tr><td><button>금지태그</button></td><td><button>금지태그</button></td></tr>
                       </td>
                    </tr>
                    
                </table>
            </div>
            <br />
            <div>
                <Comments />
            </div>
            <div>
                <h4>주관식 피드백 만족도 별점</h4>
                {showResult()}
                <h5>서비스 평가를 남겨주세요.</h5>
                <input type="text" placeholder="서비스 평가를 남겨주세요." style={{width:"1169px",height:"90px"}} />
            </div>
            <button>만족도 제출</button>
            <button>객관식 보기</button>
        </div>
    )
}

export default Feedback;

