let keyPlayer = (e) => {

    let audioElement = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (audioElement == null) {
        return;
    }
    console.log(audioElement);
    audioElement.play();
    console.log(e.keyCode)
}

window.addEventListener('keydown', keyPlayer, false);