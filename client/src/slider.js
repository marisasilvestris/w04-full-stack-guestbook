// leaving this array as-is rather than switching to a json import function because i don't have time to break everything
const images = [
  {
    title: "alfalfa",
    src: "https://msnicelupe.neocities.org/vault/guestbook/slider/cat0.webp",
    alt: "alfalfa the cat, acting extremely Normal",
  },
  {
    title: "zimmerman",
    src: "https://msnicelupe.neocities.org/vault/guestbook/slider/cat2.webp",
    alt: "zimmerman the cat, a lovely marshmallow boy lounging lazily on a rug and gazing just off frame.",
  },
];

// setting up
const imgContainer = document.getElementById(`imgContainer`);
const imgHeroContainer = document.createElement(`div`);
imgHeroContainer.id = `imgHeroContainer`;
imgContainer.appendChild(imgHeroContainer);
const imgHero = document.createElement(`img`);
imgHero.id = `imgHero`;
imgHeroContainer.appendChild(imgHero);

// thumbnail container
const imgThumbs = document.createElement(`ul`);
imgThumbs.id = `imgThumbs`;
imgContainer.appendChild(imgThumbs);
let imgIndex = 0;

function replaceImg(a) {
  imgHero.src = `${a.src}`;
  imgHero.alt = `${a.alt}`;
}

// ui
const leftBtn = document.createElement(`button`);
leftBtn.id = `leftBtn`;
leftBtn.ariaLabel = `Previous Image`;
leftBtn.ariaKeyShortcuts = `ArrowLeft`;
leftBtn.addEventListener(`click`, () => {
  if (imgIndex === 0) {
    replaceImg(images[images.length - 1]);
    imgIndex = images.length - 1;
  } else {
    replaceImg(images[imgIndex - 1]);
    imgIndex--;
  }
});
imgHeroContainer.appendChild(leftBtn);

const rightBtn = document.createElement(`button`);
rightBtn.id = `rightBtn`;
rightBtn.ariaLabel = `Next Image`;
rightBtn.ariaKeyShortcuts = `ArrowRight`;
rightBtn.addEventListener(`click`, () => {
  if (imgIndex + 1 === images.length) {
    replaceImg(images[0]);
    imgIndex = 0;
  } else {
    replaceImg(images[imgIndex + 1]);
    imgIndex++;
  }
});
imgHeroContainer.appendChild(rightBtn);

replaceImg(images[0]); // i think i could have removed some overcomplication in regard to initialising the imgHero by replacing the forEach below with a do-while loop? i don't know how essential that is, maybe i'm nit-picking

images.forEach((image, id) => {
  const liElement = document.createElement(`li`);
  liElement.classList = liElement.classList + `thumb`;
  const imgElement = document.createElement(`img`);
  imgElement.src = image.src;
  imgElement.alt = image.alt;
  imgElement.tabIndex = 1;
  imgElement.addEventListener(`click`, function () {
    replaceImg(imgElement);
    imgIndex = id;
  });

  liElement.appendChild(imgElement);
  imgThumbs.appendChild(liElement);
});

document.addEventListener(`keydown`, (event) => {
  switch (event.key) {
    case `ArrowLeft`:
      if (imgIndex === 0) {
        replaceImg(images[images.length - 1]);
        imgIndex = images.length - 1;
      } else {
        replaceImg(images[imgIndex - 1]);
        imgIndex--;
      }
      break;
    case `ArrowRight`:
      if (imgIndex + 1 === images.length) {
        replaceImg(images[0]);
        imgIndex = 0;
      } else {
        replaceImg(images[imgIndex + 1]);
        imgThumbs.scrollIntoView(images[imgIndex]);
        console.log(images.length);

        imgIndex++;
      }
      break;
    case ` `:
      replaceImg(images[0]);
    /* gotta figure this one out, i want to get the index of the focused thumbnail */
    default:
      console.log(event.key);

      break; /* this whole block is some precariously-teetering guff */
  }
});
