import React,{useEffect,useState} from 'react'
import Banner from '../Image/노벨리에 사전예약 기간 배너-001.png';
import Pagination from "./Pagination";
import Posts from "./Posts";
import axios from 'axios';
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer';
import ImageSlider, {Slide} from 'react-auto-image-slider';

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
      <div >
          <Slider {...settings} >
          <div>
          <img alt="img1" style={{width:"1200px",height:"270px",marginLeft:"360px",position:"relative"}} src={Banner} />
          </div>
          <div>
          <img alt="img2" style={{width:"1200px",height:"270px",marginLeft:"360px",position:"relative"}} src={sub} />
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
    return(
        <div>
          <Navbar/>
          <MainSlider/>
           <div style={{marginTop: "90px", marginLeft: "360px"}} >
            <Posts posts={currentPosts(posts)} loading={loading}></Posts>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={setCurrentPage}
      ></Pagination>
        </div>
        <Footer/>
        </div>
        
    );
}


export default Mainpage;