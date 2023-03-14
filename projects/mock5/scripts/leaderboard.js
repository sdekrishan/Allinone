let tbody = document.querySelector("tbody");
async function getData() {
  let response = await fetch("https://mock5-flax.vercel.app/blogs");
  response = await response.json();
  display(response);
}

getData();

function display(arr) {
  tbody.innerHTML = null;
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i].username] === undefined) {
      obj[arr[i].username] = 1;
    } else {
      obj[arr[i].username]++;
    }
  }
  console.log(obj);
  for (let key in obj) {
    let tr = document.createElement("tr");
    let username = document.createElement("td");
    let posts = document.createElement("td");
    let likes = document.createElement("td");
    let likesCount = 0;
    let comments = document.createElement("td");
    let commentsCount = 0;
    let numberOfPosts = arr.filter((el) => el.username === key);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].username === key) {
        likesCount += arr[i].likes;
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].username === key) {
        commentsCount += arr[i].comments.length;
      }
    }

    likes.innerText = likesCount > 0 ? likesCount : 0;
    comments.innerText = commentsCount;
    username.innerText = key;
    posts.innerText = numberOfPosts.length;
    tr.append(username, posts, likes, comments);
    tbody.append(tr);
  }
}

const handle =()=>{
  window.location.href='blogs.html'
}