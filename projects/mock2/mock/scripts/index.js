let page = 1;
let data;
let player_container = document.querySelector("#players__container");
let pagination_div = document.querySelector("#pagination");
let search_bar = document.querySelector("#searchBar");

search_bar.addEventListener("input", (event) => {
  setTimeout(() => {
    fetch(
      `https://www.balldontlie.io/api/v1/players?search=${event.target.value}`
    )
      .then((res) => res.json())
      .then((res) => {
        display(res.data);
      });
  }, 2000);
});

function paginate(data) {
  pagination_div.innerHTML= null
  for (let i =1; i <= Math.ceil(data/10); i++) {
    let page_button = document.createElement("button");
    page_button.innerText = i;
    pagination_div.append(page_button);
    page_button.addEventListener("click", () => {
      get_players(i);
      console.log(i);
    });
  }
}

paginate(25)

async function get_players(page) {
  let response = await fetch(
    `https://www.balldontlie.io/api/v1/players?page=${page}&per_page=10`
  );
  data = await response.json();
  display(data.data);
  console.log(data.data);  
}

function display(arr) {
  player_container.innerHTML = "";
  arr.map((player, index) => {
    let player_div = document.createElement("div");
    player_div.setAttribute("class", "player__div");
    let player_img = document.createElement("img");
    player_img.setAttribute(
      "src",
      "https://cdn-icons-png.flaticon.com/512/166/166344.png"
    );
    let player_name = document.createElement("p");
    let player_pos = document.createElement("p");
    let player_team = document.createElement("button");

    player_name.innerText = `${player.first_name} ${player.last_name}`;
    player_pos.innerText = player.position;
    player_team.innerText = "Team Details";

    // console.log(arr.length);

 


    let modal = document.querySelector("#modal");
    player_team.addEventListener("click", () => {
      modal.innerHTML = null;

      let team_name = document.createElement("h4");
      let team_abb = document.createElement("h4");
      let team_confer = document.createElement("h4");
      let team_division = document.createElement("h4");
      let team_city = document.createElement("h4");
      let del_button = document.createElement("button");
      del_button.innerText = "X";
      del_button.addEventListener("click", () => {
        modal.style.display = "none";
      });
      team_name.innerText = `Team Name : ${player.team.full_name}`;
      team_abb.innerText = `Abbreviation : ${player.team.abbreviation}`;
      team_confer.innerText = `Conference : ${player.team.conference}`;
      team_division.innerText = `Division : ${player.team.division}`;
      team_city.innerText = `City : ${player.team.city}`;

   
      modal.append(
        del_button,
        team_name,
        team_abb,
        team_confer,
        team_division,
        team_city
      );
      modal.style.display = "block";
    });

    player_div.append(player_img, player_name, player_pos, player_team);
    player_container.append(player_div);
  });
}

get_players(page);
