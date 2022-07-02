import renderRedditPost from "./renderRedditPost";
import renderTweets from "./renderTweets";
import "./style.css";

fetch("/api/news")
  .then((response) => response.json())
  .then(({ redditPosts, tweets }) => {
    const redditUl = document.querySelector("[data-reddit]");
    const twitterUl = document.querySelector("[data-twitter]");
    if (redditUl) {
      redditUl.innerHTML = renderRedditPost(redditPosts);
    }
    if (twitterUl) {
      twitterUl.innerHTML = renderTweets(tweets);
    }
  })
  .catch((err) => console.log(err));
