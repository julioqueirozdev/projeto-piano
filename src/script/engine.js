const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysCheck = document.querySelector('.keys-check input')

let mapedKeys = [];


let audio = new Audio('src/tunes/a.wav')

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add('active')
    setTimeout(() =>{
        clickedKey.classList.remove('active');
    }, 150)
} 

pianoKeys.forEach((key)=> {
    console.log(key.dataset.key)
    key.addEventListener('click', ()=> playTune(key.dataset.key))
    mapedKeys.push(key.dataset.key);
})

// ouvir as teclas do teclado
document.addEventListener('keydown', (e) => {

    if(mapedKeys.includes(e.key)){
        playTune(e.key);
    }
})

// controle de volume 
const handleVolume = (e) => {
    audio.volume = e.target.value
    console.log(e.target.input)
};

volumeSlider.addEventListener('input', handleVolume);

//liga e desliga as keys do piano 
const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle('hide'))
} 

keysCheck.addEventListener('click', showHideKeys)