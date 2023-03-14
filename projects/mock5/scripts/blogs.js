let check = JSON.parse(localStorage.getItem("token")) || false;
let blog_container = document.querySelector("#blogs__container");
let add_blog_page = document.querySelector("#add_blog_page");
let filter_div = document.querySelector("#filter_div > input");
let filter = document.querySelector("#filter");
let sort = document.querySelector("#sort");

//for sorting 
sort.addEventListener("change", (event) => {
  console.log("sort");
  if (event.target.value === "") {
    fetch(`https://mock5-flax.vercel.app/blogs?_limit=4`)
      .then((res) => res.json())
      .then((res) => display(check, res))
      .catch((err) => console.log(err));
  } else {
    fetch(
      `https://mock5-flax.vercel.app/blogs?_sort=date&_order=${event.target.value}&_limit=4`
    )
      .then((res) => res.json())
      .then((res) => display(check, res))
      .catch((err) => console.log(err));
  }
});
//for filtering
filter.addEventListener("change", (event) => {
  if (event.target.value === "") {
    fetch(`https://mock5-flax.vercel.app/blogs?_limit=4`)
      .then((res) => res.json())
      .then((res) => display(check, res))
      .catch((err) => console.log(err));
  } else {
    fetch(
      `https://mock5-flax.vercel.app/blogs?category=${event.target.value}&_limit=4`
    )
      .then((res) => res.json())
      .then((res) => display(check, res))
      .catch((err) => console.log(err));
  }
});

//for searching

function handleInput(event) {
  setTimeout(() => {
    fetch(
      `https://mock5-flax.vercel.app/blogs?title=${event.target.value}&_limit=4`
    )
      .then((res) => res.json())
      .then((res) => display(check, res))
      .catch((err) => console.log(err));
  }, 2000);
}
add_blog_page.addEventListener("click", () => {
  window.location.href = "addblog.html";
});


//getdata funtion
async function getData() {
  let response = await fetch("https://mock5-flax.vercel.app/blogs?_limit=4");
  response = await response.json();
  console.log(response);
  display(check, response);
}

getData();

//display function
function display(check, arr) {

  //checking authentication
  if (check.status) {
    blog_container.innerHTML = null;
    arr.map((blog, index) => {
      let blog_box = document.createElement("div");
      let blog_title = document.createElement("h2");
      let blog_username = document.createElement("h3");
      let blog_date = document.createElement("p");
      let blog_content = document.createElement("p");

      let like_div = document.createElement("div");
      let like_count = document.createElement("button");
      like_count.setAttribute("class", "like_button");
      let comment_count = document.createElement("button");
      comment_count.setAttribute("class", "comment_btn");
      let comment_div = document.createElement("div");

      blog_username.innerText = blog.username;
      blog_date.innerText = blog.date;
      blog_title.innerText = blog.title;
      blog_content.innerText = blog.content;

      like_count.innerText = `Like ${blog.likes}`;
      comment_count.innerText = `Comment ${blog.comments.length}`;


      //creating buttons for adding and delteing the post
      if (blog.username === check.username) {
        let edit_post = document.createElement("button");
        edit_post.innerText = "Edit Post";
        let delete_post = document.createElement("button");
        delete_post.innerText = "Delete Post";
        let editModal = document.querySelector("#post_edit_modal");
        let editPostButton = document.querySelector("#editPostButton");
        edit_post.addEventListener("click", () => {
          editModal.style.display = "block";
        });
        editPostButton.addEventListener("click", () => {
          let editData = document.querySelector("#edit_content").value;
          fetch(`https://mock5-flax.vercel.app/blogs/${blog.id}`, {
            method: "PATCH",
            body: JSON.stringify({ content: editData }),
            headers: {
              "Content-type": "application/json",
            },
          })
            .then((res) => getData())
            .catch((err) => console.log(err));
          editModal.style.display = "none";
        });

        delete_post.addEventListener("click", () => {
          fetch(`https://mock5-flax.vercel.app/blogs/${blog.id}`, {
            method: "DELETE",
          })
            .then((res) => getData())
            .catch((err) => console.log(err));
        });
        blog_box.append(delete_post, edit_post);
      }


      //deleteing the comment
      if (blog.comments.length > 0) {
        blog.comments.map((comment, ind) => {
          let comment_inside_div = document.createElement("div");
          let comment_username = document.createElement("h3");
          comment_username.innerText = comment.username;
          let comment_content = document.createElement("p");
          comment_content.innerText = comment.content;
          comment_inside_div.append(comment_username, comment_content);
          if (comment.username === check.username) {
            let user_can_edit = document.createElement("button");
            user_can_edit.innerText = "Edit";
            user_can_edit.setAttribute('class','edit_btn')
            user_can_edit.addEventListener("click", () => {
              fetch(`https://mock5-flax.vercel.app/blogs/${blog.id}`, {
                method: "PATCH",
                body: JSON.stringify({ comments: [...blog.comments] }),
                headers: {
                  "Content-type": "application/json",
                },
              })
                .then((res) => getData())
                .catch((err) => console.log(err));
            });
            let user_can_delete = document.createElement("button");
            user_can_delete.setAttribute('class','comment_btn')
            user_can_delete.innerText = "Delete";
            user_can_delete.addEventListener("click", () => {
              blog.comments.splice(ind, 1);
              fetch(`https://mock5-flax.vercel.app/blogs/${blog.id}`, {
                method: "PATCH",
                body: JSON.stringify({ comments: [...blog.comments] }),
                headers: {
                  "Content-type": "application/json",
                },
              })
                // .then((res) => res.json())
                .then((res) => getData())
                .catch((err) => console.log(err));
            });
            comment_inside_div.append(user_can_delete, user_can_edit);
          }
          comment_div.append(comment_inside_div);
        });
      }


      //for increasing the count
      like_count.addEventListener("click", () => {
        fetch(`https://mock5-flax.vercel.app/blogs/${blog.id}`, {
          method: "PATCH",
          body: JSON.stringify({ likes: blog.likes + 1 }),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((res) => getData())
          .catch((err) => console.log(err));
      });


      let comment_tag = document.createElement("h2");
      comment_tag.innerText ='Comments :'
      let comment_modal = document.querySelector("#comment_modal");
      let comment_area = document.querySelector("#comment_area");
      let comment_button = document.querySelector("#post_comment");
      let close_comment = document.querySelector("#close_comment");


      comment_count.addEventListener("click", () => {
        comment_modal.style.display = "block";
        comment_button.addEventListener("click", () => {
          fetch(`https://mock5-flax.vercel.app/blogs/${blog.id}`, {
            method: "PATCH",
            body: JSON.stringify({
              comments: [
                ...blog.comments,
                { username: check.username, content: comment_area.value },
              ],
            }),
            headers: {
              "Content-type": "application/json",
            },
          })
            .then((res)=>getData())
            .catch((err) => console.log(err));
          comment_modal.style.display = "none";
        });
      });
      close_comment.addEventListener("click", () => {
        comment_modal.style.display = "none";
      });

      
      like_div.append(like_count, comment_count);

      blog_box.append(
        blog_username,
        blog_date,
        blog_title,
        blog_content,
        like_div,
        comment_tag,
        comment_div
      );
      blog_container.append(blog_box);
    });
  } else {
    alert("you are not authorized");
    window.location.href = "signin.html";
  }
}


//for closing the modal
document.querySelector("#closeEditPostButton").addEventListener("click", () => {
  document.querySelector("#post_edit_modal").style.display = "none";
});



let pagination_div = document.querySelector("#pagination");
function pagination() {
  pagination_div.innerHTML = null;
  for (let i = 0; i <= 5; i++) {
    let btn = document.createElement("button");
    btn.innerText = i + 1;
    btn.addEventListener("click", () => {
      fetch(`https://mock5-flax.vercel.app/blogs?_page=${i + 1}&_limit=4`)
        .then((res) => res.json())
        .then((res) => display(check, res))
        .catch((err) => console.log(err));
    });
    pagination_div.append(btn);
  }
}
pagination();

function gotoboard(){
  window.location.href='leaderboard.html'
}