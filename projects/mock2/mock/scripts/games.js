let page = 1;
let matches_container = document.querySelector("#matches");
let start_date = document.querySelector("#start_date");
let end_date = document.querySelector("#end_date");
let pagination_div = document.querySelector("#pagination");
let year_filter = document.querySelector("#year");

year_filter.addEventListener("change",(event)=>{
    fetch(
        `https://www.balldontlie.io/api/v1/games?seasons[]=${event.target.value}&page=${page}&per_page=10`
      )
        .then((res) => res.json())
        .then((res) =>display_matches(res.data));
})

end_date.addEventListener("input", () => {
  fetch(
    `https://www.balldontlie.io/api/v1/games?start_date=${start_date.value}&end_date=${end_date.value}&per_page=10`
  )
    .then((res) => res.json())
    .then((res) =>display_matches(res.data));
});

function paginate() {
    for (let i = 0; i < 10; i++) {
      let page_button = document.createElement("button");
      page_button.innerText = i + 1;
      pagination_div.append(page_button);
      page_button.addEventListener("click", () => {
        fetch(
            `https://www.balldontlie.io/api/v1/games?page=${i+1}&per_page=10`
          )
            .then((res) => res.json())
            .then((res) =>display_matches(res.data));
      });
    }
  }

  paginate()

function display_matches(arr) {
  matches_container.innerHTML = null;
  if (arr.length > 0) {
    arr.map((match, index) => {
      let box = document.createElement("div");
      box.setAttribute("class", "matches__box");
      let first_team = document.createElement("div");
      let second_team = document.createElement("div");
      let first_tag = document.createElement("span");
      let second_tag = document.createElement("span");
      let first_img = document.createElement("img");
      first_img.setAttribute(
        "src",
        "https://cdn.pixabay.com/photo/2013/07/13/09/46/basketball-155997__340.png"
      );
      let second_img = document.createElement("img");
      second_img.setAttribute(
        "src",
        "https://cdn.pixabay.com/photo/2013/07/13/09/46/basketball-155997__340.png"
      );
      let first_name = document.createElement("h3");
      let second_name = document.createElement("h3");
      let first_date = document.createElement("p");
      let second_date = document.createElement("p");
      let first_status = document.createElement("p");
      let second_status = document.createElement("p");
      let first_score = document.createElement("p");
      let second_score = document.createElement("p");
      let first_season = document.createElement("p");
      let second_season  = document.createElement("p");

      //for first team
      first_name.innerText = `Home-Team : ${match.home_team.full_name}`;
      first_date.innerText = `Date : ${match.date}`;
      first_tag.innerText =
        match.home_team_score > match.visitor_team_score
          ? "WON"
          : match.home_team_score < match.visitor_team_score
          ? "LOSE"
          : "TIE";
          first_tag.setAttribute("class",`${match.home_team_score > match.visitor_team_score
            ? "wontag"
            : match.home_team_score < match.visitor_team_score
            ? "losetag"
            : "tietag"}`)
      first_status.innerText = `Status : ${match.status}`;
      first_score.innerText = `Score :${match.home_team_score}`;
      first_season.innerText= `Season :${match.season}`
      first_team.append(
        first_img,
        first_name,
        first_tag,
        first_date,
        first_score,
        first_status,
        first_season
      );

      second_name.innerText = `Visitor-Team : ${match.visitor_team.full_name}`;
      second_status.innerText = `Status${match.status}`;
      second_date.innerText = `Date : ${match.date}`;
      second_season.innerText= `Season :${match.season}`

      second_tag.innerText =
        match.home_team_score > match.visitor_team_score
          ? "LOSE"
          : match.home_team_score < match.visitor_team_score
          ? "WON"
          : "TIE";
          second_tag.setAttribute("class",`${match.home_team_score > match.visitor_team_score
            ? "losetag"
            : match.home_team_score < match.visitor_team_score
            ? "wontag"
            : "tietag"}`)
      second_score.innerText = `Score : ${match.visitor_team_score}`;
      second_team.append(
        second_img,
        second_name,
        second_tag,
        second_date,
        second_score,
        second_status,
        second_season
      );

      box.append(first_team, "vs", second_team);
      matches_container.append(box);
    });
  } else {
    let comment = document.createElement("h1");
    comment.innerText = "No Games Found";
    matches_container.append(comment);
  }
}
