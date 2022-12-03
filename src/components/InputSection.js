import React from 'react';

function InputSection() {

  const [meme, setMeme] = React.useState({
    topLine: '',
    bottomLine: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setAllMemeImages(data.data.memes))
  }, []);

  function handleClick() {
    let randomNum = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNum].url;
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