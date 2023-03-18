import React, {useState,useEffect} from 'react';

function movetoweblogin(){
    window.location.href="/login";

}

function movetomobilelogin(){
    window.location.href="/mobilelogin";
}

function ConnectLogin(){
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    
    useEffect(()=>{
        const resizeListener = () => {
            setInnerWidth(window.innerWidth);
        };
        window.addEventListener("resize",resizeListener);
    })

    function Connector(){
        if(innerWidth <= 1000)
        {
            movetomobilelogin();
        }
        else{
            movetoweblogin();
        }
    }

    return(
        <div>
            <Connector />
        </div>
    )

}

export default ConnectLogin;