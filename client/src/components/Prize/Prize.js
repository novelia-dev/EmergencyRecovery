import React,{useState} from 'react';
import image from '../Image/Starbucks.png';

function getRandomPrize(){
    
    const prizes = [
        {name: '뿌링클 20,000원', imageUrl: image ,chance:0.004 },
        {name: '카카오페이지 캐시 5000원',imageUrl: image, chance: 0.026 },
        {name: '스타벅스 아메리카노 Tall', imageUrl: image, chance: 0.05},
        {name: '편의점 교환권 3000원', imageUrl: image,  chance: 0.11},
        {name: '1500포인트', imageUrl: image, chance: 0.25 },
        {name: '500포인트', imageUrl: image, chance: 0.56}
    ];
    
    let rand = Math.random();
    let acc = 0;

    for (let i = 0; i<prizes.length; i++)
    {
        acc += prizes[i].chance;
        if(rand < acc){
            return prizes[i];
        }
    }
}

function Result({name, imageUrl}){
    return(
        <div className="prize">
            <h2>{name}</h2>
            <img src={imageUrl} alt={name} />
        </div>
    );
}



export {Result as default, getRandomPrize};