import React,{useEffect} from 'react';
import axios from 'axios';

function movetoregister(){
    window.location.href="/mobileregister2";
}

function MobileRegisterPage(){

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
                    <td> <button>내용보기</button> </td>
                </table>
            </div>
            <div>
                <table>
                    <td> <input type="checkbox" /> </td>
                    <td> <h5>개인정보 수집 및 동의</h5> </td>
                    <td> <button>내용보기</button> </td>
                </table>
            </div>
            <div>
                <button>취소</button>
                <button onClick={movetoregister}>다음</button>
            </div>
        </div>
    )
}

export default MobileRegisterPage;