import React,{useEffect,useState} from 'react'
import Banner from '../Image/노벨리에 사전예약 기간 배너-001.png';
import Pagination from "./Pagination";
import Posts from "./Posts";
import axios from 'axios';
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer';
import ImageSlider, {Slide} from 'react-auto-image-slider';
import './Mainpage.css';

import sub from '../Image/노벨리에 사전예약 기간 배너-001.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "green" }}
      onClick={onClick}
    />
  );
}
function MainSlider() {
 
  const settings = {
    infinite: true,
    slickarrow: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    dots: true,
   
  };
    return (
      <div className="image-slider" style={{width:"1200px", marginLeft:"360px"}}>
          <Slider {...settings} >
          <div>
          <img alt="img1" style={{width:"1200px",height:"270px",position:"realtive",zindex: 1}} src={Banner} />
          </div>
          <div>
          <img alt="img2" style={{width:"1200px",height:"270px",position:"realtive",zindex: 1}} src={sub} />
          </div>
          </Slider>
      </div>
    );
  }
function Mainpage(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    

    useEffect(() => {

    })

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  /* 새로 추가한 부분 */
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };
    console.log(posts);
    const [selected, setSelected] = useState("button1");
  const handleClick1 = () => {
    setSelected("button1");
  };

  const handleClick2 = () => {
    setSelected("button2");
  };
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
          <Navbar/>
          <MainSlider/>
          <div style={{marginTop:"10px"}}><button style={style1} onClick={handleClick1}>추천순</button><button style={style2} onClick={handleClick2}>시간순</button></div>
           <div style={{marginTop: "10px", marginLeft: "360px"}} >
           
            <Posts posts={currentPosts(posts)} loading={loading}></Posts>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={setCurrentPage}
      ></Pagination>
        </div>
        <br />
        <br />
        <Footer/>
        </div>
        
    );
}


export default Mainpage;