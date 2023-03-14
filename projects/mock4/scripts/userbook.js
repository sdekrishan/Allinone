let container = document.querySelector("#container");
    let url = "https://mockfour-brown.vercel.app/books";
    document.querySelector("#home").addEventListener("click", () => {
      window.location.href = "index.html";
    });
    async function get_books(url) {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      data = data.filter((el, ind) => el.borrowed === true);
      display(data);
    }

    get_books(url);

    function display(arr) {
      container.innerHTML = null;

      arr.forEach((book, ind) => {
        let book_div = document.createElement("div");
        let book_img = document.createElement("img");
        let book_name = document.createElement("h3");
        let book_author = document.createElement("h3");
        let book_genre = document.createElement("h3");
        let book_borrow_button = document.createElement("button");
        let book_edition = document.createElement("h3");
        let book_publisher = document.createElement("h3");
        let book_cost = document.createElement("h3");

        book_img.setAttribute("src", "https://pngimg.com/d/book_PNG2111.png");
        book_name.innerText = book.book_name;
        book_author.innerText = book.author;
        book_genre.innerText = book.genre;
        book_edition.innerText = book.edition;
        book_publisher.innerText = book.publisher;
        book_cost.innerText = book.cost;

        book_div.append(
          book_img,
          book_name,
          book_author,
          book_genre,
          book_edition,
          book_publisher,
          book_cost
        );
        container.append(book_div);

        book_borrow_button.addEventListener("click", () => {
          let modal_div = document.querySelector("#user_model");
          let modal_img = document.createElement("img");
          let modal_name = document.createElement("h3");
          let modal_author = document.createElement("h3");
          let modal_genre = document.createElement("h3");
          let modal_edition = document.createElement("h3");
          let modal_publisher = document.createElement("h3");
          let modal_cost = document.createElement("h3");
          let modal_close_button = document.createElement("button");
          let modal_confirm_button = document.createElement("button");

          modal_img.setAttribute(
            "src",
            "https://pngimg.com/d/book_PNG2111.png"
          );
          modal_name.innerText = book.book_name;
          modal_author.innerText = book.author;
          modal_genre.innerText = book.genre;
          modal_edition.innerText = book.edition;
          modal_publisher.innerText = book.publisher;
          modal_cost.innerText = book.cost;
          modal_close_button.innerText = "Close";
          modal_confirm_button.innerText = "Confirm";

          modal_div.append(
            modal_img,
            modal_name,
            modal_author,
            modal_genre,
            modal_edition,
            modal_publisher,
            modal_cost,
            modal_close_button,
            modal_confirm_button
          );
          modal_div.style.display = "block";

          modal_close_button.addEventListener("click", () => {
            modal_div.style.display = "none";
          });

          modal_confirm_button.addEventListener("click", () => {
            fetch(`https://mockfour-brown.vercel.app/books/${book.id}`, {
              method: "PATCH",
              body: JSON.stringify({ borrowed: true }),
              headers: {
                "Content-type": "application/json",
              },
            })
              .then((r) => console.log(r))
              .catch((e) => console.log(e));
          });
        });
      });
    }