import React from 'react';
import data from '../data';

function InputSection() {

  let [memeNum, setMemeNum] = React.useState('');

  function handleClick() {
    let randomNum = Math.floor(Math.random() * data.length);
    setMemeNum(data[randomNum].url);
  };
  return (
    <main>
      <div className='form'>
        <input type='text' placeholder='Top line' ></input>
        <input type='text' placeholder='Bottom line'></input>
        <button onClick={handleClick}>Generate new image</button>
        <img src={memeNum}></img>
      </div>
    </main>
  );
};

export default InputSection;