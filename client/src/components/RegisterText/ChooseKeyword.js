import React,{useState, useRef} from "react";


function ChooseKeyword(){

     
    const [text, setText] = useState('');
    const [arr, setarr] = useState([]);

    const [text1, setText1] = useState('');
    const [brr, setbrr] = useState([]);
    
    const [text2, setText2] = useState('');
    const [arr2, setarr2] = useState([]);
    
    const [text3, setText3] = useState('');
    const [arr3, setarr3] = useState([]);
    
    var size1 = arr.length;
    var size2 = brr.length;
    var size3 = arr2.length;
    var size4 = arr3.length;

    function inputok(){

        if(size1 === 20 && size2 === 20 && size3 === 20 && size4 === 20)
        {
            alert('작품 등록이 완료되었습니다!');
            window.location.href="/myfeedback";
        }
        else 
        {
            if(window.confirm("아직 키워드를 더 입력할 수 있습니다. 그래도 진행하시겠습니까?"))
            {
                alert('작품 등록이 완료되었습니다!');
                window.location.href="/myfeedback";
            }
            else{
                return ;
            }
        }
    }

    const InputText = (e) => {
        if(size1 <20)
        {
            setText(e.target.value);
        }
        else if(size1 >= 20)
        {
            alert('키워드가 10개를 초과했습니다.');
            ResetText();
        }
        
    }
    const ResetText = () => {
        setText('');
    }

    const handleSubmit = (e) => {
        setarr(arr => [...arr, text]);
        setarr(arr => [...arr,' ']);
        setText('');
    }


    const InputText1 = (f) => {
        if(size2 <20)
        {
            setText1(f.target.value);
        }
        else if(size2 >= 20)
        {
            alert('키워드가 10개를 초과했습니다.');
            ResetText1();
        }
    }
    const ResetText1 = () => {
        setText1('');
    }

    const handleSubmit1 = (f) => {
        setbrr(arr => [...arr, text1]);
        setbrr(arr => [...arr,' ']);
        setText1('');
    }

    const InputText2 = (g) => {
        if(size3 <20)
        {
            setText2(g.target.value);
        }
        else if(size3 >= 20)
        {
            alert('키워드가 10개를 초과했습니다.');
            ResetText2();
        }
    }
    const ResetText2 = () => {
        setText2('');
    }

    const handleSubmit2 = (g) => {
        setarr2(arr => [...arr, text2]);
        setarr2(arr => [...arr,' ']);
        setText2('');
    }

    const InputText3 = (h) => {
        if(size4 <20)
        {
            setText3(h.target.value);
        }
        else if(size4 >= 20)
        {
            alert('키워드가 10개를 초과했습니다.');
            ResetText3();
        }
    }
    const ResetText3 = () => {
        setText3('');
    }

    const handleSubmit3 = (h) => {
        setarr3(arr=> [...arr, text3]);
        setarr3(arr=> [...arr,' ']);
        setText3('');
    }



    return(
        <div>
             <div  style={{'width':"1200px",'marginLeft':"360px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5"}}>
                <h3>객관식 키워드 등록</h3>
                <h5>독자들이 고를 수 있는 객관식 키워드를 입력하세요.</h5>
                <h6>각 카테고리 당 키워드는 최대 10개를 입력하실 수 있습니다.</h6>
            </div>
            <div style={{'marginLeft':"360px"}}>
            <div >
                <h3>캐릭터</h3>
            </div>
            <div>
              <label>키워드 추가</label>
              <br></br><input type="text" onChange={InputText} value={text} placeholder="30자 이내" />
              <button onClick={handleSubmit}>추가</button>
              <button onClick={ResetText}>초기화</button>
            </div>
            <div>
                <b>{arr}</b>
            </div>
            <div>
                <h3>몰입도</h3>
            </div>
            <div>
            <label>키워드 추가</label><input type="text" onChange={InputText1} value={text1} placeholder="30자 이내" />
            <button onClick ={handleSubmit1}>추가</button>
            <button onClick ={ResetText1}>초기화</button>
            </div>
            <div>
                <b>{brr}</b>
            </div>
            <div>
                <h3>상업성</h3>
            </div>
            <div>
            <label>키워드 추가</label><input type="text" onChange={InputText2} value={text2} placeholder="30자 이내" />
            <button onClick={handleSubmit2}>추가</button>
            <button onClick={ResetText2}>초기화</button>
            </div>
            <div>
                <b>{arr2}</b>
            </div>
            <div>
                <h3>기타</h3>
            </div>
            <div>
            <label>키워드 추가</label><input type="text" onChange={InputText3} value={text3} placeholder="30자 이내" />
            <button onClick={handleSubmit3}>추가</button>
            <button onClick={ResetText3}>초기화</button>
            </div>
            <div>
                <b>{arr3}</b>
            </div>
            <br />
            <br />
            <div>
                <button onClick={inputok}>다음</button>
            </div>
            </div>
           
        </div>
    )

}

export default ChooseKeyword;