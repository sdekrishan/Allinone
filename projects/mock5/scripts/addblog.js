let check = JSON.parse(localStorage.getItem("token")) || false;

async function getData() {
  let response = await fetch(
    `https://mock5-flax.vercel.app/users?name=${check.username}`
  );
  response = await response.json();
  console.log(response,check);

  display(check, response[0]);
}
getData();

function display(check, obj) {
  if (check.status) {
    let name = document.querySelector("#name");
    name.value = obj.name;
  } else {
    window.location.href = "signin.html";
  }
}

function handleSubmit(event) {
  event.preventDefault();
  let username = document.querySelector("#name").value;
  let content = document.querySelector("#content").value;
  let title = document.querySelector("#title").value;
  let category = document.querySelector("#category").value;
  let date = document.querySelector("#date").value;
  let obj = {
    id: Date.now(),
    username,
    title,
    content,
    category,
    date,
    likes: 0,
    comments: [],
  };
  fetch(`https://mock5-flax.vercel.app/blogs`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => {
      alert("Blog Added");
    })
    .catch((err) => {
      alert("Something went wrong! Please try again!");
      console.log(err);
    });
}

const handleBlog = ()=>{
    window.location.href= 'blogs.html'
}
const handleLeaderBoard = ()=>{
    window.location.href= 'leaderboard.html'
}