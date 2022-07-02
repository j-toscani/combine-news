function createTweetMarkup(post: any) {
  const { text } = post;
  return `<li>
          <p>
            ${text}
          </p>
        </li>`;
}

export default function renderTweets(response: any) {
  const tweets = response.data;
  return tweets.map(createTweetMarkup).join("");
}
