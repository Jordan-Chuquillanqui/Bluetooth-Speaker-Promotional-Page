(() => {

  //variables
  const button = document.querySelector("#button");
  const burgerCon = document.querySelector("#burger-con");


  gsap.registerPlugin(ScrollTrigger);

  const canvas = document.querySelector("#explode-view");
  const context = canvas.getContext("2d");

  canvas.width = 1280;
  canvas.height = 720;

  const frameCount = 150;
  const images = [];
  const speaker = { frame: 0};


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


  function scrollAnimation() {
    for (let i = 0; i < frameCount; i++) {
      const image = new Image();
      image.src = `images/speaker_animation/speaker_animation${(i).toString().padStart(4, '0')}.jpg`;
      images.push(image);
    }

    gsap.to(speaker, {
      frame: frameCount - 1,
      snap: "frame",
      scrollTrigger: {
        trigger: "#explode-view",
        pin: true,
        scrub: 1
      },
      onUpdate: render
    });
  }

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[speaker.frame], 0, 0, canvas.width, canvas.height);
  }

  scrollAnimation();

  
  function loadInfo() {
    let mobileSelected = document.querySelector("#mobile-features")
    infoBoxes.forEach((infoBox, index) => {
     
      let selected = document.querySelector(`#hotspot-${index+1}`);
     
      const titleElement = document.createElement('h2');
      titleElement.textContent = infoBox.title;

      const textElement = document.createElement('p');
      textElement.textContent = infoBox.text;

      const imgElement = document.createElement('img');
      imgElement.src = infoBox.image;


      selected.appendChild(imgElement);
      selected.appendChild(titleElement);
      selected.appendChild(textElement);

      mobileSelected.appendChild(imgElement.cloneNode(true));
      mobileSelected.appendChild(titleElement.cloneNode(true));
      mobileSelected.appendChild(textElement.cloneNode(true));
    });
  }

  loadInfo();


  gsap.utils.toArray(".imagebox").forEach(function(imagebox) {
    gsap.from(imagebox, {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: imagebox,
        start: "top 60%",
        toggleActions: "play none none none"
      }
    });
  });

  function moveDivisor() {
    divisor.style.width = `${slider.value}%`;
  };

  function resetSlider() {
    slider.value = 50;
  };

  //Event Listeners
  button.addEventListener("click", hamburgerMenu);

  images[0].addEventListener("load", render);

  slider.addEventListener("input", moveDivisor);
  window.addEventListener("load", resetSlider);

})();

