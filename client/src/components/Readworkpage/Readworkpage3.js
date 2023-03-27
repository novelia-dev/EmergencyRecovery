import React from 'react';

class Readworkpage3 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Text />
            </div>
        )
    }
}

function move(){
    window.location.href="/:id/read4";
}


function Text(){
    

    

        const style = {
            'position':'absolute',
            'left':"669px",
            'font-family':'Roboto',
            'font-weight':"700",
            'font-size':"22px",
            'line-height':"35.16px",
            'align':"center",
            'text-color':'#000000',
            'margin-left':"15px",
            'margin-top':"15px"
        }

        const style1 = {
            'position':'absolute',
            'margin-left':"18px",
            'margin-top':"83px",
            'font-family':'Roboto',
            'font-weight':"400",
            'font-size':"19px",
            'line-height':"22px",
            'align':"center",
            'text-color':'#000000'
        }

        const style2 = {
            'position':'absolute',
            'margin-left':"334px",
            'margin-top':"88px",
            'font-family':'Roboto',
            'font-weight':"400",
            'font-size':"16px",
            'line-height':"18.75px",
            'align':"center",
            'text-color':'#000000'
        }

        const style3 = {
            'position':'absolute',
            'width':"60px",
            'height':"30px",
            'margin-left':"400px",
            'margin-top':"85px",
            'align':"center",
            'background-color':"#FFFFFF",
        }
        const style4 = {
            'position':'absolute',
            'margin-left':"483px",
            'margin-top':"88px",
            'font-family':'Roboto',
            'font-weight':"400",
            'font-size':"16px",
            'line-height':"18.75px",
            'align':"center",
            'text-color':'#000000'
        }
        const style5 = {
            'position':'absolute',
            'width':"60px",
            'height':"30px",
            'margin-left':"518px",
            'margin-top':"85px",
            'align':"center",
            'background-color':"#FFFFFF",
        }
        
        const style6 = {
            'position':'absolute',
            'width':"117px",
            'height':"48px",
            'top':"1000px",
            'left':"900px",
            'font-family':'Roboto',
            'font-style':'Regular',
            'font-weight':"400",
            'font-size':"16px",
            'line-height':"19px",
            'align':"center",
            'Vertical-align':"center",
            'text-color':'#000000'
        }
        return(
            <div>
            <div style={{'marginLeft':"666px",'width':"588px",'height':"120px",'left':"669px",'border-width':"1px",'border-style':"solid",'border-color':"#E5E5E5",'border-spacing': "0",'border-collapse' : 'collapse'}}>
                <div style={style}>작품제목</div>
                <div style={style1}>3화</div>
                <div style={style2}>글자크기</div>
                <div style={style3}>
                <select>
                </select>
            </div>
            <div style = {style4}>간격</div>
                <div style = {style5}>
                <select>

                </select>    
                </div>  
            
            </div>
            <textarea placeholder="본문" style= {{position:'absolute','width':"582px",height:"840px",top:"120px",left:"666px"}}></textarea>
            <div>
                <button style={style6} onClick={move}>
                    다음화
                </button>
            </div>

            </div>
        )
    
}

export default Readworkpage3;