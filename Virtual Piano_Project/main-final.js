// get all keys
const keys = document.querySelectorAll(".key")
const blackKeys = document.getElementsByClassName("black");
const whiteKeys = document.getElementsByClassName("white");
const switcher = document.getElementById("switcher");
var counter = 0;

function playNote(event) {
  
  let audioKeyCode = getKeyCode(event);

  // typed or pressed key
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

  // if key exists
  const cantFoundAnyKey = !key

  if(cantFoundAnyKey) {
    return;
  }

  addPlayingClass(key)
  playAudio(audioKeyCode)
}

function addPlayingClass(key) {
  key.classList.add('playing')
}

function getKeyCode(event) {
  let keyCode;

  const isKeyboard = event.type === "keydown"
  if(isKeyboard) {
    keyCode = event.keyCode
  } else {
    keyCode = event.target.dataset.key
  }

  return keyCode
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
  audio.currentTime = 0;
  audio.play()
}

function removePlayingClass(event) {
  event.target.classList.remove("playing")
}

function registerEvents() {
  // click with mouse
  keys.forEach( function(key) {
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
  })

  // keyboard type
  window.addEventListener("keydown", playNote)
}

window.addEventListener("load", registerEvents)


function colorswap() {
  if (counter%3 == 0) {
    for (var i = 0; i < blackKeys.length; i++) {
      blackKeys[i].style.background="#4d1635";
    }
    for (var j = 0; j < whiteKeys.length; j++) {
      whiteKeys[j].style.background="#b5c2c7";
    }
    switcher.style.backgroundColor="#b5c2c7"
  }
  else if (counter%3 == 1) {
    for (var i = 0; i < blackKeys.length; i++) {
      blackKeys[i].style.background="#222c3c";
    }
    for (var j = 0; j < whiteKeys.length; j++) {
      whiteKeys[j].style.background="#d8b26e";
     }
    switcher.style.backgroundColor="#d8b26e"
  }
  else if (counter%3 == 2) {
    for (var i = 0; i < blackKeys.length; i++) {
      blackKeys[i].style.background="black";
    }
    for (var j = 0; j < whiteKeys.length; j++) {
      whiteKeys[j].style.background="white";
    }
    switcher.style.backgroundColor="white"
  }
  counter=counter+1;
}