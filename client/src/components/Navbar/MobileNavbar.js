import React,{useState,useRef,useEffect} from 'react';
import image1 from '../Image/menu-burger (2) 1.png';
import image2 from '../Image/수평로고 (1).png';
import image3 from '../Image/shopping-cart (2) 1.png';
import image4 from '../Image/bell (1) 1.png';
import image5 from '../Image/넘기기 화살표.png';
import './MobileNavbar.css';
function movetomain(){
    window.location.href="/mobile";
}
function movetopoint(){
    window.location.href="/mobilemypoint";
}

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [esOpen, setesOpen] = useState(false);
    const noticeLinksRef = useRef(null);
    const navbarLinksRef = useRef(null);
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
    const closeNavbar = () => {
      setIsOpen(false);
    };

    const toggleNotice = () => {
      setesOpen(!esOpen);
    }
    const closeNotice = () => {
      setesOpen(false);
    }

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (navbarLinksRef.current && !navbarLinksRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [navbarLinksRef]);

    useEffect(() => {
      const handleclickOutside = (event) => {
        if (noticeLinksRef.current && !noticeLinksRef.current.contains(event.target)) {
          setesOpen(false);
        }
      };
      document.addEventListener('mousedown', handleclickOutside);
      return () => {
        document.removeEventListener('mousedown', handleclickOutside);
      };
    }, [noticeLinksRef]);

    const [selectedList, setSelectedList] = useState("");
    const handleListClick = (list) => {
      setSelectedList(list);
    };
    return (
      <div >
      <nav className="navbar" style={{display: 'flex', flexDirection: 'row',backgroundColor:"#F1F1F1",width:"360px"}} >
        <img src={image1} alt="image1" className="navbar-toggle" onClick={toggleNavbar} />
          <i className="fa fa-bars"></i>
        <ul className={isOpen ? 'navbar-links active' : 'navbar-links'} ref={navbarLinksRef}>
          <li style={{marginTop:"-250px",width:"330px",marginLeft:"15px"}}><hr/></li>
          <li onClick={() => handleListClick("list1")} style={{width:"310px",height:"40px",marginLeft:"20px",paddingLeft:"10px",paddingTop:"15px",textAlign:"left",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>이용약관</li>
          <li style={{width:"330px",marginLeft:"15px"}}><hr/></li>
          <li onClick={() => handleListClick("list4")} style={{width:"310px",height:"40px",marginLeft:"20px",paddingLeft:"10px",paddingTop:"15px",textAlign:"left",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>개인정보처리방침</li>
          <li style={{width:"330px",marginLeft:"15px"}}><hr/></li>
          <li  onClick={() => handleListClick("list2")} style={{width:"310px",height:"40px",marginLeft:"20px",paddingLeft:"10px",paddingTop:"15px",textAlign:"left",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>공지사항</li>
          <li style={{width:"330px",marginLeft:"15px"}}><hr/></li>
          <li  onClick={() => handleListClick("list3")} style={{width:"310px",height:"40px",marginLeft:"20px",paddingLeft:"10px",paddingTop:"15px",textAlign:"left",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>문의하기</li>
          <li style={{width:"330px",marginLeft:"15px"}}><hr/></li>
  
           {/* 이용약관 */}
    {selectedList === "list1" && (
      <div style={{ display: selectedList === "list1" ? "block" : "none" }}>
        dkkdkdkdkd
      </div>
    )}
  
    {/* 공지사항 */}
    {selectedList === "list2" && (
      <div style={{ display: selectedList === "list2" ? "block" : "none" }}>
        adasd
      </div>
    )}
  
    {/* 문의하기 */}
    {selectedList === "list3" && (
      <div style={{ display: selectedList === "list3" ? "block" : "none" }}>
        111111
      </div>
    )}
    {/* 개인정보처리방침 */}
    {selectedList === "list4" && (
      <div style={{ display: selectedList === "list4" ? "block" : "none" }}>
        111111
      </div>
    )}

        </ul>
        <img src= {image5} alt="image5"  className={isOpen ? 'navbar-close active' : 'navbar-close'} onClick={closeNavbar}/>
          <i className="fa fa-times"></i>
          <div style={{marginTop:"10px"}}>
        <img src={image2} alt= "image2" style={{marginLeft:"50px"}}onClick={movetomain} />
        <img src={image3} alt= "image3" style={{marginLeft:"158px"}}onClick={movetopoint} />
        <img src={image4} alt= "image4" style={{marginLeft:"15px"}}onClick={toggleNotice} />
        <ul className={esOpen ? 'navbar-links active' : 'navbar-links'} ref={noticeLinksRef}>
          
          <li style={{marignTop:"3300px",width:"330px",marginLeft:"15px"}}><hr/></li>
          <li onClick={() => handleListClick("list1")} style={{width:"310px",height:"40px",marginLeft:"20px",paddingLeft:"10px",paddingTop:"15px",textAlign:"left",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>알림내용</li>
          <li style={{width:"330px",marginLeft:"15px"}}><hr/></li>
          <li onClick={() => handleListClick("list4")} style={{width:"310px",height:"40px",marginLeft:"20px",paddingLeft:"10px",paddingTop:"15px",textAlign:"left",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>알림내용</li>
          <li style={{width:"330px",marginLeft:"15px"}}><hr/></li>
          <li  onClick={() => handleListClick("list2")} style={{width:"310px",height:"40px",marginLeft:"20px",paddingLeft:"10px",paddingTop:"15px",textAlign:"left",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>알림내용</li>
          <li style={{width:"330px",marginLeft:"15px"}}><hr/></li>
          <li  onClick={() => handleListClick("list3")} style={{width:"310px",height:"40px",marginLeft:"20px",paddingLeft:"10px",paddingTop:"15px",textAlign:"left",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>알림내용</li>
          <li style={{width:"330px",marginLeft:"15px"}}><hr/></li>
          
         
  
           {/* 이용약관 */}
    {selectedList === "list1" && (
      <div style={{ display: selectedList === "list1" ? "block" : "none" }}>
        * 이용약관 *
      </div>
    )}
  
    {/* 공지사항 */}
    {selectedList === "list2" && (
      <div style={{ display: selectedList === "list2" ? "block" : "none" }}>
        * 공지사항 *
      </div>
    )}
  
    {/* 문의하기 */}
    {selectedList === "list3" && (
      <div style={{ display: selectedList === "list3" ? "block" : "none" }}>
        * 문의하기 *
      </div>
    )}
    {/* 개인정보처리방침 */}
    {selectedList === "list4" && (
      <div style={{ display: selectedList === "list4" ? "block" : "none" }}>
       * 개인정보처리방침 *
      </div>
    )}

  </ul>
  <img src= {image5} alt="image5"  className={isOpen ? 'navbar-close active' : 'navbar-close'} onClick={closeNotice}/>
       </div>
       </nav>
  
      </div>
    );
  };

export default MobileNavbar;