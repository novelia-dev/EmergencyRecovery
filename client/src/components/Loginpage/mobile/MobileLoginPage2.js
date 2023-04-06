import React,{useEffect} from 'react';
import queryString from 'query-string';
import image from '../../Image/카카오톡.png';
import image1 from '../../Image/네이버.png';
import { KAKAO_AUTH_URL, REST_API_KEY, REDIRECT_URI, SECRET } from '../KakaoData';
import axios from 'axios';

const Login = (props) => {
    const kauthUrl = KAKAO_AUTH_URL;
    const query = queryString.parse(window.location.search);

    useEffect(() => {
        if(query.code){
            getKakaoTokenHandler(query.code.toString());
        }
    }, []);

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
        axios.post('https://kauth.kakao.com/oauth/token', queryString, {
            headers:{
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        }).then((res) => {
            sendKakaoTokenToServer(res.data.access_token)
        });
    }
    const sendKakaoTokenToServer = (token) => {
        axios.post('http://localhost:8000/users/login',{access_token: token})
        .then(res => {
            if(res.status == 201 || res.status == 200){
                const user = res.data.user;
                window.localStorage.setItem("token", JSON.stringify({
                    access_token: res.data.jwt
                }));
            } else{
                window.alert("로그인에 실패하였습니다.");
            }
        })
    }

    const moving = () => {
        window.location.href = KAKAO_AUTH_URL;
    }

    return(<>
        <div>
            <img className="Kakaoimage" alt="Kakaoimage" onClick={moving} style={{width:"24px", height:"24px"}}src={image} />
        </div>
    </>)
}

function MobileLoginPage2(){
    return(
        <div>
            <div>
                <table>
                   <tr><td><Login /></td><h5>카카오 계정으로 로그인하기</h5></tr>
                </table>
            </div>
            <div>
                <button>취소</button>
            </div>
        </div>
    )

}
export default MobileLoginPage2;