(() => {

  //variables
  const button = document.querySelector("#button");
  const burgerCon = document.querySelector("#burger-con");

  const hotspots = document.querySelectorAll(".Hotspot");
  const infoBoxes = [
    {
      title: 'Surprisingly Deep Bass',
      text: 'Feel every beat. The passive side radiator is acoustically engineered to deliver immersive, high-quality sound and powerful lows, even in outdoor environments.',
      image: 'images/speaker.svg'
    },
    {
      title: 'Control With Simple Touch',
      text: 'The tactile buttons allow you to easily adjust volume, play, pause, and skip tracks.',
      image: 'images/power-button.svg'
    },
    {
      title: 'Smart LED Indicator',
      text: 'Your music never stops. The intuitive LED indicator shows your Bluetooth pairing status and changes color when the battery is running low.',
      image: 'images/led-indicator.svg'
    },
    {
      title: 'Water & Dust Protection',
      text: 'Made with a durable build, the rugged exterior is fully IP67-rated, making it waterproof and dustproof so you can take your music everywhere.',
      image: 'images/water-dust-proof.svg'
    },
  ]

  const divisor = document.querySelector("#divisor");
  const slider = document.querySelector("#slider");

  //functions
  function hamburgerMenu() {
    burgerCon.classList.toggle("slide-toggle");
    button.classList.toggle("expanded");
  }

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
     
      let selected = document.querySelector(`#hotspot-${index+1}`);

      //need to create title
      const titleElement = document.createElement("h2");
      titleElement.textContent = infoBox.title;
      //need to create text
      const textElement = document.createElement("p");
      textElement.textContent = infoBox.text;
      //need to create image
      const imageElement = document.createElement('img');
      imageElement.src= infoBox.image;


      selected.appendChild(imageElement);
      selected.appendChild(titleElement);
      selected.appendChild(textElement);
    });
  }

  loadInfo();

  function moveDivisor() {
    divisor.style.width = `${slider.value}%`;
  };

  function resetSlider() {
    slider.value = 50;
  };

  //Event Listeners
  button.addEventListener("click", hamburgerMenu);

  slider.addEventListener("input", moveDivisor);
  window.addEventListener("load", resetSlider);

})();

