import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import image from "../Image/Ellipse 1.png";
import moment from 'moment';

function DetailMyPage(props){

    const [remainingDays, setRemainingDays] = useState(null);

    useEffect(() => {
        const now = moment();
        const targetDate = moment('2023-03-28');
        const diffInDays = targetDate.diff(now,'days');
        setRemainingDays(diffInDays);
    },[])

    let {id} = useParams();

    return(
        <div>
            <table>
                <td><img src={image} alt="뒤로가기" /></td>
                <td>
                    <div className="container-fluid">
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                        <img alt="작품 사진" />
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">재벌집 막내아들</h4>
                                        <p class="card-text">
                                        <h6>산경</h6>
                                        {remainingDays !== null && (
                            <p><b>현대 판타지 &nbsp; D-{remainingDays}</b></p>
                          )}
                                        <h6>10/30 &nbsp; 10/10</h6>
                                        <h6>태그</h6>
                                        <table>
                                            <tr>
                                            <button>선택태그</button>
                                            <button>선택태그</button>
                                            <button>선택태그</button>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            </tr>
                                            <tr>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            </tr>
                                        </table>
                                        <table>
                                            <td> 
                                                <input type="text" value="『자금이라는 것은 주인인 내가 알지 머슴이 뭘 압니까』" style={{width:"578px", height:"133px"}}/> 
                                            </td>
                                            <td>
                                                <tr><button>객관식 참여</button></tr>
                                                <tr><button>주관식 참여</button></tr>    
                                            </td>
                                        </table>
                                         
                                         <button>비슷한 작품</button>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </td>
            </table>

            <br />

            <table>
                <tr>
                  <td>
                  <div className="container-fluid">
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                        <img alt="작품 사진" />
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">재벌집 막내아들</h4>
                                        <p class="card-text">
                                        <h6>산경</h6>
                                        {remainingDays !== null && (
                            <p><b>현대 판타지 &nbsp; D-{remainingDays}</b></p>
                          )}
                                        <h6>10/30 &nbsp; 10/10</h6>
                                        <h6>태그</h6>
                                        <table>
                                            <tr>
                                            <button>선택태그</button>
                                            <button>선택태그</button>
                                            <button>선택태그</button>
                                            </tr>
                                            <tr>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            </tr>
                                            <tr>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            </tr>
                                            <tr>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            </tr>
                                        </table>
                                        

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </td>
                  <td>
                  <div className="container-fluid">
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                        <img alt="작품 사진" />
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">재벌집 막내아들</h4>
                                        <p class="card-text">
                                        <h6>산경</h6>
                                        {remainingDays !== null && (
                            <p><b>현대 판타지 &nbsp; D-{remainingDays}</b></p>
                          )}
                                        <h6>10/30 &nbsp; 10/10</h6>
                                        <h6>태그</h6>
                                        <table>
                                            <tr>
                                            <button>선택태그</button>
                                            <button>선택태그</button>
                                            <button>선택태그</button>
                                            </tr>
                                            <tr>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            </tr>
                                            <tr>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            </tr>
                                            <tr>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            </tr>
                                        </table>
                                        

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                  <div className="container-fluid">
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                        <img alt="작품 사진" />
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">재벌집 막내아들</h4>
                                        <p class="card-text">
                                        <h6>산경</h6>
                                        {remainingDays !== null && (
                            <p><b>현대 판타지 &nbsp; D-{remainingDays}</b></p>
                          )}
                                        <h6>10/30 &nbsp; 10/10</h6>
                                        <h6>태그</h6>
                                        <table>
                                            <tr>
                                            <button>선택태그</button>
                                            <button>선택태그</button>
                                            <button>선택태그</button>
                                            </tr>
                                            <tr>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            </tr>
                                            <tr>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            </tr>
                                            <tr>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            </tr>
                                        </table>
                                        

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </td>
                  <td>
                  <div className="container-fluid">
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                        <img alt="작품 사진" />
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">재벌집 막내아들</h4>
                                        <p class="card-text">
                                        <h6>산경</h6>
                                        {remainingDays !== null && (
                            <p><b>현대 판타지 &nbsp; D-{remainingDays}</b></p>
                          )}
                                        <h6>10/30 &nbsp; 10/10</h6>
                                        <h6>태그</h6>
                                        <table>
                                            <tr>
                                            <button>선택태그</button>
                                            <button>선택태그</button>
                                            <button>선택태그</button>
                                            </tr>
                                            <tr>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            </tr>
                                            <tr>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            </tr>
                                            <tr>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            <button>선호태그</button>
                                            </tr>
                                        </table>
                                        

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </td>
                </tr>
            </table>


        </div>
    )
}

export default DetailMyPage;