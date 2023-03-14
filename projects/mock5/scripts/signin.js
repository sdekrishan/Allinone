let form = document.querySelector("#form");
function handleSubmit(event) {
  event.preventDefault();

  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let obj = {
    email,
    password,
  };

  fetch(`https://mock5-flax.vercel.app/users?email=${email}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.length > 0) {
        console.log(res);
        alert("login successful");
        window.location.href = "blogs.html";
        localStorage.setItem(
          "token",
          JSON.stringify({ status: true, username: res[0].name })
        );
      } else {
        alert("login failed");
      }
    })
    .catch((err) => {
      alert("Something went wrong! Please try again!");
      console.log(err);
    });
}
