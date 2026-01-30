const url = `http://localhost:8080`;

async function fetchData() {
  const res = (await fetch(`${url}/reviews`)).json();
  return res;
}

// async function showEntries() {
//   const reviewList = await fetchData();
//   reviewList.forEach((review) => {
//     console.log(review);
//   });
// }
// showEntries();
