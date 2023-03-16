import React, {useState,useEffect} from 'react';
//1
function movetoweb(){
    window.location.href="/";

}

function movetomobile(){
    window.location.href="/mobile";
}

function ConnectRegister(){
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    
    useEffect(()=>{
        const resizeListener = () => {
            setInnerWidth(window.innerWidth);
        };
        window.addEventListener("resize",resizeListener);
    })

    function Connector(){
        if(innerWidth <= 360)
        {
            movetomobile();
        }
        else{
            movetoweb();
        }
    }

    return(
        <div>
            <Connector />
        </div>
    )

}

export default ConnectRegister;