import React,{useState} from 'react';
import image from '../Image/Starbucks.png';

function getRandomPrize(){
    
    const prizes = [
        {name: '뿌링클 20,000원', imageUrl: image ,chance:0.01 },
        {name: '카카오페이지 캐시 5000원',imageUrl: image, chance: 0.033 },
        {name: '스타벅스 아메리카노 Tall', imageUrl: image, chance: 0.047},
        {name: '편의점 교환권 3000원', imageUrl: image,  chance: 0.095},
        {name: '1500포인트', imageUrl: image, chance: 0.205 },
        {name: '0포인트', imageUrl: image, chance: 0.61}
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