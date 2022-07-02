import fetchRedditPosts from "./fetchRedditPosts";
import renderRedditPost from "./renderRedditPost";
import "./style.css";

fetchRedditPosts()
  .then((response) => {
    const markup = renderRedditPost(response);
    const ul = document.querySelector("[data-reddit]");

    if (ul) {
      ul.innerHTML = markup;
    }
  })
  .catch((err) => console.error(err));
