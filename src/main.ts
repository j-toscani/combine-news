import renderRedditPost from "./renderRedditPost";
import "./style.css";

fetch("/api/news")
  .then((response) => response.json())
  .then(({redditPosts}) => {
    const ul = document.querySelector("[data-reddit]");

    if(ul) {
        ul.innerHTML = renderRedditPost(redditPosts);
    }
  })
  .catch(err => console.log(err));
