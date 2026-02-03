const display = document.getElementById(`reviewsList`);
const form = document.getElementById(`reviewForm`);

/* wish i'd done this wih local environment variables, i keep forgetting to swap them when i push */
const baseURL = `https://w04-full-stack-guestbook.onrender.com`;
// const baseURL = `http://localhost:8080`;

async function fetchData() {
  const response = await fetch(`${baseURL}/reviews`);
  const messages = await response.json();

  return messages;
}
function sanitise(str) {
  /* weak way to do this, want to find out a much better solution */
  str = str.replaceAll(" ", "-");
  str = str.replaceAll("'", "");
  return str;
}
console.log(sanitise("test  --"));
function buildReview(username, rating, reviewText) {
  const reviewItem = document.createElement(`li`);
  reviewItem.classList.add(`review`);
  reviewItem.classList.add(`${sanitise(username).toLowerCase()}`);
  reviewItem.innerHTML = `<div class="left">
              <div class="username">
                <div class="profile-pic"></div>
                <p>${username}</p>
              </div>
            </div>
            <div class="right">
              <div class="rating">
                <p>rating: ${rating}</p>
              </div>
              <div class="review-text">
                <p>${reviewText}</p>
              </div>
            </div>`;
  display.appendChild(reviewItem);
}

async function showEntries() {
  const reviewList = await fetchData();
  reviewList.forEach((review) => {
    buildReview(review.name, review.rating, review.reviewtext);
  });
}
showEntries();

async function reviewSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const userInput = Object.fromEntries(formData);
  const userInputJSON = JSON.stringify(userInput);

  const response = await fetch(`${baseURL}/reviews`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: userInputJSON,
  });
  const res = await response.json();
  window.location.reload();
}

form.addEventListener(`submit`, reviewSubmit);
