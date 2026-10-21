const fedBtn = document.getElementById("confederation-btn");
const sopraBtn = document.getElementById("resistance-btn");
const othersBtn = document.getElementById("others-btn");
const fed = document.getElementById("confederation-avatars");
const sopra = document.getElementById("resistance-avatars");
const others = document.getElementById("others-avatars");

// SOPRA BOTTON CLICK 

sopraBtn.addEventListener('click', () => {
  fed.classList.add('hidden');
  others.classList.add('hidden');
  sopra.classList.remove('hidden');
  sopra.classList.add('grid');
});

// FED BUTTON CLICK 

fedBtn.addEventListener('click', () => {
  sopra.classList.add('hidden');
  others.classList.add('hidden');
  fed.classList.remove('hidden');
  fed.classList.add('grid');
});

// OTHERS BUTTON CLICK 

othersBtn.addEventListener('click', () => {
  sopra.classList.add('hidden');
  fed.classList.add('hidden');
  others.classList.remove('hidden');
  others.classList.add('grid');
});