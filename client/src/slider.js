const images = [
  {
    title: "alfalfa",
    src: "./src/img/cat0.webp",
    alt: "alfalfa the cat, acting extremely Normal",
  },
  {
    title: "zimmerman",
    src: "./src/img/cat2.webp",
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

// ======================= here onwards is just win95 nonsense
const startBar = document.getElementById(`startBar`);
startBar.tabIndex = -1;

// start button construction
const startBtn = document.createElement(`button`);
startBtn.id = `startBtn`;
startBtn.classList = startBtn.classList + `btn95 buttonIcon`;
startBtn.tabIndex = -1;

startBtn.innerHTML = `<p>Start</p>`;
startBar.appendChild(startBtn);

// quick launch construction - TODO
const launchList = [
  {
    label: ``,
    img: ``,
    alt: ``,
  },
  {
    label: ``,
    img: ``,
    alt: ``,
  },
  {
    label: ``,
    img: ``,
    alt: ``,
  },
  {
    label: ``,
    img: ``,
    alt: ``,
  },
];

// task bar construction
const taskList = [
  {
    label: `w02 Accessible Image Slider`,
    img: `./img/imagjpeg-0.png`,
    alt: `Accessible Image Slider task`,
  },
  {
    label: `Steam`,
    img: `./img/SteamOldFavicon.webp`,
    alt: `Steam task`,
  },
  {
    label: `Windows thing`,
    img: `./img/win.png`,
    alt: `Windows task`,
  },
];
const taskBar = document.createElement(`div`);
taskBar.id = `taskBar`;
startBar.appendChild(taskBar);

taskList.forEach((task) => {
  const taskElement = document.createElement(`button`);

  taskElement.classList = taskElement.classList + `btn95 buttonIcon`; // hey look, i know what i was going for but i just didn't get there!

  taskElement.innerHTML = `<p>${task.label}</p>`; // i feel like setting up a thing to insert a p tag and then filling that with text would have been a better option? my current solution makes it mildly more painful to edit later, should the need arise.
  taskElement.style.backgroundImage = `url('${task.img}')`;
  taskElement.src = task.img;
  taskElement.alt = task.alt;
  taskElement.tabIndex = -1;
  taskBar.appendChild(taskElement);
});

// tray icon construction, i want to get these parameters from a file at some point, but i don't have the time to play with that yet
const trayIcons = [
  {
    title: "",
    src: "./img/win.png",
    alt: "Windows icon",
  },
  {
    title: "",
    src: "./img/SteamOldFavicon.webp",
    alt: "Steam icon",
  },
  {
    title: "",
    src: "./img/help_question_mark-1.png",
    alt: "Help icon",
  },
  {
    title: "",
    src: "./img/mailbox_world-1.png",
    alt: "E-mail icon",
  },
];
const notifTray = document.createElement(`ul`);
notifTray.id = `notifTray`;
startBar.appendChild(notifTray);

trayIcons.forEach((icon) => {
  const imgElement = document.createElement(`img`);
  imgElement.src = icon.src;
  imgElement.alt = icon.alt;
  imgElement.tabIndex = -1;
  notifTray.appendChild(imgElement);
});

// clock BS, I think I did this a weird way??? but it works
const timeDisplay = document.createElement(`time`);
timeDisplay.id = `timeDisplay`;
notifTray.appendChild(timeDisplay);

function updateTime() {
  const time = new Date();
  const h = time.getHours();
  const m = time.getMinutes();
  if (m < 10) {
    timeDisplay.innerText = `${h}:0${m}`;
  } else {
    timeDisplay.innerText = `${h}:${m}`;
  }
}
updateTime();
setInterval(updateTime, 1000); // i found out about setInterval and used it without any research whatsoever, i hope it works how i think it does!
