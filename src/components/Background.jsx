import React from 'react'

const randomRGB = function() {
    let rgb = '';
    rgb += (Math.floor(Math.random() * 90 + 1)+150).toString(16).padStart(2, '0');
    rgb += (Math.floor(Math.random() * 90 + 1)+150).toString(16).padStart(2, '0');
    rgb += (Math.floor(Math.random() * 90 + 1)+150).toString(16).padStart(2, '0');
    return rgb;
  }

const randomgradation = () => {
    const twoColor = []
    twoColor.push(randomRGB())
    twoColor.push(randomRGB())
    return twoColor
}

const Background = (props) => {
    
  return (
    <div>
        <button onClick={() => props.setBackgroundColor(randomRGB())}>랜덤 색상</button>
        <button onClick={() => props.setGradationColor(randomgradation())}>랜덤 그라데이션</button>
    </div>
  )
}

export default Background