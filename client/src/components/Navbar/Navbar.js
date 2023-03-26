import React,{useState,useReducer} from 'react';
import {createStore} from 'redux';
import {useDispatch} from 'react-redux';
import Novelist from '../Image/Navbar_logo.png';

import NewText from '../Image/pen.png';
import Image from '../Image/돋보기.png';
import Mypage from '../Dropdown/Ad';
import Bell from '../Dropdown/Bell';


import './Navbar.css';

function movetomain(){
  window.location.href="/";
}
function movetotext(){
  window.location.href="/text";
}
function Navbar(){

    const initialState ={
      searchTerm: '',
      filteredData: [],
    };

    const reducer = (state = initialState, action) => {
      switch(action.type){
        case 'SET_SEARCH_TERM':
          return{
            ...state,
            searchTerm: action.payload,
          };
        case 'SET_FILTERED_DATA':
          return{
            ...state,
            filteredData: action.payload,
          };
          default:
            return state;
      }
    };

    const store = createStore(reducer);

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (event) => {
      const searchTerm = event.target.value;

      dispatch({type: 'SET_SEARCH_TERM', payload: searchTerm});

      const fetchData = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        const filteredData = data.filter(item => item.title.includes(searchTerm));
        dispatch({type: 'SET_FILTERED_DATA', payload: filteredData});
      };

      fetchData();
    };

    const Text = ()=> {

     
        return(
        <div>
           <div style={{ display: 'flex', alignItems: 'center' }}>
             <img onClick={movetomain} className="Novelist" alt="Novelist" style={{ width: "122.9px", height: "30px", marginTop: "30px", marginLeft: "225px" }} src={Novelist} />
             <input type="text" value={state.searchTerm} onChange={handleChange} placeholder="  #해쉬태그로 검색해보세요" style={{ width: "588px", height: "30px", marginTop: "30px", marginLeft: "318.1px", backgroundColor: '#FFFFFF', borderRadius: "50px", }}></input>
             {/* <ul>
               {state.filteredData.map(item => <li key={item.id}>{item.title}</li>)}
             </ul> */}
             <img className="Image" alt="Image" style={{ width: "30.31px", height: "30px", marginLeft: "-45px", marginTop: "28px" }} src={Image} />
             <div>
             <Bell />
             <Mypage />
             <div><img onClick={movetotext} className="NewText" alt="NewText" style={{ width: "24px", height: "23px",marginLeft:"381px",marginTop:"-26px",position:"absolute"}} src={NewText} /></div>
             
             </div>
            
        </div>
        </div>
        )}
   
        return(
            <div>
                <Text />
                <br/>
                <Button1/>
                <br/>
            </div>
        )
    
}


//npm install styled-component 해야됨
 function Button1() {
    let data=["전체작품","객관식작","주관식작","로맨스","판타지","로판","남성향","여성향",/*"선호태그","선호태그","선호태그","선호태그","선호태그"*/];
    let[btnActive, setBtnActive] = useState("");
    const toggleActive = (e) => {
        setBtnActive((prev) => {
          return e.target.value;
        });
      };
   

       
        return(
            <div style={{margintop:"113px",marginLeft:"389px"}}>
                 <table>
        {data.map((item, idx) => {
        return (
          <>
            <button
              value={idx}
              className={"Btn" + (idx == btnActive ? " active" : "")}
              onClick={toggleActive}
            >
              {item}
            </button>
          </>
        );
      })}
                 </table>
    
            </div>
    
        ) 
}

 




export default Navbar;