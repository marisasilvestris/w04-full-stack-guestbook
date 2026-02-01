const display = document.getElementById(`reviewsList`);
const form = document.getElementById(`reviewForm`);

const baseURL = `https://w04-full-stack-guestbook.onrender.com`;
// const baseURL = `http://localhost:8080`;

async function fetchData() {
  const response = await fetch(`${baseURL}/reviews`);
  const messages = await response.json();

  return messages;
}

function buildReview(username, rating, reviewText) {
  const reviewItem = document.createElement(`li`);
  reviewItem.classList.add(`review`);
  reviewItem.innerHTML = `<div class="left">
              <div class="username">
                <img src="#" />
                <p>${username}</p>
              </div>
            </div>
            <div class="right">
              <div class="rating">
                <p>${rating}</p>
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
    console.log(review);
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
