import React,{useEffect} from 'react';
import './App.css';

const generateColor = (color) => {
  if(!color){
    const numbers = '0123456789abcdef';
    color = '#';
    for(let i = 0 ; i < 6 ; i++){
      color += numbers[Math.floor(Math.random() * 16)];
    }
  }
  return color;
};
const App = () => {

  const changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  useEffect(() => () => changeBackgroundColor("unset"),[])
  return (
    <div className='App'>
      <button onClick={() => changeBackgroundColor(generateColor())} >Change background color</button>
    </div>
  )
}

export default App