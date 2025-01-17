import React,{Component, useEffect} from 'react';
import queryString from 'query-string';
import Kakaoimage from '../Image/카카오톡.png';
import Naver from '../Image/네이버.png';
import Novelist from '../Image/image 1.png';
import {KAKAO_AUTH_URL,REST_API_KEY,REDIRECT_URI, SECRET} from './KakaoData';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

function Loginpage (){
    const style={
        'marginLeft':"100px",
        'width': "378px",
        'height' : "121px",
        'font-family': "Roboto",
        'font-style': "Regular",
        'font-weight': 400,
        'font-size': "(mixed)",
        'line-height': "100%",
        'align-item': "center",
        'Vertical-align': "center",
        'text-align': "center",
        'color':"#000000",
        
    };
        return(
           
            <div><div>
           
            <div style ={{marginLeft:"666px",marginTop:"115px",backgroundColor:"#EEEEEE",width:"558px",height:"850px"}}>
            <img className="Novelist" alt="Novelist" style={{marginLeft:"204px",marginTop:"214px",width:"180px", height:"163px"}}src={Novelist} />
            <div style={style}>
            <h1>Login</h1>
            
            <h3>소셜 로그인으로 빠르게 시작하세요!</h3>
            
        </div>
            <Login/>
            </div>
       
            </div>
       

            </div>
            
            
        )
  
        }
// function KakaoLogin()
// {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const KAKAO_CODE = location.search.split('=')[1];
   

//     const getKakaoToken = () => {
//         fetch(`https://kauth.kakao.com/oauth/token`, {
//             method: 'POST',
//             headers : {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
//             body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
//         })
//         .then(res => res.sjson())
//         .then(data => {
//             if(data.access_token){
//                 localStorage.setItem('token', data.access_token);

//             }else {
//                 navigate('/');
//             }
//         });
//     };

//     useEffect(() => {
//         if(!location.search) return;
//         getKakaoToken();
//     }, []);

    

//     return (
//         <div>
//             <KakaoLogin />
//         </div>
//     )
// }



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
        axios.post(`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`, queryString, {
            withCredentials:true,
            headers:{
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        }).then((res) => {
            console.log(res);
            sendKakaoTokenToServer(res.data.access_token)
        });
    }
    const sendKakaoTokenToServer = (token) => {
        axios.post('api.novelier.co.kr/users/login',{
            accessToken: token,
            vendor: 'kakao',
        })
        .then((res) => {
            const user = res.data.user;
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const moving = () => {
        window.location.href = KAKAO_AUTH_URL;
    }

    return(<>
        <div>
            <img className="Kakaoimage" alt="Kakaoimage" onClick={moving} style={{marginTop: "65.8px", marginLeft: "255px",width:"62.4px", height:"62.4px"}}src={Kakaoimage} />
        </div>
    </>)
}






export default Loginpage;