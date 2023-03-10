import React, {Suspense} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";



import ConnectLogin from "./components/Loginpage/ConnectLogin";
import ConnectRegister from "./components/Registerpage/ConnectRegister";

import Navbar from "./components/Navbar/Navbar"
import Mainpage from "./components/Mainpage/Mainpage";
import DetailPage from "./components/DetailPage/DetailPage";
import DetailMyPage from "./components/DetailPage/DetailMyPage";
import DetailPointShop from "./components/DetailPage/DetailPointShop";
import Loginpage from"./components/Loginpage/Loginpage";
import Registerpage from"./components/Registerpage/Registerpage";
import Registerpage2 from "./components/Registerpage/Registerpage2";
import Registerpage3 from "./components/Registerpage/Registerpage3";
import Registerpage4 from "./components/Registerpage/Registerpage4";
import Registerpage5 from "./components/Registerpage/Registerpage5";
import Footer from "./components/Footer/Footer";
import Readworkpage from "./components/Readworkpage/Readworkpage";
import Readworkpage2 from "./components/Readworkpage/Readworkpage2";
import Readworkpage3 from "./components/Readworkpage/Readworkpage3";
import Readworkpage4 from "./components/Readworkpage/Readworkpage4";
import Readworkpage5 from "./components/Readworkpage/Readworkpage5";
import Notice from "./components/Notice/Notice";
import Notice2 from "./components/Notice/Notice2";
import Ask from "./components/Ask/Ask";
import Tos from "./components/Tos/Tos";
import Privacypolicy from "./components/Privacypolicy/Privacypolicy";
import About from "./components/About/About";
import Choose from "./components/Feedback/Choose";
import Write from "./components/Feedback/Write";
import RegisterText from "./components/RegisterText/RegisterText";
import RegisterText2 from "./components/RegisterText/RegisterText2";
import RegisterText3 from "./components/RegisterText/RegisterText3";
import RegisterText4 from "./components/RegisterText/RegisterText4";
import RegisterText5 from "./components/RegisterText/RegisterText5";
import RegisterText6 from "./components/RegisterText/RegisterText6";
import RegisterText7 from "./components/RegisterText/RegisterText7";
import ChooseKeyword from "./components/RegisterText/ChooseKeyword";
import Hilight from "./components/RegisterText/Hilight";
import FeedSelect from "./components/RegisterText/FeedSelect";
import Buy from "./components/Buy/Buy";
import MyPageInfo from "./components/MyPage/MyPageInfo";
import MyPageInfoChange from "./components/MyPage/MyPageInfoChange";
import MyPageFeedback from "./components/MyPage/MyPageFeedback";
import MyPageFeedbackComplete from "./components/MyPage/MyPageFeedbackComplete";
import MyPageScrap from "./components/MyPage/MyPageScrap";
import MyPointShop from "./components/MyPage/MyPointShop";
import MyGiftCoupon from "./components/MyPage/MyGiftCoupon";
import MyInput from "./components/MyPage/MyInput";
import MyPointStats from "./components/MyPage/MyPointStats";
import ChooseFeedback from "./components/Feedback/ChooseFeedback";
import WriteFeedback from "./components/Feedback/WriteFeedback";

import MobileMainPage from "./components/Mainpage/mobile/MobileMainpage";
import MobileLoginPage from "./components/Loginpage/mobile/MobileLoginPage";
import MobileLoginPage2 from "./components/Loginpage/mobile/MobileLoginPage2";
import MobileRegisterPage from "./components/Registerpage/mobile/MobileRegisterPage";
import MobileRegisterPage2 from "./components/Registerpage/mobile/MobileRegisterPage2";
import MobileMyPageInfo from "./components/MyPage/mobile/MobileMyPageInfo";
import MobileMyPointShop from "./components/MyPage/mobile/MobileMyPointShop";
import MobileDetailPointShop from "./components/DetailPage/mobile/MobileDetailPointShop";
import MobileMyInput from "./components/MyPage/mobile/MobileMyInput";
import MobileChooseFeedback from "./components/Feedback/mobile/MobileChooseFeedback";
import MobileWriteFeedback from "./components/Feedback/mobile/MoblieWriteFeedback";
import MobileFavoritepage from "./components/Mainpage/mobile/MobileFavoritepage";
import MobileScrappage from "./components/Mainpage/mobile/MobileScrappage";
import MobileDetailScrap from "./components/DetailPage/mobile/MobileDetailScrap";
import MobileDetaailScrapread from './components/DetailPage/mobile/MobileDetailScrapread';
import MobileFeedbackpage from "./components/Mainpage/mobile/MobileFeedbackpage";
import MobileDetailFeedback from "./components/DetailPage/mobile/MobileDetailFeedback";
import DetailMyGiftCoupon from "./components/DetailPage/DetailMyGiftCoupon";
function App() {
  return (
    <Router>
      <Suspense fallback ={<div>Loading...</div>}>
    
        <div>
          <Routes>

            <Route path="/connectlogin" element= {<ConnectLogin />} />
            <Route path="/connectregister" element={<ConnectRegister />} />

            <Route path="/" element={<Mainpage />} />
            <Route path="/:id" element={<DetailPage />} />
            <Route path ="/login" element={<Loginpage />} />
            <Route path ="/login/callback" element={<Loginpage/>} />
            <Route path ="/register" element={<Registerpage />} />
            <Route path ="/register2" element={<Registerpage2 />} />
            <Route path ="/register3" element={<Registerpage3 />} />
            <Route path ="/register4" element={<Registerpage4 />} />
            <Route path ="/register5" element={<Registerpage5 />} />
            <Route path ="/:id/read1" element={<Readworkpage />} />
            <Route path ="/:id/read2" element={<Readworkpage2 />} />
            <Route path ="/:id/read3" element={<Readworkpage3 />} />
            <Route path ="/:id/read4" element={<Readworkpage4 />} />
            <Route path ="/:id/read5" element={<Readworkpage5 />} />
            <Route path ="/notice" element={<Notice />} />
            <Route path ="/notice2" element={<Notice2 />} />
            <Route path ="/ask" element={<Ask />} />
            <Route path ="/tos" element={<Tos />} />
            <Route path ="/privacy" element={<Privacypolicy />} />
            <Route path = "/about" element = {<About />} />
            <Route path ="/:id/choose" element={<Choose />} />
            <Route path ="/:id/write" element= {<Write />} />
            <Route path ="/text" element= {<RegisterText />} />
            <Route path = "/text/:text" element={<RegisterText2 />}/>
            <Route path = "/text/1" element = {<RegisterText3 />} />
            <Route path = "/text/2" element = {<RegisterText4 />} />
            <Route path = "/text/3" element = {<RegisterText5 />} />
            <Route path = "/text/4" element = {<RegisterText6 />} />
            <Route path = "/text/5" element = {<RegisterText7 />} />
            <Route path = "/choosekeyword" element = {<ChooseKeyword />} />
            <Route path ="/high" element= {<Hilight />} />
            <Route path ="/feed" element= {<FeedSelect />} />
            <Route path ="/buy" element={<Buy />} />
            <Route path ="/myinfo" element={<MyPageInfo />} />
            <Route path ="/myinfochange" element={<MyPageInfoChange />} />
            <Route path ="/myfeedback" element={<MyPageFeedback/>} />
            <Route path ="/myfeedbackcomplete" element={<MyPageFeedbackComplete />} />
            <Route path ="/myscrap" element={<MyPageScrap />} />
            <Route path ="/myscrap/:id" element={<DetailMyPage/>} />
            <Route path ="/mypoint" element={<MyPointShop /> }/>
            <Route path ="/mypoint/:id" element={<DetailPointShop />} />
            <Route path ="/mygift" element={<MyGiftCoupon />} />
            <Route path ="/mygift/:id" element={<DetailMyGiftCoupon />} />
            <Route path ="/myinput" element={<MyInput />} />
            <Route path ="/mypointstats" element={<MyPointStats />} />
            <Route path ="/:id/chooseFeedback" element={<ChooseFeedback />} />
            <Route path ="/:id/writeFeedback" element={<WriteFeedback />} />

            <Route path ="/mobile" element={<MobileMainPage />} />
            <Route path = "/mobilelogin" element={<MobileLoginPage />} />
            <Route path ="/mobilelogin2" element={<MobileLoginPage2 />} />
            <Route path = "/mobileregister" element={<MobileRegisterPage />} />
            <Route path = "/mobileregister2" element={<MobileRegisterPage2 />} />
            <Route path = "/mobilemyinfo" element={<MobileMyPageInfo />} />
            <Route path ="/mobilemypoint" element={<MobileMyPointShop />} />
            <Route path ="/mobilemypoint/:id" element={<MobileDetailPointShop />} />
            <Route path ="/mobilemyinput" element={<MobileMyInput />} /> 
            <Route path ="/mobilefeedback/:id/choose" element={<MobileChooseFeedback />} />
            <Route path ="/mobilefeedback/:id/write" element={<MobileWriteFeedback />} />
            <Route path ="/mobilefavorite" element={<MobileFavoritepage /> } />
            <Route path ="/mobilescrap" element ={<MobileScrappage />} />
            <Route path ="/mobilescrap/:id" element={<MobileDetailScrap /> } />
            <Route path ="/mobilescrap/:id/:text" element={<MobileDetaailScrapread />} />
            <Route path ="/mobilefeedback" element={<MobileFeedbackpage />} /> 
            <Route path = "/mobilefeedback/:id" element={<MobileDetailFeedback />} />
          </Routes>
          
        </div>

      </Suspense>
    </Router>
  );
}

export default App;