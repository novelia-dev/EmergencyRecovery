import React from 'react';
import facebook from '../Image/facebook.png';
import twitter from '../Image/twitter.png';
import instagram from '../Image/instagram.png';
import logo from '../Image/수평로고.png';



const style = {
    backgroundColor: "#D9D9D9",
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "18.75px",
    color: "#000000",
    width: "1200px",
    height: "45px",
    position: "absolute",
    marginTop:"65px",
    left: "360px",
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "15px",
    paddingRight: "15px",
  };

  function Instagram(){
    window.location.href="https://instagram.com/novelier_official";
  }

  function Twitter(){
    window.location.href="https://twitter.com/novelier000";
  }

  function Facebook(){
    window.location.href="https://www.facebook.com/profile.php?id=100090376073494";
  }

  function Footer() {
    return (
      <div>
        <div style={style}>
          <a href="/privacy">개인정보처리방침</a>
          <a style={{ marginLeft: "15px" }} href="/notice">공지사항</a>
          <a style={{ marginLeft: "15px" }} href="/ask">문의하기</a>
          <a style={{ marginLeft: "15px" }} href="/about">서비스 설명</a>
          <h5 style={{ marginLeft: "15px", float: "left" }}>비지니스 메일 novelia000@gmail.com</h5>
        <img
          src={facebook}
          style={{ marginLeft: "100px", float: "left" }}
          alt="페이스북"
          onClick={Facebook}
        />
        <img
          style={{ marginLeft: "22.8px", float: "left" }}
          src={twitter}
          alt="트위터"
          onClick={Twitter}
        />
        <img
          style={{ marginLeft: "23px", float: "left" }}
          src={instagram}
          alt="인스타그램"
          onClick={Instagram}
        />
        <img
          style={{ marginLeft: "117px", float: "left" }}
          src={logo}
          alt="수평로고"
        />
        <div style={{ marginLeft: "15px", float: "left" }}>
          All rights reserved
        </div>
        </div>

      </div>
    );
  }
 
export default Footer;