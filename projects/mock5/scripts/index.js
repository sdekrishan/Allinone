let form = document.querySelector("#form");
function handleSubmit(event) {
  event.preventDefault();
  let name = document.querySelector("#name").value;
  let avatar = document.querySelector("#avatar").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let obj = {
    id: Date.now(),
    name,
    avatar,
    email,
    password,
  };

  fetch(`https://mock5-flax.vercel.app/users`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => {
      alert("User Registered Successfully");
      window.location.href = "signin.html";
    })
    .catch((err) => {
      alert("Something went wrong! Please try again!");
      console.log(err);
    });
}
