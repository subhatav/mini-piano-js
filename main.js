const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

// Assume the default Audio Source as the `a` Tune
let allKeys = [], audio = new Audio(`tunes/a.wav`);

const playTune = (key) => {

  // Load the particular Tune based on the Key pressed/clicked
  audio.src = `tunes/${key}.wav`;

  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);

  // Add the `active` class from the element of the Key pressed/clicked
  clickedKey.classList.add("active");

  setTimeout(() => {

    // Remove the `active` class from the element of the Key pressed/clicked
    clickedKey.classList.remove("active");

  }, 150);
}

pianoKeys.forEach(key => {

  allKeys.push(key.dataset.key); // Add all Key values to the `allKeys` array

  // Attach the `playTune()` as an Event Listener to each Keys
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (event) => {

  // Pass the Range Slider value as the Audio Volume
  audio.volume = event.target.value;
}

const showHideKeys = () => {

  // Toggle the `hide` class for each Key on Checkbox Click
  pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (event) => {

  // Call the `playTune()` only if the pressed/clicked Key is present in `allKeys`
  if (allKeys.includes(event.key)) playTune(event.key);
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
