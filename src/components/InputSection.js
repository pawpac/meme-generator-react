import React from 'react';
import data from '../data';

function InputSection() {

  // let [memeNum, setMemeNum] = React.useState('');

  const [meme, setMeme] = React.useState({
    topLine: '',
    bottomLine: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  });

  const [allMemeImages, setAllMemeImages] = React.useState(data);

  function handleClick() {
    let randomNum = Math.floor(Math.random() * data.length);
    const url = data[randomNum].url;
    setMeme(prevState => ({
      ...prevState,
      randomImage: url
    }))
  };

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  return (
    <main>
      <div className='form'>
        <input 
          type='text' 
          name='topLine' 
          value={meme.topLine} 
          onChange={handleChange} 
          placeholder='Top line' 
        />
        <input 
          type='text' 
          name='bottomLine' 
          value={meme.bottomLine} 
          onChange={handleChange} 
          placeholder='Bottom line' 
        />
        <button onClick={handleClick}>Generate new image</button>
      </div>
      <div className='meme'>
          <div className='img-container'>
            <img src={meme.randomImage}></img>
          </div>
          <div className='text'>
            <h2 className='top-text'>{meme.topLine}</h2>
            <h2 className='bottom-text'>{meme.bottomLine}</h2>
          </div>
      </div>
    </main>
  );
};

export default InputSection;