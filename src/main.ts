import fetchRedditPosts from "./fetchRedditPosts";
import "./style.css";

fetchRedditPosts()
  .then((posts) => console.log(posts))
  .catch((err) => console.error(err));
