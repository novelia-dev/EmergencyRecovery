import React, { useState } from 'react';

function Tag() {
  const [buttonStyles, setButtonStyles] = useState([
    { backgroundColor: '#FFFFFF', color: '' ,border: "0.5px solid #AA0140",borderRadius: "50px",fontSize: "10px"},
    { backgroundColor: '#FFFFFF', color: '' ,border: "0.5px solid #AA0140",borderRadius: "50px",fontSize: "10px"},
    { backgroundColor: '#FFFFFF', color: '' ,border: "0.5px solid #AA0140",borderRadius: "50px",fontSize: "10px"},
    { backgroundColor: '#FFFFFF', color: '' ,border: "0.5px solid #AA0140",borderRadius: "50px",fontSize: "10px"},
    { backgroundColor: '#FFFFFF', color: '' ,border: "0.5px solid #AA0140",borderRadius: "50px",fontSize: "10px"},
    { backgroundColor: '#FFFFFF', color: '' ,border: "0.5px solid #AA0140",borderRadius: "50px",fontSize: "10px"},
    { backgroundColor: '#FFFFFF', color: '' ,border: "0.5px solid #AA0140",borderRadius: "50px",fontSize: "10px"},
    { backgroundColor: '#FFFFFF', color: '' ,border: "0.5px solid #AA0140",borderRadius: "50px",fontSize: "10px"},
  ]);

  const handleClick = (index, backgroundColor) => {
    const newStyles = [...buttonStyles];
    const isSameColor = newStyles[index].backgroundColor === backgroundColor;
    newStyles[index] = {
      backgroundColor: isSameColor ? '' : backgroundColor,
      color: isSameColor ? '' : 'white',
      border: "0.5px solid #AA0140",borderRadius: "50px",fontSize: "10px",
    };
    setButtonStyles(newStyles);
  };
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 1.5; // 드래그 속도 조절
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
    style={{cursor: 'grab', display: 'flex',userSelect: 'none',width: '100%',overflowX: 'hidden',whiteSpace: 'nowrap',}}
    onMouseDown={handleMouseDown}
    onMouseMove={handleMouseMove}
    onMouseUp={handleMouseUp}>

      <button
        style={buttonStyles[0]}
        onClick={() => handleClick(0, '#AA0140')}
      >
        선호태그
      </button>
      &nbsp;

      <button
        style={buttonStyles[1]}
        onClick={() => handleClick(1, '#AA0140')}
      >
        선호태그
      </button>

      &nbsp;
      <button
        style={buttonStyles[2]}
        onClick={() => handleClick(2, '#AA0140')}
      >
        선호태그
      </button>

      &nbsp;
      <button
        style={buttonStyles[3]}
        onClick={() => handleClick(3, '#AA0140')}
      >
        선호태그
      </button>

      &nbsp;
      <button
        style={buttonStyles[4]}
        onClick={() => handleClick(4, '#AA0140')}
      >
        선호태그
      </button>
      &nbsp;

      <button
        style={buttonStyles[5]}
        onClick={() => handleClick(5, '#AA0140')}
      >
        선호태그
      </button>
      &nbsp;

      <button
        style={buttonStyles[6]}
        onClick={() => handleClick(6, '#AA0140')}
      >
        선호태그
      </button>

      &nbsp;
      <button
        style={buttonStyles[7]}
        onClick={() => handleClick(7, '#AA0140')}
      >
        선호태그
      </button>


    </div>
  );
}

export default Tag;